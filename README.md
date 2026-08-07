# Equilibrium League Planner

A zero-dependency, responsive RuneScape 3 Leagues II planner for Relics and Blessings.

## Relics

- Choose one relic from each of seven tiers.
- Inspect every relic's effects and official icon.
- Rejuvenated unlocks an additional, clearly marked relic from Tiers 1–5.
- Export the completed selection as a 1600×900 PNG build card.

## Blessings

- Choose one Chaos, Balance, or Order blessing from each of six standard tiers.
- God Tier 1 is determined by Tiers 1–3; God Tier 2 is determined by Tiers 4–6.
- One pick from every path resolves to Balance. Otherwise, the majority path determines the God-tier blessing.
- Inspect blessing effects and the passive effects granted by each tier.
- Export all six picks and both resolved God-tier blessings as a 1600×1000 PNG card.

Selections are stored locally in the browser. The project has no framework, package manager, or server-side code and can be published directly from the repository root with GitHub Pages.

For local review, open `index.html` directly or run:

```powershell
node scripts/serve-local.mjs
```

Relic and blessing effects and icon assets are sourced from [The RuneScape Wiki](https://runescape.wiki/w/Equilibrium_League) under CC BY-NC-SA 3.0.

`icon-data.js` and `blessing-icon-data.js` contain static embedded copies of the icons so canvas exports work from GitHub Pages and from the local filesystem.
