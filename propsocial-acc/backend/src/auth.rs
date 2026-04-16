use axum::{
    extract::FromRequestParts,
    http::{header, request::Parts, StatusCode},
};

use crate::{error::AppError, policy::AdminRole};

#[derive(Clone, Debug)]
pub struct AdminContext {
    pub admin_id: String,
    pub role: AdminRole,
    pub mfa_verified: bool,
    pub device_trust: String,
}

impl<S> FromRequestParts<S> for AdminContext
where
    S: Send + Sync,
{
    type Rejection = AppError;

    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        let admin_id = parts
            .headers
            .get("x-admin-id")
            .and_then(|v| v.to_str().ok())
            .unwrap_or("anonymous")
            .to_string();

        let role = parts
            .headers
            .get("x-admin-role")
            .and_then(|v| v.to_str().ok())
            .unwrap_or("support_l1")
            .parse()
            .map_err(|_| AppError::forbidden("invalid admin role"))?;

        let mfa_verified = parts
            .headers
            .get("x-webauthn")
            .or_else(|| parts.headers.get(header::AUTHORIZATION))
            .is_some();

        if !mfa_verified {
            return Err(AppError::new(
                StatusCode::UNAUTHORIZED,
                "hardware-backed authentication required",
            ));
        }

        Ok(Self {
            admin_id,
            role,
            mfa_verified,
            device_trust: "hardware-key".to_string(),
        })
    }
}
