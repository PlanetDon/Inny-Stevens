use axum::{extract::Path, Json};
use serde::{Deserialize, Serialize};

use crate::{
    auth::AdminContext,
    error::AppError,
    policy::{require_capability, Capability},
};

#[derive(Serialize)]
pub struct TransactionState {
    pub transaction_id: String,
    pub postgres_state: &'static str,
    pub polygon_state: &'static str,
    pub settlement_gap: &'static str,
}

#[derive(Deserialize)]
pub struct EscrowActionRequest {
    pub action: String,
    pub legal_reference: String,
    pub reason_code: String,
}

#[derive(Serialize)]
pub struct OnboardingCase {
    pub case_id: &'static str,
    pub applicant_type: &'static str,
    pub kyc_status: &'static str,
    pub aml_status: &'static str,
    pub license_status: &'static str,
}

pub async fn transaction_tracker(
    Path(id): Path<String>,
    admin: AdminContext,
) -> Result<Json<TransactionState>, AppError> {
    require_capability(&admin.role, Capability::ViewMaskedPii)
        .map_err(AppError::forbidden)?;

    Ok(Json(TransactionState {
        transaction_id: id,
        postgres_state: "escrow_funded",
        polygon_state: "pending_release",
        settlement_gap: "chain confirmation waiting",
    }))
}

pub async fn escrow_action(
    Path(_id): Path<String>,
    admin: AdminContext,
    Json(payload): Json<EscrowActionRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    require_capability(&admin.role, Capability::ManageEscrow)
        .map_err(AppError::forbidden)?;

    if payload.legal_reference.trim().is_empty() || payload.reason_code.trim().is_empty() {
        return Err(AppError::forbidden("escrow action requires legal reference and reason"));
    }

    Ok(Json(serde_json::json!({
        "accepted": true,
        "action": payload.action,
        "audit_status": "recorded"
    })))
}

pub async fn onboarding_queue(admin: AdminContext) -> Result<Json<Vec<OnboardingCase>>, AppError> {
    require_capability(&admin.role, Capability::ReviewOnboarding)
        .map_err(AppError::forbidden)?;

    Ok(Json(vec![
        OnboardingCase {
            case_id: "kyc_201",
            applicant_type: "agent",
            kyc_status: "pending_face_match",
            aml_status: "clear",
            license_status: "niesv_review",
        },
        OnboardingCase {
            case_id: "kyc_202",
            applicant_type: "landlord",
            kyc_status: "document_retry",
            aml_status: "screening",
            license_status: "not_applicable",
        },
    ]))
}
