'use client'

import { useState } from 'react'

type ScenarioId = 1 | 2 | 3 | 4

type Scenario = {
  name: string
  color: string
  description: string
  dynamic: string
  employment: string
  risk: string
  sectors: Record<string, string>
  signposts: string[]
}

const scenarioIds: ScenarioId[] = [1, 2, 3, 4]

const scenarios: Record<ScenarioId, Scenario> = {
  1: {
    name: 'Supercharged Cape',
    color: 'rgb(29, 78, 216)',
    description: 'Exponential AI + widespread readiness',
    dynamic: 'Acceleration and concentration around advanced AI, data, and governance capability',
    employment: 'Growth in advanced roles; contraction in routine support and lower-level coding',
    risk: 'Acute brain drain as global remote competition intensifies for AI-ready talent',
    sectors: {
      ICT: 'AI engineering, data architecture, cybersecurity roles expand',
      BPO: 'Bot supervision, analytics, automation design emerge',
      Tourism: 'More role hybridisation than displacement',
      Manufacturing: 'Rising demand for digitally-enabled technicians',
    },
    signposts: [
      'Rate of agentic AI deployment in WC BPO operations',
      'ICT vacancy composition: ratio of AI/data roles to traditional support',
      'SMMEE AI tool adoption rate in WC tourism',
      'TVET enrolment in AI-adjacent programmes',
    ],
  },
  2: {
    name: 'The displacement trap',
    color: 'rgb(220, 38, 38)',
    description: 'Exponential AI + limited readiness',
    dynamic: 'Talent siege with extreme polarisation between the AI elite and the contracting routine base',
    employment: 'Polarised: growth at the top, contraction at the base, hollowed middle',
    risk: 'Skills paradox becomes a chasm; smaller WC firms cannot compete for talent',
    sectors: {
      ICT: 'Extreme polarisation between elite and routine',
      BPO: 'Sharp contraction in entry-level and routine transaction roles',
      Tourism: 'Market share loss for digitally excluded operators',
      Manufacturing: 'Workforce unable to operate or maintain new systems',
    },
    signposts: [
      'BPO employment contraction rate in routine transaction roles',
      'Youth unemployment trajectory in the WC vs national baseline',
      'TVET digital programme completion and employer absorption rates',
      'Manufacturing subsector production divergence',
    ],
  },
  3: {
    name: 'Co-Pilot Province',
    color: 'rgb(14, 116, 144)',
    description: 'Incremental AI + widespread readiness',
    dynamic: 'Augmented productivity through steady human-AI collaboration; hybrid roles expand',
    employment: 'Stable to growing; demand broadens across hybrid roles',
    risk: 'Complacency: assumption that incremental change is permanent',
    sectors: {
      ICT: 'Augmented productivity through hybrid roles',
      BPO: 'Managed transition from voice-dominant to omnichannel services',
      Tourism: 'Practical digital deepening at a manageable pace',
      Manufacturing: 'Steady digitalisation with mid-level gap narrowing',
    },
    signposts: [
      'Human-AI team configuration adoption rates across WC sectors',
      'BPO employment growth vs national trajectory',
      'SMME digital platform adoption in WC tourism',
      'Training programme relevance ratings from employers',
    ],
  },
  4: {
    name: 'Stalled and stratified',
    color: 'rgb(51, 65, 85)',
    description: 'Incremental AI + limited readiness',
    dynamic: 'Hollowed middle: specialist scarcity persists while competitiveness erodes slowly',
    employment: 'Flat: no transformative pressure, but no capability to capitalise either',
    risk: 'Province retains hub status, but competitiveness erodes relative to other jurisdictions',
    sectors: {
      ICT: 'Specialist scarcity persists while competitiveness erodes',
      BPO: 'Low-value lock-in; progression gap from entry-level to digital operations',
      Tourism: 'Analogue persistence; digital potential unrealised',
      Manufacturing: 'Dual economy persists; training system unresponsive',
    },
    signposts: [
      'Foundational digital work readiness scores at labour market entry',
      'BPO value chain composition: share from traditional vs BPaaS',
      'Tourism SMME digital platform performance metrics',
      'SETA programme relevance and employer absorption rates',
    ],
  },
}

export default function ScenariosPage() {
  const [selected, setSelected] = useState<ScenarioId>(1)
  const scenario = scenarios[selected]

  return (
    <main style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Scenario Exploration</h1>
        <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '16px' }}>
          Choose a scenario to see how the Western Cape digital skills landscape evolves
        </p>

        {/* Scenario selector buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '2rem',
        }}>
          {scenarioIds.map((id) => {
            const scen = scenarios[id]
            return (
            <button
              key={id}
              onClick={() => setSelected(id)}
              style={{
                padding: '1rem',
                textAlign: 'left',
                backgroundColor: selected === id ? `${scen.color}08` : 'transparent',
                border: selected === id ? `2px solid ${scen.color}` : '1px solid #dbeafe',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (selected !== id) {
                  e.currentTarget.style.backgroundColor = '#eff6ff'
                  e.currentTarget.style.borderColor = '#93c5fd'
                }
              }}
              onMouseLeave={(e) => {
                if (selected !== id) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = '#dbeafe'
                }
              }}
            >
              <div style={{ fontWeight: 500, fontSize: '15px', color: scen.color, marginBottom: '4px' }}>
                {scen.name}
              </div>
              <div style={{ fontSize: '13px', color: '#475569' }}>
                {scen.description}
              </div>
            </button>
          )
          })}
        </div>

        {/* Scenario details */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: `3px solid ${scenario.color}`,
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{ color: scenario.color, marginBottom: '1.5rem' }}>
            {scenario.name}
          </h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Dominant dynamic
            </div>
            <p style={{ fontSize: '14px', color: '#0f172a', margin: 0, lineHeight: 1.6 }}>
              {scenario.dynamic}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
                Employment trajectory
              </div>
              <p style={{ fontSize: '14px', color: '#0f172a', margin: 0, lineHeight: 1.6 }}>
                {scenario.employment}
              </p>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
                Key risk
              </div>
              <p style={{ fontSize: '14px', color: '#0f172a', margin: 0, lineHeight: 1.6 }}>
                {scenario.risk}
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.12)', paddingTop: '1.5rem' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Sector impacts
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {Object.entries(scenario.sectors).map(([sector, impact]) => (
                <div key={sector}>
                  <div style={{ fontWeight: 500, color: scenario.color, marginBottom: '0.25rem', fontSize: '14px' }}>
                    {sector}
                  </div>
                  <div style={{ color: '#475569', fontSize: '13px' }}>
                    {impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decision signposts */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #dbeafe',
          borderRadius: '8px',
          padding: '2rem',
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>What to monitor</h3>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
            {scenario.signposts.map((signpost, i) => (
              <li
                key={i}
                style={{
                  paddingBottom: '0.75rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  fontSize: '14px',
                  color: '#0f172a',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: scenario.color, fontWeight: 500 }}>
                  •
                </span>
                {signpost}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
