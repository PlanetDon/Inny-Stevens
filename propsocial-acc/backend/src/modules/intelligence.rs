use axum::Json;
use serde::{Deserialize, Serialize};

use crate::{
    auth::AdminContext,
    error::AppError,
    policy::{require_capability, Capability},
};

#[derive(Serialize)]
pub struct DisputeRecord {
    pub listing_id: &'static str,
    pub similarity_score: f32,
    pub source_origin: &'static str,
    pub status: &'static str,
}

#[derive(Deserialize)]
pub struct TrustOverrideRequest {
    pub agent_id: String,
    pub new_score: u32,
    pub evidence_ref: String,
    pub reason_code: String,
}

#[derive(Serialize)]
pub struct TrustOverrideResponse {
    pub agent_id: String,
    pub previous_score: u32,
    pub new_score: u32,
    pub audit_status: &'static str,
}

pub async fn list_disputes(admin: AdminContext) -> Result<Json<Vec<DisputeRecord>>, AppError> {
    require_capability(&admin.role, Capability::ViewMaskedPii)
        .map_err(AppError::forbidden)?;

    Ok(Json(vec![
        DisputeRecord {
            listing_id: "lst_1007",
            similarity_score: 0.94,
            source_origin: "whatsapp_upload_cluster",
            status: "review_required",
        },
        DisputeRecord {
            listing_id: "lst_1009",
            similarity_score: 0.88,
            source_origin: "historical_verified_listing",
            status: "escalated",
        },
    ]))
}

pub async fn override_trust_score(
    admin: AdminContext,
    Json(payload): Json<TrustOverrideRequest>,
) -> Result<Json<TrustOverrideResponse>, AppError> {
    require_capability(&admin.role, Capability::OverrideTrustScore)
        .map_err(AppError::forbidden)?;

    if payload.reason_code.trim().is_empty() || payload.evidence_ref.trim().is_empty() {
        return Err(AppError::forbidden("override requires evidence and reason code"));
    }

    Ok(Json(TrustOverrideResponse {
        agent_id: payload.agent_id,
        previous_score: 62,
        new_score: payload.new_score,
        audit_status: "recorded",
    }))
}
