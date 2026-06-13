// Credit Risk — "The Lender's Journey". 6 levels mapping 1:1 to Credit_Risk_Curriculam.md.
// A level is `available` once its JSON is authored and imported here. Level 1 is live;
// 2–6 are "coming soon" until authored (just add the import + flip available + provide getLevel).
import level01 from './level-01.json';

const authored = Object.fromEntries([level01].map((l) => [l.slug, l]));

export const creditRiskTrack = {
  levels: [
    { id: 1, slug: 'the-500-question', title: 'The ₹500 Question', subtitle: 'Foundations: likelihood × consequence', icon: '🤝', available: true },
    { id: 2, slug: 'beyond-the-bank-manager', title: 'Beyond the Bank Manager', subtitle: 'The FinTech credit landscape', icon: '🏦', available: false },
    { id: 3, slug: 'reading-the-clues', title: 'Reading the Clues', subtitle: 'Data: traditional, alternative, unstructured', icon: '🔍', available: false },
    { id: 4, slug: 'teaching-the-robot-to-judge', title: 'Teaching the Robot to Judge', subtitle: 'AI & ML, the black box, and bias', icon: '🤖', available: false },
    { id: 5, slug: 'the-lenders-cockpit', title: 'The Lender’s Cockpit', subtitle: 'Tools & risk heat maps', icon: '🎛️', available: false },
    { id: 6, slug: 'the-rules-of-the-game', title: 'The Rules of the Game', subtitle: 'Governance, COSO & privacy', icon: '⚖️', available: false },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
