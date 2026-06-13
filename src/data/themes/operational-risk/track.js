// Operational Risk — "Running the Kitchen". The ways the day goes wrong: people,
// process, systems, and external events. 5 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05].map((l) => [l.slug, l])
);

export const operationalRiskTrack = {
  levels: [
    { id: 1, slug: 'what-could-go-wrong', title: 'What Could Go Wrong?', subtitle: 'The four sources of operational risk', icon: '🍳', available: true },
    { id: 2, slug: 'people-and-process', title: 'People & Process', subtitle: 'The most common way things break', icon: '👥', available: true },
    { id: 3, slug: 'systems-and-the-outside-world', title: 'Systems & the Outside World', subtitle: 'When tech fails and the world intrudes', icon: '🔌', available: true },
    { id: 4, slug: 'measuring-the-mess', title: 'Measuring the Mess', subtitle: 'Registers, RCSA, KRIs & loss data', icon: '📊', available: true },
    { id: 5, slug: 'taming-it', title: 'Taming It', subtitle: 'Controls, three lines of defence & culture', icon: '🛡️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
