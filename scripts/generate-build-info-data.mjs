import fs from 'node:fs';
import vm from 'node:vm';

const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const relicPrelude = appSource
  .split('window.activePlanner=')[0]
  .replace('const relics =', 'globalThis.relics =');
const relicContext = {};
vm.runInNewContext(relicPrelude, relicContext);

const blessingSource = fs.readFileSync(new URL('../blessings.js', import.meta.url), 'utf8');
const blessingPrelude = blessingSource
  .split('let selectedBlessings')[0]
  .replace('const blessings =', 'globalThis.blessings =')
  .replace('const blessingPassives =', 'globalThis.blessingPassives =')
  .replace('const blessingStages =', 'globalThis.blessingStages =');
const blessingContext = {};
vm.runInNewContext(blessingPrelude, blessingContext);

const relicInfo = Object.fromEntries(relicContext.relics.map(relic => [relic.name, {
  sections: [{ title: 'Relic effects', items: relic.effects }]
}]));

const blessingInfo = Object.fromEntries(blessingContext.blessings.map(blessing => {
  const stage = blessingContext.blessingStages.find(candidate => candidate.kind === blessing.kind
    && (blessing.kind === 'god' ? candidate.god === blessing.god : candidate.tier === blessing.tier));
  return [blessing.name, {
    sections: [
      { title: 'Blessing effect', items: blessing.effects },
      { title: `${stage.label} passive effects`, items: blessingContext.blessingPassives[stage.passive] }
    ]
  }];
}));

const catalogs = {
  relics: relicContext.relics.map(relic => ({ tier: relic.tier, name: relic.name, icon: relic.icon, detail: relic.tag })),
  blessings: blessingContext.blessings.map(blessing => ({
    kind: blessing.kind,
    tier: blessing.tier,
    god: blessing.god,
    name: blessing.name,
    icon: blessing.icon,
    detail: blessing.path
  }))
};

const output = `window.EQUILIBRIUM_BUILD_INFO = ${JSON.stringify({ relics: relicInfo, blessings: blessingInfo, catalogs }, null, 2)};\n`;
fs.writeFileSync(new URL('../build-info-data.js', import.meta.url), output);
