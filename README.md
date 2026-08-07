# Equilibrium Relic Planner

A zero-dependency, responsive RuneScape 3 Leagues II relic picker. Select one relic per tier, inspect effects, and export a 1600×900 PNG build card. Choosing Rejuvenated in tier 6 unlocks an additional, clearly marked relic pick from tiers 1–5.

Run by opening `index.html` directly or publish the repository root with GitHub Pages. There is no build step, package manager, framework, or server-side code.

Relic effects and icon assets are sourced from [The RuneScape Wiki](https://runescape.wiki/w/Equilibrium_League/Relics) under CC BY-NC-SA 3.0.

`icon-data.js` contains static, embedded copies of the relic icons so canvas export works both from GitHub Pages and when `index.html` is opened directly from the filesystem.
