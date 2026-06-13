// Regulatory Compliance — "The Rulebook & the Referee". Playing business by the
// laws society sets, and managing the regulators who enforce them. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const regulatoryComplianceTrack = {
  levels: [
    { id: 1, slug: 'why-rules-exist', title: 'Why Rules Exist', subtitle: 'What compliance is — and why anyone bothers', icon: '📐', available: true },
    { id: 2, slug: 'the-big-rulebooks', title: 'The Big Rulebooks', subtitle: 'A field guide to the major regimes', icon: '📚', available: true },
    { id: 3, slug: 'compliance-as-a-spec', title: 'Compliance as a Spec', subtitle: 'Turning law into things you actually do', icon: '🧩', available: true },
    { id: 4, slug: 'the-referee', title: 'The Referee', subtitle: 'How regulators actually work', icon: '🧑‍⚖️', available: true },
    { id: 5, slug: 'conduct-and-culture', title: 'Conduct & Culture', subtitle: 'Beyond the letter of the law', icon: '🤝', available: true },
    { id: 6, slug: 'running-a-compliance-program', title: 'Running a Compliance Program', subtitle: 'From scattered rules to a working system', icon: '🏗️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
