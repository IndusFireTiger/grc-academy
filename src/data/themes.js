// The academy catalog: every GRC theme is a "track". Credit Risk is live; the rest
// (from grc-themes.md) are stubbed as "coming soon" and become live by adding a
// /themes/<slug>/ content folder and wiring its track here. No component changes needed.
import { creditRiskTrack } from './themes/credit-risk/track.js';
import { operationalRiskTrack } from './themes/operational-risk/track.js';
import { financialCrimeTrack } from './themes/financial-crime/track.js';

export const themes = [
  {
    slug: 'credit-risk',
    title: 'Credit Risk',
    tagline: 'The Lender’s Journey',
    blurb: 'Will I get my money back? Learn credit risk by playing the lender — from a ₹500 loan to a friend to an AI-powered lending platform.',
    icon: '🤝',
    accent: 'emerald',
    status: 'live',
    track: creditRiskTrack,
  },
  // ---- Wave 1 ----
  { slug: 'operational-risk', title: 'Operational Risk', tagline: 'Running the Kitchen', blurb: 'The ways the day goes wrong — people, process, systems, and external shocks.', icon: '🍳', accent: 'amber', status: 'live', track: operationalRiskTrack },
  { slug: 'regulatory-compliance', title: 'Regulatory Compliance', tagline: 'The Rulebook & the Referee', blurb: 'Playing by the laws — GDPR, SOX, HIPAA, DORA, and friends.', icon: '⚖️', accent: 'sky', status: 'soon', track: null },
  { slug: 'financial-crime', title: 'Financial Crime (FRAML)', tagline: 'The Bouncer at the Door', blurb: 'Spotting fraud and dirty money before it gets in.', icon: '🕵️', accent: 'rose', status: 'live', track: financialCrimeTrack },
  { slug: 'internal-controls', title: 'Internal Controls', tagline: 'Checks & Balances', blurb: 'The locks, keys, and second signatures that keep things honest.', icon: '🔐', accent: 'violet', status: 'soon', track: null },
  // ---- Wave 2 ----
  { slug: 'cyber-it-risk', title: 'Cyber & IT Risk', tagline: 'Guarding the Castle', blurb: 'Digital walls, gates, and spies — plus AI governance.', icon: '🏰', accent: 'sky', status: 'soon', track: null },
  { slug: 'third-party-risk', title: 'Third-Party / Vendor Risk', tagline: 'Your Weakest Supplier', blurb: 'You’re only as strong as the partners you depend on.', icon: '🔗', accent: 'amber', status: 'soon', track: null },
  { slug: 'audit-management', title: 'Audit Management', tagline: 'The Health Check-up', blurb: 'The annual exam — and the paper trail that proves it.', icon: '📋', accent: 'teal', status: 'soon', track: null },
  // ---- Wave 3 ----
  { slug: 'market-risk', title: 'Market Risk', tagline: 'Sailing in Changing Weather', blurb: 'Prices, rates, and FX move under your feet.', icon: '⛵', accent: 'sky', status: 'soon', track: null },
  { slug: 'liquidity-risk', title: 'Liquidity Risk', tagline: 'Cash vs. Wealth on Paper', blurb: 'Can you actually pay your bills today?', icon: '💰', accent: 'emerald', status: 'soon', track: null },
  { slug: 'esg-climate-risk', title: 'ESG & Climate Risk', tagline: 'The Long-Game Forecast', blurb: 'Physical and transition risk over the long horizon.', icon: '🌱', accent: 'teal', status: 'soon', track: null },
  { slug: 'business-continuity', title: 'Business Continuity & Resilience', tagline: 'The Fire Drill', blurb: 'Keep running when the lights go out.', icon: '🚨', accent: 'rose', status: 'soon', track: null },
  // ---- Wave 4 ----
  { slug: 'strategic-risk', title: 'Strategic Risk', tagline: 'Steering the Ship', blurb: 'The bets that make or break the mission.', icon: '🧭', accent: 'violet', status: 'soon', track: null },
  { slug: 'policy-management', title: 'Policy Management', tagline: 'The House Rules', blurb: 'Written, agreed, and actually followed.', icon: '📜', accent: 'amber', status: 'soon', track: null },
  { slug: 'insurable-risk', title: 'Insurable Risk & Claims', tagline: 'The Safety Net', blurb: 'What’s covered — and what happens when you fall.', icon: '🪂', accent: 'sky', status: 'soon', track: null },
];

export function getThemes() {
  return themes;
}

export function getTheme(slug) {
  return themes.find((t) => t.slug === slug) ?? null;
}

export function getLiveThemes() {
  return themes.filter((t) => t.status === 'live');
}

// theme+slug pairs for every authored, available level (for getStaticPaths).
export function getAllLevelPaths() {
  const paths = [];
  for (const t of getLiveThemes()) {
    for (const lv of t.track.levels) {
      if (lv.available) paths.push({ theme: t.slug, slug: lv.slug });
    }
  }
  return paths;
}
