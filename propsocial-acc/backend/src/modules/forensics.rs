use axum::Json;
use serde::{Deserialize, Serialize};

use crate::{
    auth::AdminContext,
    error::AppError,
    policy::{require_capability, Capability},
};

#[derive(Deserialize)]
pub struct KillSwitchRequest {
    pub level: u8,
    pub target_ref: String,
    pub justification: String,
    pub second_approver_admin_id: String,
}

#[derive(Serialize)]
pub struct KillSwitchResponse {
    pub accepted: bool,
    pub scope: String,
    pub quorum: String,
}

#[derive(Serialize)]
pub struct LogEvent {
    pub source: &'static str,
    pub severity: &'static str,
    pub pattern: &'static str,
    pub recommendation: &'static str,
}

pub async fn activate_kill_switch(
    admin: AdminContext,
    Json(payload): Json<KillSwitchRequest>,
) -> Result<Json<KillSwitchResponse>, AppError> {
    require_capability(&admin.role, Capability::ActivateKillSwitch)
        .map_err(AppError::forbidden)?;

    if payload.second_approver_admin_id.trim().is_empty() || payload.justification.trim().is_empty() {
        return Err(AppError::forbidden("multi-signature confirmation required"));
    }

    let scope = match payload.level {
        1 => format!("listing:{}", payload.target_ref),
        2 => format!("account:{}", payload.target_ref),
        3 => "global_transaction_freeze".to_string(),
        _ => return Err(AppError::forbidden("unsupported kill-switch level")),
    };

    Ok(Json(KillSwitchResponse {
        accepted: true,
        scope,
        quorum: "2-of-2".to_string(),
    }))
}

pub async fn log_stream(admin: AdminContext) -> Result<Json<Vec<LogEvent>>, AppError> {
    require_capability(&admin.role, Capability::ViewForensics)
        .map_err(AppError::forbidden)?;

    Ok(Json(vec![
        LogEvent {
            source: "rust-core",
            severity: "warn",
            pattern: "listing_status_fanout_delay",
            recommendation: "inspect event bus lag and Redis lock expiry",
        },
        LogEvent {
            source: "python-ai",
            severity: "error",
            pattern: "embedding_timeout_spike",
            recommendation: "drain slow workers and fail over to warm pod pool",
        },
    ]))
}
