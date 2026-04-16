export type AdminRole =
  | "support_l1"
  | "support_lead"
  | "grc_analyst"
  | "grc_director"
  | "sre"
  | "security_lead"
  | "compliance_officer";

export type ModuleKey =
  | "kpis"
  | "grc"
  | "forensics"
  | "intelligence"
  | "support";

export const roleLabels: Record<AdminRole, string> = {
  support_l1: "Support L1",
  support_lead: "Support Lead",
  grc_analyst: "GRC Analyst",
  grc_director: "GRC Director",
  sre: "SRE",
  security_lead: "Security Lead",
  compliance_officer: "Compliance Officer"
};

export const moduleAccess: Record<AdminRole, ModuleKey[]> = {
  support_l1: ["kpis", "support", "intelligence"],
  support_lead: ["kpis", "support", "intelligence"],
  grc_analyst: ["kpis", "grc", "support", "intelligence"],
  grc_director: ["kpis", "grc", "support", "intelligence"],
  sre: ["kpis", "forensics"],
  security_lead: ["kpis", "forensics", "grc"],
  compliance_officer: ["kpis", "grc", "support", "intelligence"]
};

export const kpis = [
  { label: "TTF", value: "4m 12s", note: "listing upload to AI flag" },
  { label: "Market Liquidity", value: "NGN 2.4B / USDC 611K", note: "dual-rail 24h volume" },
  { label: "User Trust Index", value: "81.4", note: "platform-wide confidence score" }
];

export const healthCards = [
  { label: "Rust Core", value: "Healthy", tone: "good" },
  { label: "Python AI Latency", value: "143ms p95", tone: "warn" },
  { label: "Blockchain RPC", value: "Degraded", tone: "bad" }
];

export const disputes = [
  { listingId: "LST-1007", similarity: "0.94", origin: "WhatsApp cluster", status: "Review" },
  { listingId: "LST-1009", similarity: "0.88", origin: "Historical verified listing", status: "Escalated" }
];

export const onboardingCases = [
  { id: "KYC-201", type: "Agent", kyc: "Pending face match", aml: "Clear", license: "NIESV review" },
  { id: "KYC-202", type: "Landlord", kyc: "Document retry", aml: "Screening", license: "N/A" }
];
