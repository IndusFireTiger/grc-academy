// Credit Risk — "The Lender's Journey". 6 levels mapping 1:1 to Credit_Risk_Curriculam.md.
// A level is `available` once its JSON is authored and imported here. Level 1 is live;
// 2–6 are "coming soon" until authored (just add the import + flip available + provide getLevel).
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const creditRiskTrack = {
  levels: [
    { id: 1, slug: 'the-500-question', title: 'The ₹500 Question', subtitle: 'Foundations: likelihood × consequence', icon: '🤝', available: true },
    { id: 2, slug: 'beyond-the-bank-manager', title: 'Beyond the Bank Manager', subtitle: 'The FinTech credit landscape', icon: '🏦', available: true },
    { id: 3, slug: 'reading-the-clues', title: 'Reading the Clues', subtitle: 'Data: traditional, alternative, unstructured', icon: '🔍', available: true },
    { id: 4, slug: 'teaching-the-robot-to-judge', title: 'Teaching the Robot to Judge', subtitle: 'AI & ML, the black box, and bias', icon: '🤖', available: true },
    { id: 5, slug: 'the-lenders-cockpit', title: 'The Lender’s Cockpit', subtitle: 'Tools & risk heat maps', icon: '🎛️', available: true },
    { id: 6, slug: 'the-rules-of-the-game', title: 'The Rules of the Game', subtitle: 'Governance, COSO & privacy', icon: '⚖️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
