// Market Risk — "Sailing in Changing Weather". Losses from market prices moving
// (rates, FX, equity, commodity); read the weather and rig the boat. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const marketRiskTrack = {
  levels: [
    { id: 1, slug: 'sailing-in-changing-weather', title: 'Sailing in Changing Weather', subtitle: 'What market risk is — prices that move', icon: '⛵', available: true },
    { id: 2, slug: 'the-four-winds', title: 'The Four Winds', subtitle: 'The main types of market risk', icon: '🧭', available: true },
    { id: 3, slug: 'measuring-the-storm', title: 'Measuring the Storm', subtitle: 'Volatility, VaR & stress tests', icon: '🌡️', available: true },
    { id: 4, slug: 'trimming-the-sails', title: 'Trimming the Sails', subtitle: 'Hedging, diversification & derivatives', icon: '⛵', available: true },
    { id: 5, slug: 'when-the-storm-hits', title: 'When the Storm Hits', subtitle: 'Tail risk, black swans & contagion', icon: '🌊', available: true },
    { id: 6, slug: 'governing-the-voyage', title: 'Governing the Voyage', subtitle: 'Appetite, limits & the rogue trader', icon: '🧭', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
