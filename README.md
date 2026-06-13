# GRC Academy

An interactive, multi-theme learning platform for **Governance, Risk & Compliance**, built for
professionals **without a finance or statistics background**. Internal enablement tool.

Pilot track: **Credit Risk — "The Lender's Journey."** Future tracks (the 14 themes in
`../grc-themes.md`) plug in as content folders.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## How it's structured

```
src/
  components/   reusable interaction kit (DecisionScenario, ClassifySort, MatchPairs,
                ApprovalDial, Checkpoint) + ThemeCatalog, TrackMap, LevelView, ThemeToggle
  layouts/      Base.astro
  pages/        index.astro (catalog) · track/[theme].astro · track/[theme]/[slug].astro
  lib/          progress.js (localStorage, keyed by theme → level)
  data/
    themes.js                 the catalog (live + "coming soon" themes)
    themes/credit-risk/       track.js + level-01.json … (one folder per theme)
```

## Add a level

1. Write `src/data/themes/<theme>/level-0X.json` (schema: `id, slug, title, subtitle, icon,
   hook{metaphor,scenario}, learn[], bridge, interactions[], teachBack, checkpoint[]`).
2. Import it in that theme's `track.js` and flip the level's `available: true`.

## Add a theme

Create `src/data/themes/<slug>/track.js` + level JSON, then set the theme's `status: 'live'` and
`track` in `src/data/themes.js`. **No component changes needed.**

Plans: `../learning-plan.md` (syllabus) and `../app-build-plan.md` (build).
