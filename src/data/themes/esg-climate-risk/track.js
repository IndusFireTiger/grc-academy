// ESG & Climate Risk — "The Long-Game Forecast". Slow-moving environmental, social,
// and governance shifts that are material financial risk over the long horizon. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const esgClimateRiskTrack = {
  levels: [
    { id: 1, slug: 'the-long-game-forecast', title: 'The Long-Game Forecast', subtitle: 'What ESG & climate risk is', icon: '🌱', available: true },
    { id: 2, slug: 'physical-vs-transition', title: 'Physical vs Transition', subtitle: 'Two ways climate hits the books', icon: '🌊', available: true },
    { id: 3, slug: 'the-three-letters', title: 'The Three Letters', subtitle: 'E, S and G — and why each is a risk', icon: '🔤', available: true },
    { id: 4, slug: 'greenwashing-and-disclosure', title: 'Greenwashing & Disclosure', subtitle: 'Saying it vs proving it', icon: '🪧', available: true },
    { id: 5, slug: 'pricing-the-slow-storm', title: 'Pricing the Slow Storm', subtitle: 'How climate feeds every other risk', icon: '📉', available: true },
    { id: 6, slug: 'governing-the-long-game', title: 'Governing the Long Game', subtitle: 'Short-termism vs the long horizon', icon: '🌍', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
