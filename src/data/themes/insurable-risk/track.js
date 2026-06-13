// Insurable Risk & Claims — "The Safety Net". Transferring financial risk via
// insurance: what's insurable, pricing, retain vs transfer, claims, governance. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const insurableRiskTrack = {
  levels: [
    { id: 1, slug: 'the-safety-net', title: 'The Safety Net', subtitle: 'Risk transfer & pooling, explained', icon: '🪂', available: true },
    { id: 2, slug: 'what-can-you-insure', title: 'What Can You Insure?', subtitle: 'Insurable risks & types of cover', icon: '☂️', available: true },
    { id: 3, slug: 'pricing-the-risk', title: 'Pricing the Risk', subtitle: 'Premiums, underwriting & hidden traps', icon: '🧮', available: true },
    { id: 4, slug: 'retain-or-transfer', title: 'Retain or Transfer?', subtitle: 'Deductibles, self-insurance & captives', icon: '⚖️', available: true },
    { id: 5, slug: 'when-you-claim', title: 'When You Claim', subtitle: 'The moment of truth — and why claims fail', icon: '📑', available: true },
    { id: 6, slug: 'governing-the-safety-net', title: 'Governing the Safety Net', subtitle: 'Programs, gaps & not over-relying', icon: '🕸️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
