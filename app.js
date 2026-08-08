const relics = [
  {tier:1,name:'Endless Harvest',icon:'assets/relics/endless-harvest.png',tag:'Gathering',effects:['Automatically banks resources obtained from Archaeology, Farming, Fishing, Mining and Woodcutting.','Provides a 10% chance to upgrade Fishing, Mining and Woodcutting resources to the next tier, using the same tables as the Polishing perk.','Reduces tree felling rate and automatically resumes Woodcutting when the tree regrows.','Mining stamina is permanently full.','The time sprite is permanently active while excavating.','You automatically follow fishing spots whenever they move.']},
  {tier:1,name:'Survivalist',icon:'assets/relics/survivalist.png',tag:'Resources',effects:['Doubles resources obtained from Archaeology, Fishing, Mining and Woodcutting.','Grants the Survivalist’s Bag, which holds up to 150 each of three different types of logs, ores or fish.','Grants the highest-tier tools: Pickaxe of the Faithful, Harpoon of the Pious and Hatchet of Devotion.','Rockertunities and critical swings deal double damage; rockertunities immediately provide an ore.','Time sprite focus gain is doubled. Finding an artefact or lore page immediately grants 100% focus.','Artefacts have a 50% chance to be restored automatically, including the restoration XP.']},
  {tier:1,name:'Golden Touch',icon:'assets/relics/golden-touch.png',tag:'Agility · Thieving',effects:['Grants tier 60 hybrid Goldenhawk boots, which give passive Agility XP while moving, skilling or using ultimate abilities.','Agility and Thieving can award Goldenhawk feathers, convertible into Prayer XP or alchemisable for coins.','Agility courses give double base XP and coins; obstacles and shortcuts never fail.','Pickpocketing always succeeds and gives triple, noted loot except for coins.','Stalls never deplete, safes have no cooldown and repeated Thieving actions continue automatically.','Coins obtained through Thieving are multiplied by 100. Chests and safes can also bank bundles of herb and potion ingredients.']},
  {tier:2,name:'Animal Wrangler',icon:'assets/relics/animal-wrangler.png',tag:'Hunter · Farming · Fishing',effects:['Automatically banks fish and Hunter loot.','Catching fish or Hunter creatures has a 2% chance to award a random farm animal, toggled between Manor Farm and Anachronia Dinosaur Farm animals.','Fishing, Hunter and harvesting farm animals have a 33% chance to bank a clean herb, herb seed, tree seed or fruit tree seed.','Farm animals always have 100% stats, never get hungry, are 20× more common and always sell for the highest bean amount.','Hunter catch chance is 100%; traps attract creatures faster, and Hunter loot and marks are multiplied by 5.','Fishing requires no bait and always grants an extra fish.','Anachronia and Havenhythe Big Game Hunter requires no bait, and creatures are twice as slow to catch you.','Spirit moths provide 10× the usual charms.']},
  {tier:2,name:'Superheated',icon:'assets/relics/superheated.png',tag:'Firemaking · Smithing',effects:['Adds toggles to automatically burn any log while Woodcutting and cook any fish while Fishing, regardless of Firemaking or Cooking level.','Bonfires accept logs every 0.6 seconds. One incense stick supplies maximum potency for 60 minutes.','Fire spirits become more-frequent Blessed Fire Spirits and may also spawn while Smithing.','Smelting always gives double bars, with a 3% chance to receive 50 bars; up to 60 ores can be smelted at once.','Fully smithing an item grants the Invention materials it would provide when disassembled.','Smithing has constant maximum heat and triple base progress per strike.','Ceremonial swords grant 5× Smithing XP and 50 bars of the metal used.','Burial set XP is tripled.']},
  {tier:2,name:'Divine Druid',icon:'assets/relics/divine-druid.png',tag:'Herblore · Summoning · Divination',effects:['Grants Thera’s Summoning pouch, which stores grimy herbs and charms, replaces spirit shards and pouches, and teleports to large obelisks in unlocked regions.','Can turn grimy herbs into unfinished potions while cleaning; all grimy herbs in your inventory are cleaned together.','Grimy herbs and charms drop frequently from Mining, Fishing, Woodcutting, Divination springs and Archaeology hotspots. Monster charm drops are multiplied by 5.','Provides a 75% chance to save potion secondary ingredients and unlocks every Meilyr combination potion recipe.','Skill-boosting familiars boost three times as much. Summoning has a 50% chance to bank an extra pouch and always banks 10 matching scrolls, without XP for the extras.','Divination always gathers enriched memories. Memory and energy conversion costs half energy and has a 10% chance to bank a porter or divine charge.','Crafting from divine energy costs half; memory strands arrive 10× as often.','Chronicle fragments grant double base Hunter XP.']},
  {tier:3,name:"Nature's Network",icon:'assets/relics/natures-network.png',tag:'Farming · Travel',effects:['Grants a fairy mushroom with unlimited teleports to most accessible spirit trees, fairy rings and Farming patches in unlocked regions.','Crops and planted seeds grow instantly to maturity, cannot become diseased and have automatically noted produce.','Planting one herb seed counts as planting ten.','Every Farming patch is automatically treated with ultracompost.','There is a 25% chance to save a seed when planting.']},
  {tier:3,name:"Assassin's Insight",icon:'assets/relics/assassins-insight.png',tag:'Slayer · Travel',effects:['Grants the Skull of Slaying with unlimited teleports to accessible Slayer Masters, Slayer dungeons and selected Slayer targets in unlocked regions.','Each new Slayer assignment offers two choices and lets you take either the minimum or maximum number of monsters.','Monsters can be added to the prefer and block lists for free.','Elite monsters are 5× more likely to spawn and grant 5× Slayer XP.','Provides the effects of the corrupted slayer helmet.','Monsters are captured in ushabtis 100% of the time.']},
  {tier:3,name:'Voidwalker',icon:'assets/relics/voidwalker.png',tag:'Jewellery · Travel',effects:['Skilling provides void shards. Each always contains a clue scroll and one roll from Invention materials, Ancient Summoning pouches, Blessed Fire Spirit rewards, crystal essence, Divination materials, divine geodes, dragon equipment or Goldenhawk feathers.','Grants the abyssal conduit with unlimited teleports to every destination offered by the amulet of glory, combat bracelet, delver’s anklet, dig site pendant, enlightened amulet, ferocious ring, games necklace, ring of duelling, ring of respawn, ring of slaying, ring of wealth, skills necklace and traveller’s necklace.']},
  {tier:4,name:'Crystal Grace',icon:'assets/relics/crystal-grace.png',tag:'Runecrafting · Necromancy',effects:['Grants Seren’s crystal tiara, which acts as an omni-tiara and offers unlimited teleports to Runecrafting altars in unlocked regions.','Unlocks every Magic spell across all spellbooks.','Provides a 5% chance to obtain stackable crystal essence, usable as pure or impure essence.','Triples rune output for all essence and always applies the maximum level-based rune multiplier.','Necromancy rituals act as if Multiply, Attraction and Protection glyphs were active at 200%, plus Speed at its maximum 50%.','Light sources and glyphs require no ingredients.','Burying a bone or offering it at an altar grants additional XP equal to a dragon bone.']},
  {tier:4,name:'Transmutation',icon:'assets/relics/transmutation.png',tag:'Magic · Resources',effects:['Grants the Deities’ Transmuter and two spells: Alchemical Divergence converts up to 10 resource items to a lower tier, while Alchemical Convergence converts up to 10 to a higher tier.','Neither spell has a level requirement. Each transmuted item grants 10 base Magic XP before League multipliers.','The spells automatically recast over time on a stack of noted items.','A toggle sends the noted products directly to your bank. The Deities’ Transmuter must be in your inventory to cast either spell.','Use a resource on the Transmuter to see what it can become.']},
  {tier:4,name:'Antiquarian',icon:'assets/relics/antiquarian.png',tag:'Archaeology',effects:['All Archaeology relics become available after completing the Archaeology tutorial.','Archaeology materials go directly to material storage, or the bank when full.','The monolith supplies 1,000 energy, though the three-active-relic limit remains.','The Archaeology journal acts as a free soil screener. Fixate is immediately available with no cap.','Lore pages are 20% more common in addition to the tier 2 passive’s 30%.','Collections grant 10× chronotes instead of the tier 1 passive’s 5×, plus an ancient casket.','Restoring artefacts costs half the materials. Receiving an artefact or lore page immediately grants 100% focus.','Divine geodes can be excavated and contain Archaeology materials.']},
  {tier:5,name:'Clue Connoisseur',icon:'assets/relics/clue-connoisseur.png',tag:'Treasure Trails',effects:['Grants Uri’s Briefcase, which stores sealed clue scrolls and caskets and teleports to hidey-holes in unlocked regions.','Grants the globetrotter outfit and earns its charges 3× faster. Every hidey-hole counts as full for the outfit effect.','Treasure Trails always require the minimum number of steps.','The chance to receive a sealed clue scroll is doubled, with no limit on how many can be held.','Completing clues grants 3× Treasure Trail points and an extra casket.','Caskets always provide the maximum number of loot rolls.']},
  {tier:5,name:'Production Master',icon:'assets/relics/production-master.png',tag:'Production',effects:['Grants the Brooch of the Spirits, supplying unlimited exquisite urns.','When worn, the brooch supplies the benefits of every portable skilling station and spawns Seren spirits, divine blessings, catalysts of alteration and manifested knowledge.','Multiple production activities process the whole batch in one action.','Food never burns accidentally.','Masterwork items take one action to complete.','Provides a +6 boost to Construction, Cooking, Crafting, Herblore, Fletching and Smithing.']},
  {tier:5,name:'Devout',icon:'assets/relics/devout.png',tag:'Summoning · Banking',effects:['Grants a Devout Yak familiar with 32 inventory slots, the ability to note and unnote items, and access to the bank from anywhere.','Grants an Ethereal Storage scroll that repeats the last unnote action.','Stat-boosting familiars, including invisible boosts, grant 10 base XP in the matching skill when you gain XP, at most once every six seconds.','Summoning scrolls are not consumed and familiar spell point costs are reduced to 10%.','Combat familiars deal more damage based on Summoning level, up to 500% more at level 99.']},
  {tier:6,name:'Perkfection',icon:'assets/relics/perkfection.png',tag:'Invention',effects:['Grants the Inventor’s Toolbox, an XP capacitor with 10× maximum charges and 10× charging speed.','The toolbox has two gizmo slots applied in addition to an augmented item’s equipped perks and teleports to Inventor’s workbenches in unlocked regions.','Adds a toggle for 0% junk chance when disassembling and grants 10× disassembly materials.','Machines can be built from level 1, run 10× faster and have 10× capacity. Machines and augmented items consume no charge.','Helpful perks trigger 20% more often; this does not stack with the item level 20 benefit.','Unlocks all dwarven and cave goblin technology blueprints.']},
  {tier:6,name:'Rejuvenated',icon:'assets/relics/rejuvenated.png',tag:'Wildcard',effects:['Allows you to choose one additional relic from any previous tier.']},
  {tier:7,name:'Infernal Fire',icon:'assets/relics/infernal-fire.png',tag:'Combat · Chaos',effects:['Grants an Avernic Star that works from the inventory or pocket slot.','All combat styles trigger Death Mark 100% of the time, instantly killing the target when it reaches 20% life points.','A Death Mark kill grants 5% adrenaline.','In the pocket slot, the Avernic Star provides +18.7 melee, ranged, magic and necromancy bonus and +15 Prayer bonus.']},
  {tier:7,name:'Naragi Edict',icon:'assets/relics/naragi-edict.png',tag:'Combat · Balance',effects:['Grants the Sliver of Edicts, activatable every 90 seconds for 16.8 seconds.','While active, it heals 10,000 life points four times at 4.2-second intervals, boosts every combat level to 255 and revives you if you die.','In the pocket slot, it provides +300 armour, +14 melee, ranged, magic and necromancy damage, +1,500 life points and +15 Prayer bonus.']},
  {tier:7,name:'Icyenic Faith',icon:'assets/relics/icyenic-faith.png',tag:'Prayer · Defence',effects:['Grants the Tome of the Icyene.','When worn, the tome provides +50 Prayer bonus.','Each point of Prayer bonus provides 0.2% critical strike chance and 0.2% base ability damage.','Protection prayers and deflection curses block 100% of damage and act as if Soul Split were active.']}
];
window.activePlanner=localStorage.getItem('equilibrium-planner-view')||'relics';
const iconCache=new Map();
let iconsReady=false;
Promise.all(relics.map(r=>new Promise(resolve=>{const image=new Image();image.onload=resolve;image.onerror=resolve;image.src=window.RELIC_ICON_DATA?.[r.icon]||r.icon;iconCache.set(r.icon,image)}))).then(()=>{iconsReady=true;update()});
const isMobileDevice=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.matchMedia?.('(pointer: coarse)').matches;
const prefersNativeShare=isMobileDevice;
const selected = JSON.parse(localStorage.getItem('equilibrium-picks') || '{}');
let bonusPick = JSON.parse(localStorage.getItem('equilibrium-rejuvenated-pick') || 'null');
if(selected[6] !== 'Rejuvenated' || (bonusPick && (bonusPick.tier > 5 || selected[bonusPick.tier] === bonusPick.name))){
  bonusPick=null;
  localStorage.removeItem('equilibrium-rejuvenated-pick');
}
let randomizedRelicBuild=localStorage.getItem('equilibrium-relic-randomized')==='true';
if(![1,2,3,4,5,6,7].every(tier=>selected[tier])||(selected[6]==='Rejuvenated'&&!bonusPick)){
  randomizedRelicBuild=false;
  localStorage.removeItem('equilibrium-relic-randomized');
}
let bonusMode = selected[6] === 'Rejuvenated' && !bonusPick;
const tiersEl=document.querySelector('#tiers'), dialog=document.querySelector('#relicDialog'); let activeRelic=null;
const saveDialog=document.querySelector('#saveDialog'),linkDialog=document.querySelector('#linkDialog');let pendingShareFile=null,pendingShareDataUrl=null,pendingPreviewUrl=null,pendingShareTitle='My Equilibrium Relic Build',currentBuildLink='';
let lockedScrollY=0;
function lockPageScroll(){if(document.body.classList.contains('modal-open'))return;lockedScrollY=window.scrollY;document.body.style.setProperty('--locked-scroll-y',`-${lockedScrollY}px`);document.body.style.setProperty('--scrollbar-compensation',`${window.innerWidth-document.documentElement.clientWidth}px`);document.body.classList.add('modal-open')}
function unlockPageScroll(){if(document.querySelector('dialog[open]')||!document.body.classList.contains('modal-open'))return;document.body.classList.remove('modal-open');document.body.style.removeProperty('--locked-scroll-y');document.body.style.removeProperty('--scrollbar-compensation');const previousBehavior=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,lockedScrollY);document.documentElement.style.scrollBehavior=previousBehavior}
[dialog,saveDialog,linkDialog].forEach(modal=>modal.addEventListener('close',unlockPageScroll));
if(prefersNativeShare){document.querySelector('#download span').textContent='Save build card';document.querySelector('#download small').textContent='OPEN SHARE SHEET'}
for(let tier=1;tier<=7;tier++){
  const choices=relics.filter(r=>r.tier===tier), section=document.createElement('section'); section.className=`tier ${choices.length===2?'two':''}`;
  section.innerHTML=`<div class="tier-label"><span>RELIC TIER</span><strong>0${tier}</strong></div><div class="tier-options"></div>`;
  choices.forEach(r=>{const b=document.createElement('button');b.className=`relic ${selected[tier]===r.name?'selected':''}`;b.dataset.name=r.name;b.dataset.tier=r.tier;b.innerHTML=`<span class="info" aria-label="More information">i</span><span class="relic-icon"><img src="${r.icon}" alt=""></span><h3>${r.name}</h3><span class="tag">${r.tag}</span>`;b.onclick=e=>e.target.classList.contains('info')?openInfo(r):pick(r);section.querySelector('.tier-options').append(b)}); tiersEl.append(section)
}
function pick(r){
  if(bonusMode && r.tier <= 5){
    if(selected[r.tier] === r.name){showToast('Choose a relic you did not already pick');return}
    randomizedRelicBuild=false;
    localStorage.removeItem('equilibrium-relic-randomized');
    bonusPick={tier:r.tier,name:r.name};
    localStorage.setItem('equilibrium-rejuvenated-pick',JSON.stringify(bonusPick));
    bonusMode=false;
    refreshCards();update();
    if(dialog.open)dialog.close();
    showToast(`${r.name} added as your Rejuvenated pick`);
    return;
  }
  if(selected[r.tier]!==r.name){
    randomizedRelicBuild=false;
    localStorage.removeItem('equilibrium-relic-randomized');
  }
  selected[r.tier]=r.name;
  if(r.tier===6){
    if(r.name==='Rejuvenated') bonusMode=!bonusPick;
    else {bonusPick=null;bonusMode=false;localStorage.removeItem('equilibrium-rejuvenated-pick')}
  }
  if(bonusPick && bonusPick.tier===r.tier && bonusPick.name===r.name){
    bonusPick=null;bonusMode=selected[6]==='Rejuvenated';localStorage.removeItem('equilibrium-rejuvenated-pick');
  }
  localStorage.setItem('equilibrium-picks',JSON.stringify(selected));
  refreshCards();update();
  if(dialog.open)dialog.close()
}
function openInfo(r){activeRelic=r;document.querySelector('#dialogIcon').innerHTML=`<img src="${r.icon}" alt="${r.name} relic icon">`;document.querySelector('#dialogTier').textContent=`TIER ${r.tier} · ${r.tag}`;document.querySelector('#dialogName').textContent=r.name;document.querySelector('#dialogText').innerHTML=r.effects.map(x=>`<p>${x}</p>`).join('');const isBonus=bonusPick&&bonusPick.tier===r.tier&&bonusPick.name===r.name,isPrimary=selected[r.tier]===r.name,button=document.querySelector('#modalSelect');button.textContent=isBonus?'Rejuvenated pick':(isPrimary?'Selected relic':(bonusMode&&r.tier<=5?'Choose as Rejuvenated pick':'Select this relic'));button.disabled=isBonus||isPrimary;dialog.showModal();lockPageScroll()}
document.querySelector('.close').onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close()};document.querySelector('#modalSelect').onclick=()=>pick(activeRelic);
function refreshCards(){
  document.querySelectorAll('.relic').forEach(card=>{
    const tier=Number(card.dataset.tier),name=card.dataset.name;
    card.classList.toggle('selected',selected[tier]===name);
    card.classList.toggle('rejuvenated-pick',!!bonusPick&&bonusPick.tier===tier&&bonusPick.name===name);
    card.classList.toggle('bonus-eligible',bonusMode&&tier<=5&&selected[tier]!==name);
  })
}
document.querySelector('#changeBonus').onclick=()=>{bonusMode=true;refreshCards();update();document.querySelector('#tiers').scrollIntoView({behavior:'smooth',block:'start'})};
function resetRelicPicks(){
  Object.keys(selected).forEach(tier=>delete selected[tier]);
  bonusPick=null;
  bonusMode=false;
  localStorage.removeItem('equilibrium-picks');
  localStorage.removeItem('equilibrium-rejuvenated-pick');
  randomizedRelicBuild=false;
  localStorage.removeItem('equilibrium-relic-randomized');
  if(dialog.open)dialog.close();
  refreshCards();
  update();
  showToast('All relic picks reset');
}
function randomizeRelicPicks(){
  Object.keys(selected).forEach(tier=>delete selected[tier]);
  for(let tier=1;tier<=7;tier++){
    const choices=relics.filter(relic=>relic.tier===tier);
    selected[tier]=choices[Math.floor(Math.random()*choices.length)].name;
  }
  bonusPick=null;
  bonusMode=false;
  if(selected[6]==='Rejuvenated'){
    const bonusChoices=relics.filter(relic=>relic.tier<=5&&selected[relic.tier]!==relic.name);
    const randomBonus=bonusChoices[Math.floor(Math.random()*bonusChoices.length)];
    bonusPick={tier:randomBonus.tier,name:randomBonus.name};
    localStorage.setItem('equilibrium-rejuvenated-pick',JSON.stringify(bonusPick));
  }else{
    localStorage.removeItem('equilibrium-rejuvenated-pick');
  }
  localStorage.setItem('equilibrium-picks',JSON.stringify(selected));
  randomizedRelicBuild=true;
  localStorage.setItem('equilibrium-relic-randomized','true');
  if(dialog.open)dialog.close();
  refreshCards();
  update();
  showToast(bonusPick?`Relics randomized with ${bonusPick.name} as the Rejuvenated pick`:'Relics randomized');
}
window.randomizeRelicPicks=randomizeRelicPicks;
document.querySelector('#resetPicks').onclick=()=>window.activePlanner==='blessings'&&window.resetBlessingPicks?window.resetBlessingPicks():resetRelicPicks();
document.querySelector('#randomizePicks').onclick=()=>window.activePlanner==='blessings'&&window.randomizeBlessingPicks?window.randomizeBlessingPicks():randomizeRelicPicks();
function update(){
  const count=[1,2,3,4,5,6,7].filter(t=>selected[t]).length;
  const rejuvenated=selected[6]==='Rejuvenated',complete=count===7&&(!rejuvenated||!!bonusPick);
  if(window.activePlanner!=='blessings'){
    document.querySelector('#progressText').textContent=rejuvenated&&bonusPick?'7 of 7 + bonus selected':`${count} of 7 selected`;
    document.querySelector('#progressBar').style.width=`${count/7*100}%`;
  }
  document.querySelector('#download').disabled=!complete||!iconsReady;
  document.querySelector('#shareRelics').disabled=!complete;
  const panel=document.querySelector('#rejuvenatedPanel');panel.hidden=!rejuvenated;
  if(rejuvenated){
    document.querySelector('#rejuvenatedTitle').textContent=bonusPick?bonusPick.name:'Choose one more relic';
    document.querySelector('#rejuvenatedCopy').textContent=bonusPick?`Tier ${bonusPick.tier} · Marked as your additional Rejuvenated relic.`:'Select any relic you did not choose from tiers 1–5.';
    document.querySelector('#changeBonus').textContent=bonusPick?'Change bonus pick':'Choose bonus relic';
  }
  document.querySelector('#forgeTitle').textContent=complete?'Your relic build is complete':(count===7&&rejuvenated?'Choose your bonus relic':'Complete your build');
  document.querySelector('#forgeCopy').textContent=complete?(prefersNativeShare?'Your relic path is ready. Open the share sheet, then choose Save Image or your Photos app.':'Your relic path is ready. Forge your build card and share it with Gielinor.'):(count===7&&rejuvenated?'Rejuvenated grants one additional relic from tiers 1–5. Choose it above to finish.':`Choose ${7-count} more relic${7-count===1?'':'s'} to unlock your shareable relic card.`)
}
window.refreshRelicPlanner=update;
refreshCards();update();
document.querySelector('#shareRelics').onclick=()=>{
  const code=['r'];
  for(let tier=1;tier<=7;tier++){
    const choices=relics.filter(item=>item.tier===tier);
    code.push(choices.findIndex(item=>item.name===selected[tier])+1);
  }
  if(bonusPick){const choices=relics.filter(item=>item.tier===bonusPick.tier);code.push(bonusPick.tier,choices.findIndex(item=>item.name===bonusPick.name)+1)}
  if(randomizedRelicBuild)code.push('x');
  openBuildLinkDialog(window.EquilibriumShare.createBuildUrl(code.join('-')),'relic');
};
document.querySelector('#download').onclick=()=>{const c=document.querySelector('#exportCanvas'),x=c.getContext('2d'),grad=x.createLinearGradient(0,0,1600,900);grad.addColorStop(0,'#061d17');grad.addColorStop(.55,'#0d3b2d');grad.addColorStop(1,'#392914');x.fillStyle=grad;x.fillRect(0,0,1600,900);x.strokeStyle='#d7ae5b';x.lineWidth=3;x.strokeRect(34,34,1532,832);x.fillStyle='#e4bb67';x.font='600 24px Georgia';x.textAlign='center';x.fillText('LEAGUES II · EQUILIBRIUM',800,105);x.fillStyle='#eff8f2';x.font='600 62px Georgia';x.fillText('MY RELIC BUILD',800,180);x.fillStyle='#8fb4a3';x.font='18px Arial';x.fillText(bonusPick?'Seven tiers plus a Rejuvenated bonus pick.':'Seven choices. One legendary path through Gielinor.',800,220);if(randomizedRelicBuild)drawRandomizedBadge(x,1600);const chosen=[1,2,3,4,5,6,7].map(t=>relics.find(q=>q.name===selected[t])),images=chosen.map(r=>iconCache.get(r.icon));for(let t=1;t<=7;t++){const r=chosen[t-1],cx=150+(t-1)*217;x.fillStyle=t%2?'#0b2b22':'#102f25';x.fillRect(cx-92,270,184,360);x.strokeStyle='#396a57';x.strokeRect(cx-92,270,184,360);x.fillStyle='#d8b867';x.font='700 15px Arial';x.fillText(`TIER ${t}`,cx,310);drawImageContain(x,images[t-1],cx-68,335,136,136);x.fillStyle='#effaf4';x.font='600 17px Georgia';wrap(x,r.name,cx,505,150,22);x.fillStyle='#82aa98';x.font='700 10px Arial';wrap(x,r.tag.toUpperCase(),cx,568,150,15)}if(bonusPick){const b=relics.find(q=>q.name===bonusPick.name),bonusImg=iconCache.get(b.icon);x.fillStyle='#e4bb67';x.fillRect(400,665,800,82);drawImageContain(x,bonusImg,420,674,62,62);x.fillStyle='#14261e';x.font='700 13px Arial';x.fillText('REJUVENATED PICK',800,691);x.font='600 24px Georgia';x.fillText(`${b.name} · TIER ${b.tier}`,800,725)}x.fillStyle='#6f9787';x.font='13px Arial';x.fillText('FORGED WITH THE EQUILIBRIUM RELIC PLANNER',800,810);const dataUrl=c.toDataURL('image/png'),file=dataUrlToFile(dataUrl,'equilibrium-relic-build.png');if(isMobileDevice){openSavePreview(dataUrl,file);return}downloadDataUrl(dataUrl)};
function showToast(message){const toast=document.querySelector('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2500)}
function openBuildLinkDialog(url,kind='relic'){currentBuildLink=url;const blessing=kind==='blessing';document.querySelector('#linkDialogKicker').textContent=blessing?'SHARE YOUR BLESSING PATH':'SHARE YOUR RELIC BUILD';document.querySelector('#linkDialogTitle').textContent=blessing?'Your blessing link is ready':'Your relic link is ready';document.querySelector('#buildLinkField').value=url;document.querySelector('#openBuildPage').href=url;linkDialog.showModal();lockPageScroll()}
window.openBuildLinkDialog=openBuildLinkDialog;
async function copyBuildLink(){try{await navigator.clipboard.writeText(currentBuildLink);showToast('Build link copied')}catch{const field=document.querySelector('#buildLinkField');field.focus();field.select();const copied=document.execCommand('copy');showToast(copied?'Build link copied':'Select the link and copy it manually')}}
document.querySelector('#copyBuildLink').onclick=copyBuildLink;
document.querySelector('#buildLinkField').onclick=event=>event.currentTarget.select();
document.querySelector('#closeLinkDialog').onclick=()=>linkDialog.close();
linkDialog.onclick=event=>{if(event.target===linkDialog)linkDialog.close()};
function openSavePreview(dataUrl,file,kind='relic'){const blessing=kind==='blessing';pendingShareDataUrl=dataUrl;pendingShareFile=file;pendingShareTitle=blessing?'My Equilibrium Blessing Build':'My Equilibrium Relic Build';if(pendingPreviewUrl)URL.revokeObjectURL(pendingPreviewUrl);pendingPreviewUrl=URL.createObjectURL(file);document.querySelector('#saveKicker').textContent=blessing?'YOUR BLESSING BUILD':'YOUR RELIC BUILD';document.querySelector('#saveHeading').textContent=blessing?'Save your blessing card':'Save your build card';document.querySelector('#savePreview').alt=blessing?'Your Equilibrium blessing build card':'Your Equilibrium relic build card';document.querySelector('#savePreview').src=pendingPreviewUrl;document.querySelector('#shareBuild').textContent=navigator.canShare?.({files:[file]})?'Share / Save image':'Download to Files';saveDialog.showModal();lockPageScroll()}
document.querySelector('#shareBuild').onclick=()=>{if(pendingShareFile&&navigator.share&&navigator.canShare?.({files:[pendingShareFile]})){navigator.share({title:pendingShareTitle,files:[pendingShareFile]}).catch(error=>{if(error.name!=='AbortError')showToast('Use press and hold on the image instead')});return}if(pendingShareDataUrl)downloadDataUrl(pendingShareDataUrl,pendingShareFile?.name)};
document.querySelector('#closeSave').onclick=()=>saveDialog.close();saveDialog.onclick=event=>{if(event.target===saveDialog)saveDialog.close()};
function dataUrlToFile(dataUrl,name){const [metadata,encoded]=dataUrl.split(','),mime=metadata.match(/data:(.*?);base64/)?.[1]||'image/png',binary=atob(encoded),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);return new File([bytes],name,{type:mime})}
function downloadDataUrl(dataUrl,name='equilibrium-relic-build.png',message='Build card downloaded'){const a=document.createElement('a');a.download=name;a.href=dataUrl;a.click();showToast(message)}
function drawImageContain(ctx,image,x,y,w,h){const scale=Math.min(w/image.width,h/image.height),dw=image.width*scale,dh=image.height*scale;ctx.drawImage(image,x+(w-dw)/2,y+(h-dh)/2,dw,dh)}
function drawRandomizedBadge(ctx,canvasWidth){const width=230,height=42,x=canvasWidth-width-72,y=68;ctx.fillStyle='rgba(228,187,103,.12)';ctx.fillRect(x,y,width,height);ctx.strokeStyle='#d7ae5b';ctx.lineWidth=2;ctx.strokeRect(x,y,width,height);ctx.fillStyle='#f0ce83';ctx.font='700 14px Arial';ctx.textAlign='center';ctx.fillText('RANDOMIZED BUILD',x+width/2,y+27)}
window.drawRandomizedBadge=drawRandomizedBadge;
function hex(x,cx,cy,r){x.beginPath();for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/6,px=cx+r*Math.cos(a),py=cy+r*Math.sin(a);i?x.lineTo(px,py):x.moveTo(px,py)}x.closePath();x.fill();x.strokeStyle='#63d9b2';x.lineWidth=3;x.stroke()}
function wrap(x,text,cx,y,max,line){const words=text.split(' ');let row='',rows=[];words.forEach(w=>{const test=row+w+' ';if(x.measureText(test).width>max&&row){rows.push(row);row=w+' '}else row=test});rows.push(row);rows.forEach((r,i)=>x.fillText(r.trim(),cx,y+i*line))}
