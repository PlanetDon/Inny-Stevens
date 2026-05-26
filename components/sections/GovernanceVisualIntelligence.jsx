'use client'

import { motion } from 'framer-motion'
import { RISK_INTELLIGENCE_DATA, GOVERNANCE_ARCHITECTURE } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'

const Motion = motion

function TerminalHeader({ title, subtitle }) {
  return (
    <div className="border-b border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-subtle" />
        <div>
          <p className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">{title}</p>
          {subtitle && <p className="text-[9px] text-[var(--text-muted)] tracking-wider">{subtitle}</p>}
        </div>
      </div>
      <span className="text-[9px] font-mono text-[var(--text-muted)]">LIVE</span>
    </div>
  )
}

function RiskHeatMap({ domains }) {
  const cellColor = (likelihood, impact) => {
    const score = likelihood * impact
    if (score >= 15) return 'bg-rose-500/20 border-rose-500/30 text-rose-200'
    if (score >= 9) return 'bg-amber-500/15 border-amber-500/25 text-amber-200'
    return 'bg-emerald-500/12 border-emerald-500/20 text-emerald-200'
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
      <TerminalHeader title="RISK HEAT MAP" subtitle="Enterprise Risk Landscape" />
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[var(--surface)]/50">
              <th className="px-4 py-2.5 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Domain</th>
              <th className="px-4 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">L</th>
              <th className="px-4 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">I</th>
              <th className="px-4 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Score</th>
              <th className="px-4 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Residual</th>
              <th className="px-4 py-2.5 text-right text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Trend</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, i) => {
              const score = domain.likelihood * domain.impact
              return (
                <tr key={domain.name} className={`border-b border-[var(--line)] last:border-b-0 transition hover:bg-[var(--surface)]/40 ${i % 2 === 0 ? 'bg-[var(--surface-soft)]' : 'bg-[var(--surface)]/30'}`}>
                  <td className="px-4 py-2.5 text-sm font-medium text-[var(--text-primary)]">{domain.name}</td>
                  <td className="px-4 py-2.5 text-center text-xs text-[var(--text-secondary)]">{domain.likelihood}</td>
                  <td className="px-4 py-2.5 text-center text-xs text-[var(--text-secondary)]">{domain.impact}</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className={`inline-flex items-center justify-center w-7 h-5 rounded text-[10px] font-bold ${
                      score >= 15 ? 'bg-rose-500/20 text-rose-300' : score >= 9 ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {score}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className={`text-[10px] font-semibold ${cellColor(domain.likelihood, domain.impact)}`}>
                      {domain.residual === 1 ? 'Low' : domain.residual === 2 ? 'Med' : 'High'}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <span className={`text-[11px] font-mono ${
                      domain.trend === 'improving' ? 'text-emerald-400' : domain.trend === 'monitoring' ? 'text-amber-400' : 'text-[var(--text-muted)]'
                    }`}>
                      {domain.trend === 'improving' ? '↓' : domain.trend === 'monitoring' ? '★' : '→'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="border-t border-[var(--line)] bg-[var(--surface)]/50 px-4 py-2 flex items-center justify-between text-[9px] text-[var(--text-muted)] font-mono">
        <span>INHERENT: 12.5 AVG</span>
        <span>RESIDUAL: 1.8 AVG</span>
        <span>MONITORED: 8 DOMAINS</span>
      </div>
    </div>
  )
}

function ControlEffectiveness({ categories }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
      <TerminalHeader title="CONTROL EFFECTIVENESS" subtitle="Governance Control Performance" />
      <div className="space-y-3 p-4">
        {categories.map(cat => (
          <div key={cat.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-medium text-[var(--text-secondary)]">{cat.name}</span>
              <span className={`text-[11px] font-mono font-semibold ${
                cat.rate >= 90 ? 'text-emerald-300' : cat.rate >= 80 ? 'text-amber-300' : 'text-rose-300'
              }`}>
                {cat.rate}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--line)] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${cat.rate}%`,
                  backgroundColor: cat.rate >= 90 ? 'var(--risk-low)' : cat.rate >= 80 ? 'var(--risk-medium)' : 'var(--risk-high)',
                }}
              />
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-[var(--line)] flex justify-between text-[9px] text-[var(--text-muted)] font-mono">
          <span>WEIGHTED AVG: 86.6%</span>
          <span className="text-emerald-400">EFFECTIVE</span>
        </div>
      </div>
    </div>
  )
}

function MaturityAssessment({ domains }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
      <TerminalHeader title="GOVERNANCE MATURITY" subtitle="Capability Level by Domain (1-5)" />
      <div className="space-y-4 p-4">
        {domains.map(domain => (
          <div key={domain.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium text-[var(--text-secondary)]">{domain.name}</span>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--accent-soft)]">{domain.level}</span>
                <span className="mx-1">/</span>
                <span>{domain.target}</span>
              </span>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <span
                  key={i}
                  className={`h-2 w-full rounded-sm transition-colors ${
                    i <= domain.level
                      ? 'bg-[var(--accent-soft)]'
                      : i <= domain.target
                      ? 'bg-[var(--line-strong)]/30'
                      : 'bg-[var(--line)]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-[var(--line)] flex justify-between text-[9px] text-[var(--text-muted)] font-mono">
          <span>TARGET: 4.7</span>
          <span>CURRENT: 3.7</span>
          <span className="text-amber-400">GAP: 1.0</span>
        </div>
      </div>
    </div>
  )
}

function RiskTicker({ domains }) {
  const maxScore = Math.max(...domains.map(d => d.likelihood * d.impact))
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
      <TerminalHeader title="RISK PROFILE SUMMARY" subtitle="Top Risk Exposures" />
      <div className="p-4 space-y-3">
        {domains.slice(0, 5).map(domain => {
          const score = domain.likelihood * domain.impact
          const pct = (score / maxScore) * 100
          return (
            <div key={domain.name} className="flex items-center gap-3">
              <span className="text-xs text-[var(--text-primary)] w-28 shrink-0">{domain.name}</span>
              <div className="flex-1 h-2 rounded-full bg-[var(--line)] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: score >= 15 ? 'var(--risk-high)' : score >= 9 ? 'var(--risk-medium)' : 'var(--risk-low)',
                  }}
                />
              </div>
              <span className="text-xs font-mono font-bold w-6 text-right text-[var(--text-primary)]">{score}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ArchitectureOverview({ systems }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
      <TerminalHeader title="GOVERNANCE ARCHITECTURE" subtitle="Enterprise System Components" />
      <div className="p-4 space-y-3">
        {systems.map(sys => (
          <div key={sys.domain} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5 transition hover:border-[var(--line-strong)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-[var(--text-primary)]">{sys.domain}</p>
              <span className="text-[9px] text-[var(--text-muted)] font-mono">{sys.components.length} modules</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {sys.components.map(comp => (
                <span key={comp} className="rounded-md bg-[var(--surface-soft)] border border-[var(--line)] px-2 py-0.5 text-[10px] text-[var(--text-secondary)]">
                  {comp}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[9px] text-[var(--text-muted)] italic font-mono">{sys.integration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntelligenceSummary({ domains }) {
  const avgScore = (domains.reduce((sum, d) => sum + d.likelihood * d.impact, 0) / domains.length).toFixed(1)
  const totalExposure = domains.reduce((sum, d) => sum + d.likelihood * d.impact, 0)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { label: 'Avg Risk Score', value: avgScore, color: parseFloat(avgScore) >= 12 ? 'text-rose-300' : 'text-amber-300' },
        { label: 'Total Exposure', value: totalExposure, color: 'text-[var(--text-primary)]' },
        { label: 'Domains Monitored', value: domains.length, color: 'text-emerald-300' },
        { label: 'Residual Avg', value: (domains.reduce((s, d) => s + d.residual, 0) / domains.length).toFixed(1), color: 'text-[var(--accent-soft)]' },
      ].map(stat => (
        <div key={stat.label} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 text-center">
          <p className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</p>
          <p className="text-[9px] text-[var(--text-muted)] uppercase tracking-[0.1em] mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default function GovernanceVisualIntelligence() {
  const data = RISK_INTELLIGENCE_DATA
  const arch = GOVERNANCE_ARCHITECTURE

  return (
    <section id="visual-intelligence" className="section-shell">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Governance Intelligence"
          title="Risk & Governance Intelligence"
          description="Enterprise risk landscape, control effectiveness, maturity assessment, and governance architecture visualization."
        />

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <IntelligenceSummary domains={data.riskHeatMap.domains} />
        </Motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <RiskHeatMap domains={data.riskHeatMap.domains} />
          </Motion.div>

          <div className="grid gap-5">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ControlEffectiveness categories={data.controlEffectiveness.categories} />
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <MaturityAssessment domains={data.maturityLevels.domains} />
            </Motion.div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <RiskTicker domains={data.riskHeatMap.domains} />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArchitectureOverview systems={arch.systems} />
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
