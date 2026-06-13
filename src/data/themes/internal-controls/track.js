// Internal Controls — "Checks & Balances". The locks, keys, and second signatures
// that give reasonable assurance objectives are met. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const internalControlsTrack = {
  levels: [
    { id: 1, slug: 'what-is-a-control', title: 'What Is a Control?', subtitle: 'The everyday safeguards that keep things honest', icon: '🔐', available: true },
    { id: 2, slug: 'types-of-controls', title: 'Types of Controls', subtitle: 'Prevent, detect, correct — and how', icon: '🧰', available: true },
    { id: 3, slug: 'separation-and-authorization', title: 'Separation & Authorization', subtitle: 'Four eyes, limits, and who’s allowed', icon: '✋', available: true },
    { id: 4, slug: 'designing-controls-well', title: 'Designing Controls Well', subtitle: 'Design vs operating effectiveness', icon: '✏️', available: true },
    { id: 5, slug: 'testing-and-assurance', title: 'Testing & Assurance', subtitle: 'How you actually know controls work', icon: '🔬', available: true },
    { id: 6, slug: 'controls-that-last', title: 'Controls That Last', subtitle: 'Environment, automation & remediation', icon: '♻️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
