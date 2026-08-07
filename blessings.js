const blessings = [
  {
    kind: 'tier', tier: 1, name: 'Adrenaline Junkie', path: 'Chaos', icon: 'assets/blessings/adrenaline-junkie.png',
    effects: ['Maximum adrenaline is increased by 50%.', 'Adrenaline generation is increased by 50%.']
  },
  {
    kind: 'tier', tier: 1, name: 'Big Boned', path: 'Balance', icon: 'assets/blessings/big-boned.png',
    effects: ['Maximum life points are increased by 50%.', 'All damage gains bonus damage equal to 5% of your maximum life points.']
  },
  {
    kind: 'tier', tier: 1, name: "Teragard's Aegis", path: 'Order', icon: 'assets/blessings/teragards-aegis.png',
    effects: ['Base ability damage gains 25% of your armour value, rising to 50% with a defender or 75% with a shield.', 'Base health regeneration gains 2.5% of maximum life points, rising to 5% with a defender or 7.5% with a shield.']
  },
  {
    kind: 'tier', tier: 2, name: 'Abyssal Cinders', path: 'Chaos', icon: 'assets/blessings/abyssal-cinders.png',
    effects: ['Attacks deal 15% ability damage as bonus damage on hit.', 'Attacks have a 5% chance to trigger an Inferno of Zamorak for 100–200% ability damage.']
  },
  {
    kind: 'tier', tier: 2, name: 'Barkscales', path: 'Balance', icon: 'assets/blessings/barkscales.png',
    effects: ['Incoming damage is reduced by 10% of your armour value.', 'After five reductions, a Grasp of Guthix deals 80–120% ability damage as poison in a 3×3 area.']
  },
  {
    kind: 'tier', tier: 2, name: 'Striking Light', path: 'Order', icon: 'assets/blessings/striking-light.png',
    effects: ['Basic attack damage is increased by 40%.', 'Basic attacks can unleash Light of Saradomin every 9 seconds for 40–60% ability damage plus 250% of your armour value.']
  },
  {
    kind: 'tier', tier: 3, name: 'Avernic Rampage', path: 'Chaos', icon: 'assets/blessings/avernic-rampage.png',
    effects: ['Attacks have a 5% chance to activate Avernic Rampage for 7.2 seconds.', 'During the rampage, abilities and weapon special attacks use no adrenaline, except the granite maul special attack.']
  },
  {
    kind: 'tier', tier: 3, name: 'Eternal Sustenance', path: 'Balance', icon: 'assets/blessings/eternal-sustenance.png',
    effects: ['Food is no longer consumed when eaten.', 'Eating no longer drains adrenaline.']
  },
  {
    kind: 'tier', tier: 3, name: 'Steadfast Will', path: 'Order', icon: 'assets/blessings/steadfast-will.png',
    effects: ['Bash deals 350–450% of armour value as additional damage.', 'Preparation reduces every ability cooldown by 12 seconds on activation.', 'Reflect returns 100% of incoming damage plus 10–15% of armour value to up to nine targets.', 'Revenge has double duration and cooldown, with a maximum of 20 stacks.']
  },
  {
    kind: 'god', god: 1, name: "Demon's Mark", path: 'Chaos', icon: 'assets/blessings/demons-mark.png',
    effects: ["Accuracy is always calculated using the target's weakness."]
  },
  {
    kind: 'god', god: 1, name: 'Splash Zone', path: 'Balance', icon: 'assets/blessings/splash-zone.png',
    effects: ['Area-of-effect and multi-target attacks deal 30% more damage.', 'Area-of-effect abilities deal another 5% damage per tile occupied by the target.']
  },
  {
    kind: 'god', god: 1, name: 'Sacred Fervor', path: 'Order', icon: 'assets/blessings/sacred-fervor.png',
    effects: ['Melee, Magic, Ranged, and Necromancy ability and special-attack cooldowns are reduced by 30%.']
  },
  {
    kind: 'tier', tier: 4, name: 'Havoc Born', path: 'Chaos', icon: 'assets/blessings/havoc-born.png',
    effects: ['Damage is increased by 20%.', 'Maximum life points and armour value are each reduced by 25%.']
  },
  {
    kind: 'tier', tier: 4, name: 'True Equilibrium', path: 'Balance', icon: 'assets/blessings/true-equilibrium.png',
    effects: ['For each unique path chosen across Tiers 1–6, gain 75 base ability damage, 50 armour, 500 life points, 5% critical strike chance, 7.5% critical strike damage, and 5 Prayer bonus.', 'The buff applies once, twice, or three times depending on whether your build contains one, two, or all three paths.']
  },
  {
    kind: 'tier', tier: 4, name: 'Higher Power', path: 'Order', icon: 'assets/blessings/higher-power.png',
    effects: ['Base ability damage is increased by 30%.', "Berserk, Death's Swiftness, Living Death, and Sunshine become unavailable."]
  },
  {
    kind: 'tier', tier: 5, name: 'Unholy Critual', path: 'Chaos', icon: 'assets/blessings/unholy-critual.png',
    effects: ['Gain 15% critical strike chance, capped at 50%; excess chance converts to critical strike damage at a 1:1 ratio.', 'Inferno of Zamorak gains 50% critical strike damage and is unleashed whenever you critically strike.']
  },
  {
    kind: 'tier', tier: 5, name: 'Tearing Thorns', path: 'Balance', icon: 'assets/blessings/tearing-thorns.png',
    effects: ['Damage-over-time abilities last 100% longer.', 'Every fifth damage-over-time hit triggers Grasp of Guthix.', 'Grasp of Guthix adds 20–30% of maximum life points as damage and deals 80–120% ability damage as poison in a 3×3 area.']
  },
  {
    kind: 'tier', tier: 5, name: 'Lord of Light', path: 'Order', icon: 'assets/blessings/lord-of-light.png',
    effects: ['Basic attacks trigger five Lights of Saradomin around the target every 14.4 seconds, each hitting up to eight nearby targets.', 'Light of Saradomin gains 2% damage per point of Prayer bonus and heals you for 5% of damage dealt.']
  },
  {
    kind: 'tier', tier: 6, name: 'Perfidious', path: 'Chaos', icon: 'assets/blessings/perfidious.png',
    effects: ['Inferno of Zamorak activates five times as often.', 'Grasp of Guthix requires only two reductions.', 'Light of Saradomin cooldown is reduced to 4.8 seconds.']
  },
  {
    kind: 'tier', tier: 6, name: 'Envenomed', path: 'Balance', icon: 'assets/blessings/envenomed.png',
    effects: ['Poison damage is increased by 50%, plus 2% for every Herblore level.', 'Damaging an enemy disables its poison immunity for 30 seconds.']
  },
  {
    kind: 'tier', tier: 6, name: 'Tempered Heart', path: 'Order', icon: 'assets/blessings/tempered-heart.png',
    effects: ['Generate 6% adrenaline every 1.2 seconds.']
  },
  {
    kind: 'god', god: 2, name: 'Chaotic Insight', path: 'Chaos', icon: 'assets/blessings/chaotic-insight.png',
    effects: ['Every combat equipment item counts as two additional pieces toward its set effect.']
  },
  {
    kind: 'god', god: 2, name: 'Power Archive', path: 'Balance', icon: 'assets/blessings/power-archive.png',
    effects: ['Grants an Automaton Control Bot that stores up to 20 weapon or armour gizmos and applies their effects while augmented equipment is worn.', 'Ranks of stored combat perks are doubled, except where extra ranks have no benefit.']
  },
  {
    kind: 'god', god: 2, name: 'Genesis Essence', path: 'Order', icon: 'assets/blessings/genesis-essence.png',
    effects: ['Equipped weapons are treated as tier 120.']
  }
];

const blessingPassives = {
  tier1: ['50% chance to save combat runes and ammunition.', '50% chance to save ectoplasm and Necromancy runes used by abilities or incantations.', 'Grants one blessing progression reset.'],
  tier2: ['Dive is automatically unlocked.', 'Every combat style gains one tile of attack range, capped at 10 tiles.'],
  tier3: ['75% chance to save combat runes, ammunition, ectoplasm, and Necromancy runes.', 'Movement ability cooldowns are reduced to 4.2 seconds.', "Grants Nature's rune pouch, which holds four rune types but has no rune-saving passive."],
  god1: ['Grants one blessing progression reset.', 'Allows you to choose the active Araxxor, Rise of the Six, and Vorago rotations.'],
  tier4: ["All War's Wares rewards are unlocked.", 'Maximum adrenaline is increased by 25%.'],
  tier5: ['God books, scriptures, grimoires, and scrimshaws no longer consume charge.', 'Equipment no longer degrades.'],
  tier6: ['95% chance to save combat runes, ammunition, ectoplasm, and Necromancy runes.'],
  god2: ['Grants one blessing progression reset.']
};

const blessingStages = [
  { kind: 'tier', tier: 1, label: 'Tier 1', passive: 'tier1' },
  { kind: 'tier', tier: 2, label: 'Tier 2', passive: 'tier2' },
  { kind: 'tier', tier: 3, label: 'Tier 3', passive: 'tier3' },
  { kind: 'god', god: 1, label: 'God Tier 1', passive: 'god1', source: [1, 2, 3] },
  { kind: 'tier', tier: 4, label: 'Tier 4', passive: 'tier4' },
  { kind: 'tier', tier: 5, label: 'Tier 5', passive: 'tier5' },
  { kind: 'tier', tier: 6, label: 'Tier 6', passive: 'tier6' },
  { kind: 'god', god: 2, label: 'God Tier 2', passive: 'god2', source: [4, 5, 6] }
];

let selectedBlessings = {};
try { selectedBlessings = JSON.parse(localStorage.getItem('equilibrium-blessing-picks') || '{}'); } catch { selectedBlessings = {}; }
for (let tier = 1; tier <= 6; tier++) {
  if (!blessings.some(item => item.kind === 'tier' && item.tier === tier && item.name === selectedBlessings[tier])) delete selectedBlessings[tier];
}
let randomizedBlessingBuild = localStorage.getItem('equilibrium-blessing-randomized') === 'true';
if (![1, 2, 3, 4, 5, 6].every(tier => selectedBlessings[tier])) {
  randomizedBlessingBuild = false;
  localStorage.removeItem('equilibrium-blessing-randomized');
}

const blessingIconCache = new Map();
let blessingIconsReady = false;
Promise.all(blessings.map(item => new Promise(resolve => {
  const image = new Image();
  image.onload = resolve;
  image.onerror = resolve;
  image.src = window.BLESSING_ICON_DATA?.[item.icon] || item.icon;
  blessingIconCache.set(item.icon, image);
}))).then(() => {
  blessingIconsReady = true;
  updateBlessingPlanner();
});

const blessingTiersElement = document.querySelector('#blessingTiers');
const blessingDialog = document.querySelector('#blessingDialog');
let activeBlessing = null;
let activeBlessingStage = null;

function blessingForTier(tier) {
  return blessings.find(item => item.kind === 'tier' && item.tier === tier && item.name === selectedBlessings[tier]);
}

function resolveGodPath(sourceTiers) {
  const paths = sourceTiers.map(tier => blessingForTier(tier)?.path);
  if (paths.some(path => !path)) return null;
  const totals = { Chaos: 0, Balance: 0, Order: 0 };
  paths.forEach(path => totals[path]++);
  if (totals.Chaos === 1 && totals.Balance === 1 && totals.Order === 1) return 'Balance';
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

function godBlessing(god) {
  const stage = blessingStages.find(item => item.kind === 'god' && item.god === god);
  const path = resolveGodPath(stage.source);
  return path ? blessings.find(item => item.kind === 'god' && item.god === god && item.path === path) : null;
}

function renderBlessingTiers() {
  blessingStages.forEach(stage => {
    const section = document.createElement('section');
    section.className = `tier blessing-tier ${stage.kind === 'god' ? 'god-tier' : ''}`;
    section.dataset.kind = stage.kind;
    section.dataset.stage = stage.kind === 'god' ? stage.god : stage.tier;
    const numeral = stage.kind === 'god' ? (stage.god === 1 ? 'I' : 'II') : `0${stage.tier}`;
    const note = stage.kind === 'god' ? 'Automatically resolved from the previous three tiers' : 'Choose one path';
    section.innerHTML = `<div class="tier-label"><span>${stage.kind === 'god' ? 'GOD TIER' : 'BLESSING TIER'}</span><strong>${numeral}</strong><small>${note}</small></div><div class="tier-options"></div>`;
    const options = blessings.filter(item => item.kind === stage.kind && (stage.kind === 'god' ? item.god === stage.god : item.tier === stage.tier));
    options.forEach(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'blessing-card';
      button.dataset.name = item.name;
      button.dataset.path = item.path;
      button.innerHTML = `<span class="info" aria-label="More information">i</span><span class="blessing-icon"><img src="${item.icon}" alt=""></span><h3>${item.name}</h3><span class="blessing-path">${item.path}</span>`;
      button.onclick = event => {
        if (stage.kind === 'god' || event.target.classList.contains('info')) openBlessingInfo(item, stage);
        else pickBlessing(item);
      };
      section.querySelector('.tier-options').append(button);
    });
    blessingTiersElement.append(section);
  });
}

function pickBlessing(item) {
  if (selectedBlessings[item.tier] !== item.name) {
    randomizedBlessingBuild = false;
    localStorage.removeItem('equilibrium-blessing-randomized');
  }
  selectedBlessings[item.tier] = item.name;
  localStorage.setItem('equilibrium-blessing-picks', JSON.stringify(selectedBlessings));
  updateBlessingPlanner();
  if (blessingDialog.open) blessingDialog.close();
}

function openBlessingInfo(item, stage) {
  activeBlessing = item;
  activeBlessingStage = stage;
  document.querySelector('#blessingDialogIcon').innerHTML = `<img src="${item.icon}" alt="${item.name} blessing icon">`;
  document.querySelector('#blessingDialogTier').textContent = `${stage.label.toUpperCase()} · ${item.path}`;
  document.querySelector('#blessingDialogName').textContent = item.name;
  document.querySelector('#blessingDialogText').innerHTML = `<h3>Blessing effect</h3>${item.effects.map(effect => `<p>${effect}</p>`).join('')}<h3>${stage.label} passive effects</h3>${blessingPassives[stage.passive].map(effect => `<p>${effect}</p>`).join('')}`;
  const selectButton = document.querySelector('#blessingModalSelect');
  if (stage.kind === 'god') {
    const resolved = godBlessing(stage.god);
    selectButton.hidden = false;
    selectButton.disabled = true;
    selectButton.textContent = resolved?.name === item.name ? 'Your determined God blessing' : (resolved ? `Path determined as ${resolved.path}` : 'Complete the previous three tiers');
  } else {
    selectButton.hidden = false;
    selectButton.disabled = selectedBlessings[item.tier] === item.name;
    selectButton.textContent = selectButton.disabled ? 'Selected blessing' : 'Select this blessing';
  }
  blessingDialog.showModal();
  lockPageScroll();
}

function refreshBlessingCards() {
  document.querySelectorAll('.blessing-tier').forEach(section => {
    const god = section.dataset.kind === 'god';
    const stageNumber = Number(section.dataset.stage);
    const resolved = god ? godBlessing(stageNumber) : null;
    section.querySelectorAll('.blessing-card').forEach(card => {
      const selected = god ? resolved?.name === card.dataset.name : selectedBlessings[stageNumber] === card.dataset.name;
      card.classList.toggle('selected', selected);
      card.classList.toggle('god-locked', god && !resolved);
      card.setAttribute('aria-pressed', String(!!selected));
    });
  });
}

function updateBlessingPlanner() {
  const count = [1, 2, 3, 4, 5, 6].filter(tier => selectedBlessings[tier]).length;
  const pathTotals = { Chaos: 0, Balance: 0, Order: 0 };
  [1, 2, 3, 4, 5, 6].forEach(tier => {
    const path = blessingForTier(tier)?.path;
    if (path) pathTotals[path]++;
  });
  const firstGod = godBlessing(1);
  const secondGod = godBlessing(2);
  const complete = count === 6 && firstGod && secondGod;
  document.querySelector('#chaosCount').textContent = pathTotals.Chaos;
  document.querySelector('#balanceCount').textContent = pathTotals.Balance;
  document.querySelector('#orderCount').textContent = pathTotals.Order;
  document.querySelector('#godForecast').textContent = `God Tier I: ${firstGod ? `${firstGod.name} (${firstGod.path})` : 'awaiting Tiers 1–3'} · God Tier II: ${secondGod ? `${secondGod.name} (${secondGod.path})` : 'awaiting Tiers 4–6'}`;
  document.querySelector('#downloadBlessings').disabled = !complete || !blessingIconsReady;
  document.querySelector('#blessingForgeTitle').textContent = complete ? 'Your blessing path is complete' : 'Complete your blessing path';
  document.querySelector('#blessingForgeCopy').textContent = complete
    ? (prefersNativeShare ? 'Your divine path is ready. Open the share sheet to save or share it.' : 'Your six choices and both determined God-tier blessings are ready to forge.')
    : `Choose ${6 - count} more blessing${6 - count === 1 ? '' : 's'} to reveal your complete divine path.`;
  if (window.activePlanner === 'blessings') {
    document.querySelector('#progressText').textContent = complete ? '6 of 6 + 2 God tiers' : `${count} of 6 selected`;
    document.querySelector('#progressBar').style.width = `${count / 6 * 100}%`;
  }
  refreshBlessingCards();
}

function resetBlessingPicks() {
  selectedBlessings = {};
  localStorage.removeItem('equilibrium-blessing-picks');
  randomizedBlessingBuild = false;
  localStorage.removeItem('equilibrium-blessing-randomized');
  if (blessingDialog.open) blessingDialog.close();
  updateBlessingPlanner();
  showToast('All blessing picks reset');
}
window.resetBlessingPicks = resetBlessingPicks;

function randomizeBlessingPicks() {
  selectedBlessings = {};
  for (let tier = 1; tier <= 6; tier++) {
    const choices = blessings.filter(item => item.kind === 'tier' && item.tier === tier);
    selectedBlessings[tier] = choices[Math.floor(Math.random() * choices.length)].name;
  }
  localStorage.setItem('equilibrium-blessing-picks', JSON.stringify(selectedBlessings));
  randomizedBlessingBuild = true;
  localStorage.setItem('equilibrium-blessing-randomized', 'true');
  if (blessingDialog.open) blessingDialog.close();
  updateBlessingPlanner();
  showToast('Blessings randomized');
}
window.randomizeBlessingPicks = randomizeBlessingPicks;

document.querySelector('#closeBlessing').onclick = () => blessingDialog.close();
blessingDialog.onclick = event => { if (event.target === blessingDialog) blessingDialog.close(); };
blessingDialog.addEventListener('close', unlockPageScroll);
document.querySelector('#blessingModalSelect').onclick = () => pickBlessing(activeBlessing);

function activatePlanner(view, persist = true) {
  window.activePlanner = view;
  if (persist) localStorage.setItem('equilibrium-planner-view', view);
  document.querySelector('#relicPlanner').hidden = view !== 'relics';
  document.querySelector('#blessingPlanner').hidden = view !== 'blessings';
  document.querySelectorAll('[data-planner-view]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.plannerView === view)));
  const blessingView = view === 'blessings';
  document.querySelector('#heroCopy').textContent = blessingView
    ? 'Choose six blessings across Chaos, Balance, and Order. Your path determines two God-tier powers and a shareable blessing card.'
    : 'Choose one relic from every tier. Explore each power, commit to your build, then forge a shareable relic card.';
  document.querySelector('#resetPicks').textContent = 'Reset';
  document.querySelector('#resetPicks').setAttribute('aria-label', blessingView ? 'Reset all blessing picks' : 'Reset all relic picks');
  document.querySelector('#randomizePicks').setAttribute('aria-label', blessingView ? 'Randomize all blessing picks' : 'Randomize all relic picks');
  if (blessingView) updateBlessingPlanner();
  else window.refreshRelicPlanner?.();
}

document.querySelectorAll('[data-planner-view]').forEach(button => {
  button.onclick = () => activatePlanner(button.dataset.plannerView);
});

function drawBlessingImage(ctx, image, x, y, width, height) {
  const scale = Math.min(width / image.width, height / image.height);
  const drawnWidth = image.width * scale;
  const drawnHeight = image.height * scale;
  ctx.drawImage(image, x + (width - drawnWidth) / 2, y + (height - drawnHeight) / 2, drawnWidth, drawnHeight);
}

function wrapBlessingText(ctx, text, centerX, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let row = '';
  const rows = [];
  words.forEach(word => {
    const test = `${row}${word} `;
    if (ctx.measureText(test).width > maxWidth && row) {
      rows.push(row.trim());
      row = `${word} `;
    } else row = test;
  });
  rows.push(row.trim());
  rows.forEach((line, index) => ctx.fillText(line, centerX, y + index * lineHeight));
}

document.querySelector('#downloadBlessings').onclick = () => {
  const canvas = document.querySelector('#blessingCanvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 1600, 1000);
  gradient.addColorStop(0, '#071813');
  gradient.addColorStop(.48, '#103a2d');
  gradient.addColorStop(1, '#402812');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1600, 1000);
  ctx.strokeStyle = '#d7ae5b';
  ctx.lineWidth = 3;
  ctx.strokeRect(34, 34, 1532, 932);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e4bb67';
  ctx.font = '600 24px Georgia';
  ctx.fillText('LEAGUES II · EQUILIBRIUM', 800, 92);
  ctx.fillStyle = '#eff8f2';
  ctx.font = '600 58px Georgia';
  ctx.fillText('MY BLESSING PATH', 800, 158);
  ctx.fillStyle = '#8fb4a3';
  ctx.font = '18px Arial';
  ctx.fillText('Six choices. Two God-tier outcomes. One divine path.', 800, 202);
  if (randomizedBlessingBuild) drawRandomizedBadge(ctx, 1600);

  const chosenStages = blessingStages.map(stage => ({
    stage,
    blessing: stage.kind === 'god' ? godBlessing(stage.god) : blessingForTier(stage.tier)
  }));
  const pathColours = { Chaos: '#e9635b', Balance: '#54e6b4', Order: '#71b7ff' };
  chosenStages.forEach(({ stage, blessing }, index) => {
    const column = index % 4;
    const row = Math.floor(index / 4);
    const x = 55 + column * 380;
    const y = 245 + row * 310;
    const centerX = x + 165;
    ctx.fillStyle = stage.kind === 'god' ? 'rgba(54,48,25,.92)' : (index % 2 ? '#102f25' : '#0b2b22');
    ctx.fillRect(x, y, 330, 270);
    ctx.strokeStyle = stage.kind === 'god' ? '#9c8147' : '#396a57';
    ctx.strokeRect(x, y, 330, 270);
    ctx.fillStyle = pathColours[blessing.path];
    ctx.font = '700 14px Arial';
    ctx.fillText(stage.label.toUpperCase(), centerX, y + 27);
    drawBlessingImage(ctx, blessingIconCache.get(blessing.icon), centerX - 56, y + 42, 112, 112);
    ctx.fillStyle = '#effaf4';
    ctx.font = '600 20px Georgia';
    wrapBlessingText(ctx, blessing.name, centerX, y + 188, 285, 23);
    ctx.fillStyle = pathColours[blessing.path];
    ctx.font = '700 11px Arial';
    ctx.fillText(blessing.path.toUpperCase(), centerX, y + 246);
  });
  ctx.fillStyle = '#6f9787';
  ctx.font = '13px Arial';
  ctx.fillText('FORGED WITH THE EQUILIBRIUM LEAGUE PLANNER', 800, 922);
  const dataUrl = canvas.toDataURL('image/png');
  const file = dataUrlToFile(dataUrl, 'equilibrium-blessing-build.png');
  if (isMobileDevice) {
    openSavePreview(dataUrl, file, 'blessing');
    return;
  }
  downloadDataUrl(dataUrl, file.name, 'Blessing card downloaded');
};

if (prefersNativeShare) {
  document.querySelector('#downloadBlessings span').textContent = 'Save blessing card';
  document.querySelector('#downloadBlessings small').textContent = 'OPEN SHARE SHEET';
}

renderBlessingTiers();
activatePlanner(window.activePlanner === 'blessings' ? 'blessings' : 'relics', false);
updateBlessingPlanner();
