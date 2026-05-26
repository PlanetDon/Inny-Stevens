'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GOVERNANCE_PROJECTS, PROJECT_WORKFLOWS } from '../../data/siteContent'
import SectionHeading from '../ui/SectionHeading'
import GovArchitectureDiagram from './GovArchitectureDiagram'

const Motion = motion

function RiskBadge({ likelihood, impact }) {
  const score = likelihood * impact
  const color = score >= 15 ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
    : score >= 9 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
  const label = score >= 15 ? 'Critical' : score >= 9 ? 'High' : 'Moderate'
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${color}`}>
      {label}
    </span>
  )
}

function RiskGauge({ score }) {
  const color = score >= 15 ? 'stroke-rose-400' : score >= 9 ? 'stroke-amber-400' : 'stroke-emerald-400'
  const r = 16
  const circumference = 2 * Math.PI * r
  const offset = circumference - (score / 25) * circumference
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
      <circle cx="20" cy="20" r={r} fill="none" stroke="var(--line)" strokeWidth="3" />
      <circle cx="20" cy="20" r={r} fill="none" className={color} strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 20 20)" />
      <text x="20" y="24" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="700">{score}</text>
    </svg>
  )
}

function WorkflowDiagram({ stages }) {
  return (
    <div className="space-y-1.5">
      {stages.map((stage, i) => (
        <div key={stage.phase} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9px] font-bold ${
              stage.status === 'complete' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
            }`}>
              {stage.status === 'complete' ? '✓' : '◌'}
            </span>
            {i < stages.length - 1 && <span className="mt-0.5 h-5 w-px bg-[var(--line)]" />}
          </div>
          <div className="min-w-0 pt-px">
            <p className="text-xs font-medium text-[var(--text-primary)]">{stage.phase}</p>
            <p className="text-[10px] text-[var(--text-muted)] leading-snug">{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function MetricsBar({ metrics }) {
  if (!metrics) return null
  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(metrics).map(([key, val]) => (
        <div key={key} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-2 text-center">
          <p className="text-sm font-bold text-[var(--accent-soft)]">{val}</p>
          <p className="text-[9px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function GovernanceProjectsSection() {
  const [expanded, setExpanded] = useState(null)
  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <section id="governance-projects" className="section-shell border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Enterprise Case Studies"
          title="Governance Intelligence Projects"
          description="Enterprise-grade governance systems and risk intelligence platforms designed for regulated markets, cross-border compliance, and operational resilience."
        />

        <div className="space-y-8">
          {GOVERNANCE_PROJECTS.map((project, index) => {
            const workflow = PROJECT_WORKFLOWS[project.id]
            const isExpanded = expanded === project.id
            const riskScore = project.riskMatrix.likelihood * project.riskMatrix.impact

            return (
              <Motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 shadow-[0_24px_48px_rgba(0,7,24,.32)] transition hover:border-[var(--line-strong)] md:p-8"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-soft)]">
                        {project.category}
                      </span>
                      <RiskBadge likelihood={project.riskMatrix.likelihood} impact={project.riskMatrix.impact} />
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)] md:text-2xl">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <RiskGauge score={riskScore} />
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Risk Score</p>
                      <p className="text-xs text-[var(--text-secondary)]">{project.riskMatrix.likelihood} × {project.riskMatrix.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-5">
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{project.executiveSummary}</p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Business Context</p>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.businessContext}</p>
                      </div>
                      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Governance Challenge</p>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.governanceChallenge}</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Risk Exposure</p>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.riskExposure}</p>
                    </div>

                    {project.metrics && <MetricsBar metrics={project.metrics} />}

                    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)] p-3.5 pb-2">Governance Architecture</p>
                      <GovArchitectureDiagram projectId={project.id} />
                    </div>

                    <button
                      onClick={() => toggle(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)] transition hover:gap-2"
                    >
                      {isExpanded ? 'Show Less' : 'View Full Case Study'}
                      <span aria-hidden="true" className={`inline-block transition-transform ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <Motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-4 overflow-hidden"
                        >
                          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Operational Design</p>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.operationalDesign}</p>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Key Findings</p>
                              <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.keyFindings}</p>
                            </div>
                            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Lessons Learned</p>
                              <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.lessonsLearned}</p>
                            </div>
                          </div>
                          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Strategic Recommendations</p>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.strategicRecommendations}</p>
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-4">
                    {workflow && (
                      <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Implementation Workflow</p>
                        <WorkflowDiagram stages={workflow.stages} />
                      </div>
                    )}
                    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Frameworks Applied</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.frameworksApplied.map(fw => (
                          <span key={fw} className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 py-1 text-[10px] text-[var(--text-secondary)]">{fw}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-soft)]">Risk Profile</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-[var(--text-muted)]">Likelihood</span>
                          <span className="text-[var(--text-primary)]">{project.riskMatrix.likelihood}/5</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-[var(--text-muted)]">Impact</span>
                          <span className="text-[var(--text-primary)]">{project.riskMatrix.impact}/5</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-[var(--text-muted)]">Residual</span>
                          <span className="text-[var(--text-primary)]">{project.riskMatrix.residual}/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
