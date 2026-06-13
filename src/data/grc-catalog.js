// A reference catalog of major GRC instruments worldwide — the laws, regulations,
// frameworks and standards an organisation may have to abide by.
// type:   Regulation | Law / Statute | Framework | Standard | Program / Cert
// scope:  "Global" (voluntary/international, usable anywhere) vs
//         "Region-specific" (legally binding within a jurisdiction)
// region: human-readable jurisdiction; regionGroup: bucket used for filtering.
// domain: subject area; also drives the cross-link to the matching learning track.
//
// To extend: add an entry. Filters, lists and the map derive from the data automatically.

export const catalog = [
  // ── Privacy & Data Protection ───────────────────────────────────────────
  { id: 'gdpr', name: 'GDPR', full: 'General Data Protection Regulation', type: 'Regulation', domain: 'Privacy & Data', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2018, summary: 'The benchmark privacy law: lawful basis, consent, data-subject rights, 72h breach notice, heavy fines. Extraterritorial reach.' },
  { id: 'uk-gdpr', name: 'UK GDPR + DPA 2018', full: 'UK GDPR & Data Protection Act 2018', type: 'Law / Statute', domain: 'Privacy & Data', region: 'United Kingdom', regionGroup: 'Europe', scope: 'Region-specific', year: 2018, summary: "Post-Brexit retained GDPR plus the UK's Data Protection Act, enforced by the ICO." },
  { id: 'ccpa', name: 'CCPA / CPRA', full: 'California Consumer Privacy Act (as amended by CPRA)', type: 'Law / Statute', domain: 'Privacy & Data', region: 'United States — California', regionGroup: 'North America', scope: 'Region-specific', year: 2020, summary: 'Consumer rights to know, delete, correct and opt out of sale/sharing. A model many US states now follow.' },
  { id: 'dpdp', name: 'DPDP Act', full: 'Digital Personal Data Protection Act, 2023', type: 'Law / Statute', domain: 'Privacy & Data', region: 'India', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2023, summary: "India's consent-centric data protection law: notice, purpose limitation, data principal rights, the Data Protection Board." },
  { id: 'lgpd', name: 'LGPD', full: 'Lei Geral de Proteção de Dados', type: 'Law / Statute', domain: 'Privacy & Data', region: 'Brazil', regionGroup: 'Latin America', scope: 'Region-specific', year: 2020, summary: "Brazil's GDPR-aligned privacy law, enforced by the ANPD." },
  { id: 'pipeda', name: 'PIPEDA', full: 'Personal Information Protection and Electronic Documents Act', type: 'Law / Statute', domain: 'Privacy & Data', region: 'Canada', regionGroup: 'North America', scope: 'Region-specific', year: 2000, summary: "Canada's federal private-sector privacy law built on ten fair-information principles." },
  { id: 'pipl', name: 'PIPL', full: 'Personal Information Protection Law', type: 'Law / Statute', domain: 'Privacy & Data', region: 'China', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2021, summary: "China's strict privacy law with consent rules and tight cross-border transfer controls." },
  { id: 'appi', name: 'APPI', full: 'Act on the Protection of Personal Information', type: 'Law / Statute', domain: 'Privacy & Data', region: 'Japan', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2003, summary: "Japan's privacy law, with adequacy recognized by the EU." },
  { id: 'pdpa-sg', name: 'PDPA', full: 'Personal Data Protection Act (Singapore)', type: 'Law / Statute', domain: 'Privacy & Data', region: 'Singapore', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2012, summary: 'Consent, purpose and notification obligations, overseen by the PDPC.' },
  { id: 'privacy-act-au', name: 'Privacy Act 1988', full: 'Privacy Act & Australian Privacy Principles', type: 'Law / Statute', domain: 'Privacy & Data', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 1988, summary: '13 Australian Privacy Principles plus a Notifiable Data Breaches scheme. Reform is expanding its reach.' },
  { id: 'privacy-act-nz', name: 'Privacy Act 2020', full: 'New Zealand Privacy Act 2020', type: 'Law / Statute', domain: 'Privacy & Data', region: 'New Zealand', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2020, summary: 'NZ privacy law with 13 Information Privacy Principles and mandatory breach notification, overseen by the OPC.' },
  { id: 'cdr-au', name: 'CDR', full: 'Consumer Data Right (Australia)', type: 'Regulation', domain: 'Privacy & Data', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2020, summary: 'Consumer-controlled data sharing (open banking and beyond), giving people portability over their data.' },
  { id: 'popia', name: 'POPIA', full: 'Protection of Personal Information Act', type: 'Law / Statute', domain: 'Privacy & Data', region: 'South Africa', regionGroup: 'Africa', scope: 'Region-specific', year: 2021, summary: "South Africa's data protection law, enforced by the Information Regulator." },
  { id: 'iso-27701', name: 'ISO/IEC 27701', full: 'Privacy Information Management System', type: 'Standard', domain: 'Privacy & Data', region: 'International', regionGroup: 'Global', scope: 'Global', year: 2019, summary: 'A privacy extension to ISO 27001 — certifiable PIMS, maps to GDPR-style obligations.' },
  { id: 'hipaa', name: 'HIPAA', full: 'Health Insurance Portability and Accountability Act', type: 'Law / Statute', domain: 'Health', region: 'United States', regionGroup: 'North America', scope: 'Region-specific', year: 1996, summary: 'Privacy & Security Rules for protected health information (PHI); breach notification.' },

  // ── Financial services & prudential ─────────────────────────────────────
  { id: 'sox', name: 'SOX', full: 'Sarbanes-Oxley Act', type: 'Law / Statute', domain: 'Financial', region: 'United States', regionGroup: 'North America', scope: 'Region-specific', year: 2002, summary: 'Financial-reporting integrity and internal controls (esp. §302/§404) for public companies.' },
  { id: 'glba', name: 'GLBA', full: 'Gramm-Leach-Bliley Act', type: 'Law / Statute', domain: 'Financial', region: 'United States', regionGroup: 'North America', scope: 'Region-specific', year: 1999, summary: 'Safeguards Rule and privacy notices for financial institutions.' },
  { id: 'pci-dss', name: 'PCI DSS', full: 'Payment Card Industry Data Security Standard', type: 'Standard', domain: 'Financial', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'Contractual security standard for anyone storing/processing cardholder data — global by card-brand mandate.' },
  { id: 'basel-iii', name: 'Basel III', full: 'Basel III Accords', type: 'Framework', domain: 'Financial', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'Global banking standards for capital, leverage and liquidity risk (BCBS) — the basis of prudential rules worldwide.' },
  { id: 'mifid2', name: 'MiFID II', full: 'Markets in Financial Instruments Directive II', type: 'Regulation', domain: 'Financial', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2018, summary: 'Investor protection, transparency and conduct rules for EU financial markets.' },
  { id: 'psd2', name: 'PSD2', full: 'Revised Payment Services Directive', type: 'Regulation', domain: 'Financial', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2018, summary: 'Open banking, strong customer authentication and third-party access in the EU.' },
  { id: 'solvency-ii', name: 'Solvency II', full: 'Solvency II Directive', type: 'Regulation', domain: 'Financial', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2016, summary: 'Risk-based capital, governance and disclosure regime for EU insurers.' },
  { id: 'apra-cps234', name: 'APRA CPS 234', full: 'APRA Prudential Standard CPS 234 — Information Security', type: 'Regulation', domain: 'Financial', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2019, summary: 'Mandatory information-security capabilities, controls and breach notification for APRA-regulated entities.' },
  { id: 'apra-cps230', name: 'APRA CPS 230', full: 'APRA Prudential Standard CPS 230 — Operational Risk Management', type: 'Regulation', domain: 'Resilience', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2025, summary: 'Operational risk, business continuity and third-party (service-provider) management for APRA-regulated entities.' },
  { id: 'rbnz', name: 'RBNZ Prudential', full: 'Reserve Bank of New Zealand prudential standards', type: 'Regulation', domain: 'Financial', region: 'New Zealand', regionGroup: 'Asia-Pacific', scope: 'Region-specific', summary: 'Capital, liquidity and conduct requirements for NZ banks and insurers under the RBNZ / DTA regime.' },
  { id: 'rbi', name: 'RBI Directions', full: 'Reserve Bank of India Master Directions', type: 'Regulation', domain: 'Financial', region: 'India', regionGroup: 'Asia-Pacific', scope: 'Region-specific', summary: "India's central-bank rules on capital, credit, IT/cyber, outsourcing and conduct for regulated lenders." },
  { id: 'nydfs-500', name: 'NYDFS 500', full: '23 NYCRR 500 Cybersecurity Regulation', type: 'Regulation', domain: 'Financial', region: 'United States — New York', regionGroup: 'North America', scope: 'Region-specific', year: 2017, summary: 'Cybersecurity program, CISO and incident-reporting rules for NY financial firms.' },

  // ── Financial crime, AML & sanctions ────────────────────────────────────
  { id: 'fatf', name: 'FATF Recommendations', full: 'Financial Action Task Force Recommendations', type: 'Standard', domain: 'Financial Crime', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'The global anti-money-laundering / counter-terrorist-financing standard; national laws implement it, and countries are graded against it.' },
  { id: 'austrac', name: 'AML/CTF Act', full: 'Anti-Money Laundering and Counter-Terrorism Financing Act 2006', type: 'Law / Statute', domain: 'Financial Crime', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2006, summary: 'Australia\'s AML/CTF regime (regulated by AUSTRAC): KYC, suspicious-matter reporting, and program obligations.' },
  { id: 'bsa', name: 'BSA', full: 'Bank Secrecy Act (US)', type: 'Law / Statute', domain: 'Financial Crime', region: 'United States', regionGroup: 'North America', scope: 'Region-specific', year: 1970, summary: 'US foundation for AML — recordkeeping and suspicious-activity reporting (SARs), overseen by FinCEN.' },
  { id: 'eu-aml', name: 'EU AML (6AMLD/AMLR)', full: 'EU Anti-Money-Laundering Directives & Regulation', type: 'Regulation', domain: 'Financial Crime', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', summary: 'EU-wide AML rules (latest AMLD/AMLR package) creating a single rulebook and a central AML authority (AMLA).' },
  { id: 'pmla', name: 'PMLA', full: 'Prevention of Money Laundering Act, 2002 (India)', type: 'Law / Statute', domain: 'Financial Crime', region: 'India', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2002, summary: "India's core AML law; reporting entities file with FIU-IND." },
  { id: 'ofac', name: 'OFAC Sanctions', full: 'US Office of Foreign Assets Control sanctions', type: 'Regulation', domain: 'Financial Crime', region: 'United States (extraterritorial)', regionGroup: 'North America', scope: 'Region-specific', summary: 'US economic-sanctions program with global reach; strict-liability screening obligations and severe penalties.' },

  // ── Security & IT governance (frameworks/standards) ─────────────────────
  { id: 'iso-27001', name: 'ISO/IEC 27001', full: 'Information Security Management System', type: 'Standard', domain: 'Security', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'The leading certifiable ISMS standard — risk-based controls (Annex A).' },
  { id: 'nist-csf', name: 'NIST CSF', full: 'NIST Cybersecurity Framework 2.0', type: 'Framework', domain: 'Security', region: 'United States (used globally)', regionGroup: 'Global', scope: 'Global', summary: 'Govern-Identify-Protect-Detect-Respond-Recover — voluntary, widely adopted worldwide.' },
  { id: 'nist-800-53', name: 'NIST SP 800-53', full: 'Security and Privacy Controls', type: 'Framework', domain: 'Security', region: 'United States', regionGroup: 'North America', scope: 'Region-specific', summary: 'Detailed control catalog mandated for US federal systems (basis of FedRAMP).' },
  { id: 'soc2', name: 'SOC 2', full: 'AICPA Trust Services Criteria', type: 'Framework', domain: 'Security', region: 'United States (used globally)', regionGroup: 'Global', scope: 'Global', summary: 'Attestation over security, availability, confidentiality, processing integrity, privacy — the SaaS default.' },
  { id: 'cis', name: 'CIS Controls', full: 'CIS Critical Security Controls', type: 'Framework', domain: 'Security', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'A prioritized, practical set of defensive controls (v8).' },
  { id: 'essential-8', name: 'Essential Eight', full: 'ACSC Essential Eight', type: 'Framework', domain: 'Security', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', summary: 'Australian Cyber Security Centre baseline of eight mitigation strategies, with maturity levels.' },
  { id: 'cobit', name: 'COBIT', full: 'Control Objectives for Information & Related Technologies', type: 'Framework', domain: 'IT Governance', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'ISACA framework for governance and management of enterprise IT.' },
  { id: 'fedramp', name: 'FedRAMP', full: 'Federal Risk and Authorization Management Program', type: 'Program / Cert', domain: 'Security', region: 'United States', regionGroup: 'North America', scope: 'Region-specific', summary: 'Standardized security authorization for cloud services used by US federal agencies.' },
  { id: 'nis2', name: 'NIS2', full: 'Network and Information Security Directive 2', type: 'Regulation', domain: 'Security', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2024, summary: 'Raised cybersecurity and incident-reporting duties for essential/important entities across the EU.' },
  { id: 'dora', name: 'DORA', full: 'Digital Operational Resilience Act', type: 'Regulation', domain: 'Resilience', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2025, summary: 'ICT risk, incident reporting and third-party (incl. cloud) oversight for EU financial entities.' },

  // ── Risk, controls & corporate governance ───────────────────────────────
  { id: 'coso', name: 'COSO', full: 'COSO Internal Control & Enterprise Risk Management', type: 'Framework', domain: 'Risk & Governance', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'The reference model for internal control and enterprise risk (underpins SOX programs).' },
  { id: 'iso-31000', name: 'ISO 31000', full: 'Risk Management — Guidelines', type: 'Standard', domain: 'Risk & Governance', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'Principles and a process for enterprise risk management (non-certifiable).' },
  { id: 'uk-cgc', name: 'UK Corp Gov Code', full: 'UK Corporate Governance Code', type: 'Framework', domain: 'Risk & Governance', region: 'United Kingdom', regionGroup: 'Europe', scope: 'Region-specific', summary: 'Comply-or-explain principles on board effectiveness, audit, risk and remuneration for listed companies.' },
  { id: 'asx-cgc', name: 'ASX Governance', full: 'ASX Corporate Governance Principles & Recommendations', type: 'Framework', domain: 'Risk & Governance', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', summary: 'Comply-or-explain governance principles for ASX-listed entities (board, risk, disclosure, culture).' },
  { id: 'far-au', name: 'FAR', full: 'Financial Accountability Regime (Australia)', type: 'Law / Statute', domain: 'Risk & Governance', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2024, summary: 'Personal accountability obligations for senior executives of banks, insurers and super (successor to BEAR).' },
  { id: 'smcr', name: 'SMCR', full: 'Senior Managers & Certification Regime', type: 'Regulation', domain: 'Risk & Governance', region: 'United Kingdom', regionGroup: 'Europe', scope: 'Region-specific', summary: 'UK regime making senior managers personally accountable for their areas of responsibility.' },
  { id: 'king-iv', name: 'King IV', full: 'King IV Report on Corporate Governance', type: 'Framework', domain: 'Risk & Governance', region: 'South Africa', regionGroup: 'Africa', scope: 'Region-specific', year: 2016, summary: 'Outcomes-based corporate-governance code widely referenced across Africa.' },

  // ── AI & emerging ───────────────────────────────────────────────────────
  { id: 'eu-ai-act', name: 'EU AI Act', full: 'Artificial Intelligence Act', type: 'Regulation', domain: 'AI', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2024, summary: 'Risk-tiered rules for AI systems — the first comprehensive AI law.' },
  { id: 'iso-42001', name: 'ISO/IEC 42001', full: 'AI Management System', type: 'Standard', domain: 'AI', region: 'International', regionGroup: 'Global', scope: 'Global', year: 2023, summary: 'A certifiable management system for responsible AI governance.' },
  { id: 'nist-ai-rmf', name: 'NIST AI RMF', full: 'AI Risk Management Framework', type: 'Framework', domain: 'AI', region: 'United States (used globally)', regionGroup: 'Global', scope: 'Global', year: 2023, summary: 'Voluntary framework to map, measure, manage and govern AI risk.' },

  // ── ESG & sustainability reporting ──────────────────────────────────────
  { id: 'csrd', name: 'CSRD', full: 'Corporate Sustainability Reporting Directive', type: 'Regulation', domain: 'ESG', region: 'European Union', regionGroup: 'Europe', scope: 'Region-specific', year: 2024, summary: 'Mandatory, audited sustainability/ESG reporting for large EU (and some non-EU) companies.' },
  { id: 'issb', name: 'ISSB (IFRS S1/S2)', full: 'ISSB Sustainability & Climate Disclosure Standards', type: 'Standard', domain: 'ESG', region: 'International', regionGroup: 'Global', scope: 'Global', year: 2023, summary: 'Global baseline for sustainability (S1) and climate (S2) financial disclosures.' },
  { id: 'tcfd', name: 'TCFD', full: 'Task Force on Climate-related Financial Disclosures', type: 'Framework', domain: 'ESG', region: 'International', regionGroup: 'Global', scope: 'Global', summary: 'The influential climate-disclosure framework now folded into ISSB standards.' },
  { id: 'au-climate', name: 'AU Climate Reporting', full: 'Australian mandatory climate-related financial disclosure', type: 'Law / Statute', domain: 'ESG', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', year: 2025, summary: 'Phased mandatory climate reporting (aligned to ISSB) for larger Australian entities.' },
  { id: 'apra-cpg229', name: 'APRA CPG 229', full: 'APRA Prudential Practice Guide CPG 229 — Climate Change Financial Risks', type: 'Framework', domain: 'ESG', region: 'Australia', regionGroup: 'Asia-Pacific', scope: 'Region-specific', summary: 'Guidance for APRA-regulated entities on managing climate-related financial risks and scenario analysis.' },
];

// Display order for region groups (Global first so the "used everywhere" set leads).
export const regionGroupOrder = ['Global', 'Europe', 'North America', 'Asia-Pacific', 'Latin America', 'Africa'];

export function uniqueValues(key) {
  return [...new Set(catalog.map((c) => c[key]))];
}

// Map an instrument to the learning track whose concept it best illustrates.
// Default by domain; a few specific instruments are overridden to a better-fitting track.
const TRACK_BY_DOMAIN = {
  'Privacy & Data': 'cyber-it-risk',
  Health: 'regulatory-compliance',
  Financial: 'regulatory-compliance',
  'Financial Crime': 'financial-crime',
  Security: 'cyber-it-risk',
  'IT Governance': 'cyber-it-risk',
  Resilience: 'business-continuity',
  'Risk & Governance': 'internal-controls',
  AI: 'cyber-it-risk',
  ESG: 'esg-climate-risk',
};

// Specific instruments that fit a more precise track than their domain default.
const OVERRIDES = {
  'sox': 'internal-controls',
  'pci-dss': 'cyber-it-risk',
  'basel-iii': 'operational-risk',
  'solvency-ii': 'insurable-risk',
  'rbnz': 'liquidity-risk',
  'mifid2': 'market-risk',
  'iso-31000': 'strategic-risk',
  'uk-cgc': 'strategic-risk',
  'asx-cgc': 'strategic-risk',
  'king-iv': 'strategic-risk',
  'far-au': 'financial-crime',
  'smcr': 'financial-crime',
  'apra-cps234': 'cyber-it-risk',
  'nydfs-500': 'cyber-it-risk',
  'rbi': 'credit-risk',
  'glba': 'regulatory-compliance',
};

export function trackSlugFor(item) {
  return OVERRIDES[item.id] || TRACK_BY_DOMAIN[item.domain] || 'regulatory-compliance';
}
