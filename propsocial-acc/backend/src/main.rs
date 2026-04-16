mod auth;
mod error;
mod modules;
mod policy;
mod state;

use std::{net::SocketAddr, sync::Arc};

use axum::{routing::{get, post}, Router};
use state::AppState;
use tower_http::trace::TraceLayer;

#[tokio::main]
async fn main() {
    let state = Arc::new(AppState::bootstrap());

    let app = Router::new()
        .route("/health", get(modules::health::platform_health))
        .route("/api/v1/grc/pii/reveal", post(modules::grc::break_glass_reveal))
        .route("/api/v1/grc/audit-browser", get(modules::grc::list_audit_beacons))
        .route("/api/v1/grc/reports", get(modules::grc::list_reports))
        .route("/api/v1/forensics/kill-switch", post(modules::forensics::activate_kill_switch))
        .route("/api/v1/forensics/log-stream", get(modules::forensics::log_stream))
        .route("/api/v1/intelligence/disputes", get(modules::intelligence::list_disputes))
        .route("/api/v1/intelligence/trust-score/override", post(modules::intelligence::override_trust_score))
        .route("/api/v1/support/transactions/:id", get(modules::support::transaction_tracker))
        .route("/api/v1/support/escrow/:id/action", post(modules::support::escrow_action))
        .route("/api/v1/support/onboarding/queue", get(modules::support::onboarding_queue))
        .layer(TraceLayer::new_for_http())
        .with_state(state);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8088));
    println!("ACC proxy listening on {}", addr);
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
