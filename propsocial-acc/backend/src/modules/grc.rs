use std::sync::Arc;

use axum::{extract::State, Json};
use chrono::Utc;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::{
    auth::AdminContext,
    error::AppError,
    policy::{require_capability, Capability},
    state::{AppState, AuditBeacon},
};

#[derive(Deserialize)]
pub struct RevealRequest {
    pub target_ref: String,
    pub field_name: String,
    pub reason_code: String,
    pub case_reference: String,
}

#[derive(Serialize)]
pub struct RevealResponse {
    pub target_ref: String,
    pub field_name: String,
    pub masked_value: String,
    pub revealed_value: String,
    pub audit_beacon_id: String,
}

#[derive(Serialize)]
pub struct ReportDescriptor {
    pub id: &'static str,
    pub title: &'static str,
    pub regulator: &'static str,
    pub cadence: &'static str,
}

pub async fn break_glass_reveal(
    State(state): State<Arc<AppState>>,
    admin: AdminContext,
    Json(payload): Json<RevealRequest>,
) -> Result<Json<RevealResponse>, AppError> {
    require_capability(&admin.role, Capability::BreakGlassReveal)
        .map_err(AppError::forbidden)?;

    if payload.reason_code.trim().is_empty() || payload.case_reference.trim().is_empty() {
        return Err(AppError::forbidden("reason code and case reference are required"));
    }

    let beacon = AuditBeacon {
        id: format!("bcn_{}", Uuid::new_v4()),
        actor_admin_id: admin.admin_id,
        action: format!("break_glass_reveal:{}", payload.field_name),
        reason_code: format!("{}:{}", payload.reason_code, payload.case_reference),
        target_ref: payload.target_ref.clone(),
        at: Utc::now(),
    };

    let beacon_id = beacon.id.clone();
    state.audit_beacons.lock().unwrap().push(beacon);

    Ok(Json(RevealResponse {
        target_ref: payload.target_ref,
        field_name: payload.field_name,
        masked_value: "***masked***".to_string(),
        revealed_value: "demo-only-unmasked-value".to_string(),
        audit_beacon_id: beacon_id,
    }))
}

pub async fn list_audit_beacons(
    State(state): State<Arc<AppState>>,
    admin: AdminContext,
) -> Result<Json<Vec<AuditBeacon>>, AppError> {
    require_capability(&admin.role, Capability::BrowseAuditWorm)
        .map_err(AppError::forbidden)?;
    let items = state.audit_beacons.lock().unwrap().clone();
    Ok(Json(items))
}

pub async fn list_reports(admin: AdminContext) -> Result<Json<Vec<ReportDescriptor>>, AppError> {
    require_capability(&admin.role, Capability::GenerateReports)
        .map_err(AppError::forbidden)?;

    Ok(Json(vec![
        ReportDescriptor {
            id: "rpt_niesv_monthly",
            title: "Monthly Transaction & Listing Integrity Report",
            regulator: "NIESV",
            cadence: "monthly",
        },
        ReportDescriptor {
            id: "rpt_sec_quarterly",
            title: "Quarterly Market Conduct & Escrow Risk Report",
            regulator: "SEC",
            cadence: "quarterly",
        },
    ]))
}
