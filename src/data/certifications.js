// A reference catalog of professional certifications & programs across GRC,
// organised by discipline. Most are globally recognised (provider-issued).
// fields: id, name (acronym), full, provider, discipline, level, summary,
//         track (the learning theme it relates to, for cross-links).
// level: Foundational | Intermediate | Advanced | Expert
//
// To extend: add an entry. Filters and grouping derive from the data automatically.

export const certifications = [
  // ── Integrated GRC ──────────────────────────────────────────────────────
  { id: 'grcp', name: 'GRCP', full: 'GRC Professional', provider: 'OCEG', discipline: 'Integrated GRC', level: 'Foundational', track: 'internal-controls', summary: 'Vendor-neutral grounding in the principled-performance approach to governance, risk and compliance.' },
  { id: 'grca', name: 'GRCA', full: 'GRC Audit', provider: 'OCEG', discipline: 'Integrated GRC', level: 'Intermediate', track: 'audit-management', summary: 'Auditing an integrated GRC capability against the OCEG framework.' },
  { id: 'ica-grc', name: 'ICA Dip. GRC', full: 'ICA International Diploma in Governance, Risk & Compliance', provider: 'Int’l Compliance Association', discipline: 'Integrated GRC', level: 'Intermediate', track: 'regulatory-compliance', summary: 'Practitioner diploma spanning governance, risk frameworks and compliance management.' },

  // ── Risk Management ─────────────────────────────────────────────────────
  { id: 'crisc', name: 'CRISC', full: 'Certified in Risk and Information Systems Control', provider: 'ISACA', discipline: 'Risk Management', level: 'Advanced', track: 'operational-risk', summary: 'Enterprise IT risk identification, assessment and response, plus risk-based controls.' },
  { id: 'frm', name: 'FRM', full: 'Financial Risk Manager', provider: 'GARP', discipline: 'Risk Management', level: 'Advanced', track: 'market-risk', summary: 'The benchmark financial-risk credential: market, credit, operational and liquidity risk, and models.' },
  { id: 'prm', name: 'PRM', full: 'Professional Risk Manager', provider: 'PRMIA', discipline: 'Risk Management', level: 'Advanced', track: 'operational-risk', summary: 'Broad risk-management designation across financial theory, instruments and risk practice.' },
  { id: 'irm', name: 'IRM Quals', full: 'IRM International Certificate / Diploma in ERM', provider: 'Institute of Risk Management', discipline: 'Risk Management', level: 'Foundational', track: 'strategic-risk', summary: 'Enterprise risk management qualifications from foundation to diploma level.' },
  { id: 'iso31000-rm', name: 'ISO 31000 RM', full: 'ISO 31000 Risk Manager', provider: 'PECB / others', discipline: 'Risk Management', level: 'Foundational', track: 'strategic-risk', summary: 'Applying the ISO 31000 risk-management principles and process in an organisation.' },

  // ── Information Security & Cyber ─────────────────────────────────────────
  { id: 'cissp', name: 'CISSP', full: 'Certified Information Systems Security Professional', provider: '(ISC)²', discipline: 'Information Security & Cyber', level: 'Expert', track: 'cyber-it-risk', summary: 'The flagship infosec credential — eight security domains for experienced practitioners.' },
  { id: 'cism', name: 'CISM', full: 'Certified Information Security Manager', provider: 'ISACA', discipline: 'Information Security & Cyber', level: 'Advanced', track: 'cyber-it-risk', summary: 'Management-focused: governing and running an enterprise information-security programme.' },
  { id: 'ccsp', name: 'CCSP', full: 'Certified Cloud Security Professional', provider: '(ISC)²', discipline: 'Information Security & Cyber', level: 'Advanced', track: 'cyber-it-risk', summary: 'Securing cloud architecture, data and operations.' },
  { id: 'sec-plus', name: 'Security+', full: 'CompTIA Security+', provider: 'CompTIA', discipline: 'Information Security & Cyber', level: 'Foundational', track: 'cyber-it-risk', summary: 'Widely-used entry credential covering core security concepts and controls.' },
  { id: 'ceh', name: 'CEH', full: 'Certified Ethical Hacker', provider: 'EC-Council', discipline: 'Information Security & Cyber', level: 'Intermediate', track: 'cyber-it-risk', summary: 'Offensive-security techniques used to test and defend systems.' },
  { id: 'giac-gsec', name: 'GSEC', full: 'GIAC Security Essentials', provider: 'GIAC / SANS', discipline: 'Information Security & Cyber', level: 'Intermediate', track: 'cyber-it-risk', summary: 'Hands-on security essentials across a broad technical baseline.' },
  { id: 'iso27001-la', name: 'ISO 27001 LA/LI', full: 'ISO/IEC 27001 Lead Auditor / Lead Implementer', provider: 'PECB / BSI / others', discipline: 'Information Security & Cyber', level: 'Intermediate', track: 'cyber-it-risk', summary: 'Implementing or auditing an ISO 27001 information-security management system.' },

  // ── Privacy & Data Protection ───────────────────────────────────────────
  { id: 'cipp', name: 'CIPP', full: 'Certified Information Privacy Professional', provider: 'IAPP', discipline: 'Privacy & Data Protection', level: 'Intermediate', track: 'cyber-it-risk', summary: 'Privacy laws and practice (regional tracks: CIPP/E, CIPP/US, etc.).' },
  { id: 'cipm', name: 'CIPM', full: 'Certified Information Privacy Manager', provider: 'IAPP', discipline: 'Privacy & Data Protection', level: 'Advanced', track: 'cyber-it-risk', summary: 'Operationalising and managing a privacy programme.' },
  { id: 'cipt', name: 'CIPT', full: 'Certified Information Privacy Technologist', provider: 'IAPP', discipline: 'Privacy & Data Protection', level: 'Intermediate', track: 'cyber-it-risk', summary: 'Building privacy into technology, systems and products.' },

  // ── Audit ───────────────────────────────────────────────────────────────
  { id: 'cia', name: 'CIA', full: 'Certified Internal Auditor', provider: 'IIA', discipline: 'Audit', level: 'Advanced', track: 'audit-management', summary: 'The globally recognised standard for internal auditors.' },
  { id: 'cisa', name: 'CISA', full: 'Certified Information Systems Auditor', provider: 'ISACA', discipline: 'Audit', level: 'Advanced', track: 'audit-management', summary: 'Auditing, control and assurance of information systems.' },
  { id: 'crma', name: 'CRMA', full: 'Certification in Risk Management Assurance', provider: 'IIA', discipline: 'Audit', level: 'Advanced', track: 'audit-management', summary: 'Internal audit’s role in risk management and assurance over governance.' },

  // ── Compliance ──────────────────────────────────────────────────────────
  { id: 'ccep', name: 'CCEP', full: 'Certified Compliance & Ethics Professional', provider: 'SCCE', discipline: 'Compliance', level: 'Intermediate', track: 'regulatory-compliance', summary: 'Designing and running an effective compliance and ethics programme.' },
  { id: 'crcm', name: 'CRCM', full: 'Certified Regulatory Compliance Manager', provider: 'ABA', discipline: 'Compliance', level: 'Advanced', track: 'regulatory-compliance', summary: 'Regulatory compliance management for (US) financial institutions.' },

  // ── Financial Crime (AML & Fraud) ───────────────────────────────────────
  { id: 'cams', name: 'CAMS', full: 'Certified Anti-Money Laundering Specialist', provider: 'ACAMS', discipline: 'Financial Crime', level: 'Intermediate', track: 'financial-crime', summary: 'The leading AML/CTF certification for financial-crime professionals.' },
  { id: 'cfe', name: 'CFE', full: 'Certified Fraud Examiner', provider: 'ACFE', discipline: 'Financial Crime', level: 'Intermediate', track: 'financial-crime', summary: 'Fraud prevention, detection, investigation and deterrence.' },
  { id: 'cgss', name: 'CGSS', full: 'Certified Global Sanctions Specialist', provider: 'ACAMS', discipline: 'Financial Crime', level: 'Advanced', track: 'financial-crime', summary: 'Specialist credential in economic sanctions compliance and screening.' },

  // ── IT & Enterprise Governance ──────────────────────────────────────────
  { id: 'cgeit', name: 'CGEIT', full: 'Certified in the Governance of Enterprise IT', provider: 'ISACA', discipline: 'IT & Enterprise Governance', level: 'Expert', track: 'internal-controls', summary: 'Governing enterprise IT — strategy, value, risk and resources.' },
  { id: 'cobit', name: 'COBIT', full: 'COBIT Foundation / Design & Implementation', provider: 'ISACA', discipline: 'IT & Enterprise Governance', level: 'Foundational', track: 'cyber-it-risk', summary: 'Applying the COBIT framework for IT governance and management.' },

  // ── Business Continuity & Resilience ────────────────────────────────────
  { id: 'cbcp', name: 'CBCP', full: 'Certified Business Continuity Professional', provider: 'DRI International', discipline: 'Business Continuity & Resilience', level: 'Intermediate', track: 'business-continuity', summary: 'Core business-continuity planning and programme management.' },
  { id: 'mbci', name: 'MBCI', full: 'Member of the Business Continuity Institute', provider: 'BCI', discipline: 'Business Continuity & Resilience', level: 'Intermediate', track: 'business-continuity', summary: 'BCI membership-grade credential in continuity and resilience practice.' },
  { id: 'iso22301-li', name: 'ISO 22301 LI', full: 'ISO 22301 Lead Implementer / Auditor', provider: 'PECB / others', discipline: 'Business Continuity & Resilience', level: 'Intermediate', track: 'business-continuity', summary: 'Implementing or auditing a business-continuity management system.' },

  // ── ESG & Sustainability ────────────────────────────────────────────────
  { id: 'scr', name: 'SCR', full: 'Sustainability and Climate Risk', provider: 'GARP', discipline: 'ESG & Sustainability', level: 'Intermediate', track: 'esg-climate-risk', summary: 'How climate and sustainability risks affect organisations and the financial system.' },
  { id: 'cfa-esg', name: 'CFA ESG', full: 'CFA Certificate in ESG Investing', provider: 'CFA Institute', discipline: 'ESG & Sustainability', level: 'Foundational', track: 'esg-climate-risk', summary: 'Integrating ESG factors into investment analysis and decisions.' },
  { id: 'fsa', name: 'FSA Credential', full: 'Fundamentals of Sustainability Accounting', provider: 'IFRS / SASB', discipline: 'ESG & Sustainability', level: 'Intermediate', track: 'esg-climate-risk', summary: 'Linking sustainability information to financial performance and disclosure.' },

  // ── Finance & Treasury (credit, market, liquidity, insurance) ───────────
  { id: 'cfa', name: 'CFA', full: 'Chartered Financial Analyst', provider: 'CFA Institute', discipline: 'Finance & Treasury', level: 'Expert', track: 'market-risk', summary: 'The premier investment-analysis credential; deep coverage of markets and valuation.' },
  { id: 'ctp', name: 'CTP', full: 'Certified Treasury Professional', provider: 'AFP', discipline: 'Finance & Treasury', level: 'Intermediate', track: 'liquidity-risk', summary: 'Corporate treasury, liquidity and cash-flow management.' },
  { id: 'crc', name: 'CRC', full: 'Credit Risk Certification', provider: 'RMA', discipline: 'Finance & Treasury', level: 'Intermediate', track: 'credit-risk', summary: 'Commercial credit-risk assessment and management.' },
  { id: 'arm', name: 'ARM', full: 'Associate in Risk Management', provider: 'The Institutes', discipline: 'Finance & Treasury', level: 'Intermediate', track: 'insurable-risk', summary: 'Risk management and insurance fundamentals across the risk-transfer landscape.' },
  { id: 'cpcu', name: 'CPCU', full: 'Chartered Property Casualty Underwriter', provider: 'The Institutes', discipline: 'Finance & Treasury', level: 'Advanced', track: 'insurable-risk', summary: 'Advanced property-casualty insurance, underwriting and risk.' },
];

// Display order for disciplines.
export const disciplineOrder = [
  'Integrated GRC',
  'Risk Management',
  'Information Security & Cyber',
  'Privacy & Data Protection',
  'Audit',
  'Compliance',
  'Financial Crime',
  'IT & Enterprise Governance',
  'Business Continuity & Resilience',
  'ESG & Sustainability',
  'Finance & Treasury',
];

// An icon per discipline (used as the section header glyph).
export const disciplineIcon = {
  'Integrated GRC': '🧩',
  'Risk Management': '🎯',
  'Information Security & Cyber': '🏰',
  'Privacy & Data Protection': '🔒',
  Audit: '🩺',
  Compliance: '⚖️',
  'Financial Crime': '🕵️',
  'IT & Enterprise Governance': '🖥️',
  'Business Continuity & Resilience': '🚨',
  'ESG & Sustainability': '🌱',
  'Finance & Treasury': '💰',
};

export const levelOrder = ['Foundational', 'Intermediate', 'Advanced', 'Expert'];

export function uniqueValues(key) {
  return [...new Set(certifications.map((c) => c[key]))];
}
