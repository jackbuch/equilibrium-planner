const payload = readCompactBuildPayload();
const invalidBuild = document.querySelector('#invalidBuild');
const sharedBuild = document.querySelector('#sharedBuild');
const buildInfoDialog = document.querySelector('#buildInfoDialog');
const iconPattern = /^assets\/(relics|blessings)\/[a-z0-9-]+\.png$/;

function resolveGodPath(picks) {
  const counts = { Chaos: 0, Balance: 0, Order: 0 };
  picks.forEach(pick => { counts[pick.detail] += 1; });
  if (Object.values(counts).every(count => count === 1)) return 'Balance';
  return Object.entries(counts).reduce((winner, entry) => entry[1] > winner[1] ? entry : winner)[0];
}

function readCompactBuildPayload() {
  const code = window.location.hash.slice(1);
  if (!/^[rb](?:-[1-5])+(?:-x)?$/.test(code)) return null;

  const parts = code.split('-');
  const type = parts.shift();
  const randomized = parts.at(-1) === 'x';
  if (randomized) parts.pop();
  const choices = parts.map(Number);
  const catalogs = window.EQUILIBRIUM_BUILD_INFO?.catalogs;
  if (!catalogs) return null;

  if (type === 'r') {
    if (choices.length < 7) return null;
    const picks = [];
    for (let tier = 1; tier <= 7; tier++) {
      const tierRelics = catalogs.relics.filter(relic => relic.tier === tier);
      const relic = tierRelics[choices[tier - 1] - 1];
      if (!relic) return null;
      picks.push({ label: `Tier ${tier}`, name: relic.name, icon: relic.icon, detail: relic.detail });
    }

    const rejuvenated = picks[5].name === 'Rejuvenated';
    if (!rejuvenated && choices.length !== 7) return null;
    if (rejuvenated && choices.length !== 9) return null;

    let bonus = null;
    if (rejuvenated) {
      const bonusTier = choices[7];
      const tierRelics = catalogs.relics.filter(relic => relic.tier === bonusTier);
      const relic = tierRelics[choices[8] - 1];
      if (bonusTier < 1 || bonusTier > 5 || !relic || picks[bonusTier - 1].name === relic.name) return null;
      bonus = {
        label: `Rejuvenated pick · Tier ${bonusTier}`,
        name: relic.name,
        icon: relic.icon,
        detail: relic.detail
      };
    }
    return { v: 1, type: 'relics', randomized, picks, bonus };
  }

  if (type === 'b') {
    if (choices.length !== 6) return null;
    const tierPicks = [];
    for (let tier = 1; tier <= 6; tier++) {
      const tierBlessings = catalogs.blessings.filter(blessing => blessing.kind === 'tier' && blessing.tier === tier);
      const blessing = tierBlessings[choices[tier - 1] - 1];
      if (!blessing) return null;
      tierPicks.push({ label: `Tier ${tier}`, name: blessing.name, icon: blessing.icon, detail: blessing.detail });
    }

    const godPick = (god, sourcePicks) => {
      const path = resolveGodPath(sourcePicks);
      const blessing = catalogs.blessings.find(item => item.kind === 'god' && item.god === god && item.detail === path);
      return { label: `God Tier ${god}`, name: blessing.name, icon: blessing.icon, detail: blessing.detail, god: true };
    };
    const picks = [
      ...tierPicks.slice(0, 3),
      godPick(1, tierPicks.slice(0, 3)),
      ...tierPicks.slice(3),
      godPick(2, tierPicks.slice(3))
    ];
    return { v: 1, type: 'blessings', randomized, picks };
  }

  return null;
}

function validText(value, maxLength = 90) {
  return typeof value === 'string' && value.length > 0 && value.length <= maxLength;
}

function validPick(pick, type) {
  return pick && validText(pick.label, 28) && validText(pick.name) && validText(pick.detail, 90)
    && typeof pick.icon === 'string' && iconPattern.test(pick.icon)
    && pick.icon.startsWith(`assets/${type === 'relics' ? 'relics' : 'blessings'}/`)
    && !!window.EQUILIBRIUM_BUILD_INFO?.[type]?.[pick.name];
}

function validPayload(value) {
  if (!value || value.v !== 1 || !['relics', 'blessings'].includes(value.type) || !Array.isArray(value.picks)) return false;
  const expected = value.type === 'relics' ? 7 : 8;
  if (value.picks.length !== expected || !value.picks.every(pick => validPick(pick, value.type))) return false;
  return !value.bonus || (value.type === 'relics' && validPick(value.bonus, value.type));
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast('Build link copied');
  } catch {
    const field = document.createElement('textarea');
    field.value = window.location.href;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    showToast(copied ? 'Build link copied' : 'Copy the URL from your address bar');
  }
}

function renderPick(pick) {
  const card = document.createElement('article');
  card.className = 'shared-pick';
  if (pick.god) card.classList.add('god-pick');
  if (payload.type === 'blessings') card.classList.add(`path-${pick.detail.toLowerCase()}`);

  const infoButton = document.createElement('button');
  infoButton.type = 'button';
  infoButton.className = 'pick-info';
  infoButton.setAttribute('aria-label', `More information about ${pick.name}`);
  infoButton.textContent = 'i';
  infoButton.onclick = () => openBuildInfo(pick);

  const label = document.createElement('span');
  label.className = 'pick-label';
  label.textContent = pick.label;
  const image = document.createElement('img');
  image.src = pick.icon;
  image.alt = `${pick.name} icon`;
  const name = document.createElement('h2');
  name.textContent = pick.name;
  const detail = document.createElement('span');
  detail.className = 'pick-detail';
  detail.textContent = pick.detail;
  card.append(infoButton, label, image, name, detail);
  return card;
}

function openBuildInfo(pick) {
  const info = window.EQUILIBRIUM_BUILD_INFO?.[payload.type]?.[pick.name];
  if (!info) return;
  const icon = document.querySelector('#buildInfoIcon');
  icon.src = pick.icon;
  icon.alt = `${pick.name} icon`;
  document.querySelector('#buildInfoLabel').textContent = `${pick.label} · ${pick.detail}`;
  document.querySelector('#buildInfoName').textContent = pick.name;
  const content = document.querySelector('#buildInfoText');
  content.replaceChildren();
  info.sections.forEach(section => {
    const heading = document.createElement('h3');
    heading.textContent = section.title;
    content.append(heading);
    section.items.forEach(item => {
      const paragraph = document.createElement('p');
      paragraph.textContent = item;
      content.append(paragraph);
    });
  });
  buildInfoDialog.showModal();
  document.body.classList.add('modal-open');
}

document.querySelector('#closeBuildInfo').onclick = () => buildInfoDialog.close();
buildInfoDialog.onclick = event => { if (event.target === buildInfoDialog) buildInfoDialog.close(); };
buildInfoDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));

if (!validPayload(payload)) {
  invalidBuild.hidden = false;
} else {
  sharedBuild.hidden = false;
  const relicBuild = payload.type === 'relics';
  document.title = relicBuild ? 'Shared Equilibrium Relic Build' : 'Shared Equilibrium Blessing Path';
  document.querySelector('#buildKicker').textContent = relicBuild ? 'SHARED RELIC BUILD' : 'SHARED BLESSING PATH';
  document.querySelector('#buildTitle').textContent = relicBuild ? 'A legendary relic path' : 'A divine blessing path';
  document.querySelector('#buildSubtitle').textContent = relicBuild
    ? (payload.bonus ? 'Seven relic tiers plus a Rejuvenated bonus pick.' : 'Seven relic choices forged for the Equilibrium League.')
    : 'Six blessing choices and two determined God-tier outcomes.';
  document.querySelector('#randomizedBadge').hidden = !payload.randomized;

  const grid = document.querySelector('#buildGrid');
  if (relicBuild) grid.classList.add('relic-grid');
  payload.picks.forEach(pick => grid.append(renderPick(pick)));

  if (payload.bonus) {
    const bonus = document.querySelector('#bonusCard');
    bonus.hidden = false;
    const infoButton = document.createElement('button');
    infoButton.type = 'button';
    infoButton.className = 'pick-info';
    infoButton.setAttribute('aria-label', `More information about ${payload.bonus.name}`);
    infoButton.textContent = 'i';
    infoButton.onclick = () => openBuildInfo(payload.bonus);
    const image = document.createElement('img');
    image.src = payload.bonus.icon;
    image.alt = `${payload.bonus.name} icon`;
    const copy = document.createElement('div');
    const label = document.createElement('span');
    label.textContent = payload.bonus.label;
    const name = document.createElement('h2');
    name.textContent = payload.bonus.name;
    copy.append(label, name);
    bonus.append(infoButton, image, copy);
  }
  document.querySelector('#copyCurrentLink').onclick = copyLink;
}
