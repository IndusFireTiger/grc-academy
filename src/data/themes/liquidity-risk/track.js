// Liquidity Risk — "Cash vs Wealth on Paper". Being unable to pay obligations as
// they fall due, even while solvent; it kills quickly. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const liquidityRiskTrack = {
  levels: [
    { id: 1, slug: 'cash-vs-wealth-on-paper', title: 'Cash vs Wealth on Paper', subtitle: 'Can you actually pay your bills today?', icon: '💰', available: true },
    { id: 2, slug: 'two-kinds-of-dry', title: 'Two Kinds of Dry', subtitle: 'Funding vs market liquidity', icon: '🏜️', available: true },
    { id: 3, slug: 'the-bank-run', title: 'The Bank Run', subtitle: 'Maturity mismatch & the speed of fear', icon: '🏃', available: true },
    { id: 4, slug: 'keeping-cash-on-hand', title: 'Keeping Cash on Hand', subtitle: 'Buffers, forecasting & the liquidity rules', icon: '🪣', available: true },
    { id: 5, slug: 'when-it-dries-up', title: 'When It Dries Up', subtitle: 'Crisis dynamics & the contingency plan', icon: '🚱', available: true },
    { id: 6, slug: 'governing-liquidity', title: 'Governing Liquidity', subtitle: 'Appetite, monitoring & the board’s job', icon: '🏛️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
