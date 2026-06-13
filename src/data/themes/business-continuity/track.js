// Business Continuity & Resilience — "The Fire Drill". Keep critical operations
// running through disruption, prepared in the calm and tested in advance. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const businessContinuityTrack = {
  levels: [
    { id: 1, slug: 'the-fire-drill', title: 'The Fire Drill', subtitle: 'Keep running when things go wrong', icon: '🚨', available: true },
    { id: 2, slug: 'what-could-stop-us', title: 'What Could Stop Us?', subtitle: 'Business impact analysis & RTO/RPO', icon: '⏱️', available: true },
    { id: 3, slug: 'plan-b-and-c', title: 'Plan B (and C)', subtitle: 'Continuity strategies & redundancy', icon: '🔀', available: true },
    { id: 4, slug: 'when-the-alarm-sounds', title: 'When the Alarm Sounds', subtitle: 'Crisis management & communication', icon: '📣', available: true },
    { id: 5, slug: 'bouncing-back', title: 'Bouncing Back', subtitle: 'Recovery, DR & learning the lesson', icon: '🔧', available: true },
    { id: 6, slug: 'a-resilient-organisation', title: 'A Resilient Organisation', subtitle: 'Testing, embedding & true resilience', icon: '💪', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
