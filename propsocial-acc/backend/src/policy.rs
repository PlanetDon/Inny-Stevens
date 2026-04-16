use std::str::FromStr;

use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub enum AdminRole {
    SupportL1,
    SupportLead,
    GrcAnalyst,
    GrcDirector,
    Sre,
    SecurityLead,
    ComplianceOfficer,
}

impl FromStr for AdminRole {
    type Err = ();

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "support_l1" => Ok(Self::SupportL1),
            "support_lead" => Ok(Self::SupportLead),
            "grc_analyst" => Ok(Self::GrcAnalyst),
            "grc_director" => Ok(Self::GrcDirector),
            "sre" => Ok(Self::Sre),
            "security_lead" => Ok(Self::SecurityLead),
            "compliance_officer" => Ok(Self::ComplianceOfficer),
            _ => Err(()),
        }
    }
}

#[derive(Clone, Debug)]
pub enum Capability {
    ViewMaskedPii,
    BreakGlassReveal,
    BrowseAuditWorm,
    GenerateReports,
    ViewForensics,
    ActivateKillSwitch,
    OverrideTrustScore,
    ManageEscrow,
    ReviewOnboarding,
}

pub fn require_capability(role: &AdminRole, capability: Capability) -> Result<(), &'static str> {
    use AdminRole::*;
    let allowed = match capability {
        Capability::ViewMaskedPii => matches!(
            role,
            SupportL1 | SupportLead | GrcAnalyst | GrcDirector | ComplianceOfficer
        ),
        Capability::BreakGlassReveal => matches!(role, GrcDirector | ComplianceOfficer | SecurityLead),
        Capability::BrowseAuditWorm => matches!(role, GrcAnalyst | GrcDirector | ComplianceOfficer),
        Capability::GenerateReports => matches!(role, GrcAnalyst | GrcDirector | ComplianceOfficer),
        Capability::ViewForensics => matches!(role, Sre | SecurityLead),
        Capability::ActivateKillSwitch => matches!(role, SecurityLead),
        Capability::OverrideTrustScore => matches!(role, SupportLead | ComplianceOfficer),
        Capability::ManageEscrow => matches!(role, SupportLead | ComplianceOfficer),
        Capability::ReviewOnboarding => matches!(role, SupportLead | ComplianceOfficer | GrcAnalyst),
    };

    if allowed {
        Ok(())
    } else {
        Err("insufficient privileges for requested capability")
    }
}
