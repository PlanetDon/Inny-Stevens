use chrono::{DateTime, Utc};
use serde::Serialize;
use std::sync::Mutex;

#[derive(Clone, Debug, Serialize)]
pub struct AuditBeacon {
    pub id: String,
    pub actor_admin_id: String,
    pub action: String,
    pub reason_code: String,
    pub target_ref: String,
    pub at: DateTime<Utc>,
}

pub struct AppState {
    pub audit_beacons: Mutex<Vec<AuditBeacon>>,
}

impl AppState {
    pub fn bootstrap() -> Self {
        Self {
            audit_beacons: Mutex::new(vec![AuditBeacon {
                id: "bcn_001".to_string(),
                actor_admin_id: "system".to_string(),
                action: "acc_bootstrap".to_string(),
                reason_code: "platform_init".to_string(),
                target_ref: "acc".to_string(),
                at: Utc::now(),
            }]),
        }
    }
}
