// Policy Management — "The House Rules". The written rules of the organisation;
// they only work if known, followed, maintained, and governed coherently. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const policyManagementTrack = {
  levels: [
    { id: 1, slug: 'the-house-rules', title: 'The House Rules', subtitle: 'What policies are — and aren’t', icon: '📜', available: true },
    { id: 2, slug: 'writing-rules-people-follow', title: 'Writing Rules People Follow', subtitle: 'Why bad policies get ignored', icon: '✍️', available: true },
    { id: 3, slug: 'the-policy-lifecycle', title: 'The Policy Lifecycle', subtitle: 'From draft to retirement', icon: '🔄', available: true },
    { id: 4, slug: 'making-them-stick', title: 'Making Them Stick', subtitle: 'Communication, training & attestation', icon: '📌', available: true },
    { id: 5, slug: 'policy-vs-reality', title: 'Policy vs Reality', subtitle: 'The gap between written and done', icon: '🪞', available: true },
    { id: 6, slug: 'governing-policy', title: 'Governing Policy', subtitle: 'Framework, ownership & one source of truth', icon: '🗂️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
