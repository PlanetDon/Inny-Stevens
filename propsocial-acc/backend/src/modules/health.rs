use std::sync::Arc;

use axum::{extract::State, Json};
use serde::Serialize;

use crate::state::AppState;

#[derive(Serialize)]
pub struct PlatformHealth {
    rust_core: &'static str,
    python_ai_latency_ms: u32,
    blockchain_rpc: &'static str,
    postgres_audit_replication: &'static str,
}

pub async fn platform_health(State(_state): State<Arc<AppState>>) -> Json<PlatformHealth> {
    Json(PlatformHealth {
        rust_core: "healthy",
        python_ai_latency_ms: 143,
        blockchain_rpc: "degraded",
        postgres_audit_replication: "healthy",
    })
}
