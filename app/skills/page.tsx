'use client'

import { useState } from 'react'

type Sector = 'ICT' | 'BPO' | 'Manufacturing' | 'Tourism' | 'Trades'

type SkillPathway = {
  level: string
  roles: string
  skills: string
}

type SectorSkillData = {
  emerging: string[]
  declining: string[]
  pathways: SkillPathway[]
}

const sectors: Sector[] = ['ICT', 'BPO', 'Manufacturing', 'Tourism', 'Trades']

const skillData: Record<Sector, SectorSkillData> = {
  ICT: {
    emerging: [
      'AI engineering and integration',
      'Data architecture and engineering',
      'Cloud platform engineering (AWS, Azure, GCP)',
      'Cybersecurity governance and architecture',
      'MLOps and model evaluation',
      'Product thinking and systems design',
      'Ethical reasoning and AI responsibility',
    ],
    declining: [
      'Routine code support and scripting',
      'Manual testing and QA',
      'Lower-level infrastructure management',
      'Basic IT support and administration',
      'Single-technology specialisation',
    ],
    pathways: [
      {
        level: 'Entry (0-2 years)',
        roles: 'Junior developer, support engineer, QA analyst',
        skills: 'Cloud fundamentals, basic programming, platform literacy, collaboration tools',
      },
      {
        level: 'Mid (2-5 years)',
        roles: 'Developer, systems engineer, data analyst, QA specialist',
        skills: 'Cloud proficiency, data literacy, security fundamentals, problem-solving, team collaboration',
      },
      {
        level: 'Advanced (5+ years)',
        roles: 'Senior engineer, architect, lead engineer, security specialist, data scientist',
        skills: 'System design, AI integration, governance, mentoring, strategic thinking',
      },
    ],
  },
  BPO: {
    emerging: [
      'AI-supported customer operations',
      'Customer relationship management (CRM) fluency',
      'Workflow automation and orchestration',
      'Quality assurance and compliance',
      'Analytics and customer intelligence',
      'Omnichannel service design',
      'Escalation judgment and problem-solving',
    ],
    declining: [
      'Voice-dominant transaction processing',
      'Scripted call handling',
      'Single-channel service delivery',
      'Low-complexity administrative tasks',
      'Manual data entry and processing',
    ],
    pathways: [
      {
        level: 'Entry (0-2 years)',
        roles: 'Customer service agent, process coordinator',
        skills: 'CRM basics, communication, AI-assisted tools, platform literacy, customer empathy',
      },
      {
        level: 'Mid (2-5 years)',
        roles: 'Team lead, QA specialist, operations analyst, automation coordinator',
        skills: 'Workflow management, analytics interpretation, problem-solving, leadership, compliance knowledge',
      },
      {
        level: 'Advanced (5+ years)',
        roles: 'Operations manager, service architect, automation designer, compliance lead',
        skills: 'Service design, automation strategy, business acumen, governance, strategic leadership',
      },
    ],
  },
  Manufacturing: {
    emerging: [
      'Predictive maintenance and diagnostics',
      'Production data literacy and interpretation',
      'Digital quality control and process optimisation',
      'ERP and production systems management',
      'Supervisor digital fluency and dashboards',
      'Green-digital capability (energy, efficiency)',
      'Problem-solving using data and analytics',
    ],
    declining: [
      'Manual quality inspection',
      'Paper-based planning and scheduling',
      'Routine monitoring without diagnostics',
      'Single-skill technical roles',
      'Low-complexity coordination tasks',
    ],
    pathways: [
      {
        level: 'Entry (0-2 years)',
        roles: 'Production operator, quality technician, maintenance support',
        skills: 'Digital systems basics, data logging, safety protocols, equipment operation, communication',
      },
      {
        level: 'Mid (2-5 years)',
        roles: 'Technician, quality specialist, maintenance technician, shift supervisor',
        skills: 'Diagnostics, data interpretation, ERP use, problem-solving, team coordination, safety leadership',
      },
      {
        level: 'Advanced (5+ years)',
        roles: 'Supervisor, maintenance engineer, quality manager, production planner',
        skills: 'System design, predictive capability, digital twins, strategic planning, continuous improvement',
      },
    ],
  },
  Tourism: {
    emerging: [
      'AI-assisted marketing and content creation',
      'Booking systems and channel management',
      'Customer data analytics and segmentation',
      'Revenue and yield optimisation',
      'Personalised experience design',
      'Multilingual AI-powered engagement',
      'Sustainability and local-experience positioning',
    ],
    declining: [
      'Manual booking administration',
      'Single-channel marketing strategies',
      'Basic front-desk operations',
      'Static pricing and yield management',
      'Standardised, non-personalised service',
    ],
    pathways: [
      {
        level: 'Entry (0-2 years)',
        roles: 'Guest services agent, reservations coordinator, hospitality staff',
        skills: 'Booking systems, customer service, platform basics, cultural sensitivity, communication',
      },
      {
        level: 'Mid (2-5 years)',
        roles: 'Operations supervisor, marketing coordinator, experience designer, guest relations manager',
        skills: 'Systems management, analytics basics, marketing tools, problem-solving, cultural awareness',
      },
      {
        level: 'Advanced (5+ years)',
        roles: 'Operations manager, marketing manager, experience strategist, revenue manager',
        skills: 'Business strategy, data analytics, brand positioning, experience innovation, sustainability integration',
      },
    ],
  },
  Trades: {
    emerging: [
      'Digital diagnostics and troubleshooting',
      'Smart tools and IoT systems',
      'Remote support and mobile systems',
      'Predictive maintenance and monitoring',
      'Equipment data logging and analysis',
      'Job management and scheduling systems',
      'Electric vehicle and renewable energy systems',
    ],
    declining: [
      'Manual fault diagnosis and trial-and-error',
      'Paper-based job scheduling',
      'Single-skill specialisation',
      'Non-digital equipment operation',
      'Low-complexity routine maintenance',
    ],
    pathways: [
      {
        level: 'Apprentice (0-2 years)',
        roles: 'Trade apprentice, junior technician',
        skills: 'Trade fundamentals, digital tool basics, safety, communication, learning skills',
      },
      {
        level: 'Qualified (2-5 years)',
        roles: 'Qualified tradesperson, service technician, specialist',
        skills: 'Trade mastery, digital diagnostics, remote support, problem-solving, customer interaction',
      },
      {
        level: 'Advanced (5+ years)',
        roles: 'Master technician, team lead, service manager, trainer',
        skills: 'System design, emerging technologies, team leadership, continuous learning, innovation',
      },
    ],
  },
}

export default function SkillsPage() {
  const [selected, setSelected] = useState<Sector>('ICT')

  const data = skillData[selected]

  return (
    <main style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Skills & Pathways Explorer</h1>
        <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '16px' }}>
          Explore emerging skills, declining roles, and progression pathways by sector
        </p>

        {/* Sector tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
          marginBottom: '2rem',
        }}>
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelected(sector)}
              style={{
                padding: '0.75rem',
                backgroundColor: selected === sector ? 'rgba(29, 78, 216, 0.08)' : 'transparent',
                border: selected === sector ? '2px solid rgb(29, 78, 216)' : '1px solid #dbeafe',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: selected === sector ? 500 : 400,
                color: selected === sector ? 'rgb(29, 78, 216)' : '#0f172a',
                transition: 'all 0.2s',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => {
                if (selected !== sector) {
                  e.currentTarget.style.backgroundColor = '#eff6ff'
                  e.currentTarget.style.borderColor = '#93c5fd'
                }
              }}
              onMouseLeave={(e) => {
                if (selected !== sector) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = '#dbeafe'
                }
              }}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Emerging and Declining */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            backgroundColor: '#eff6ff',
            border: '1px solid #dbeafe',
            borderRadius: '8px',
            padding: '1.5rem',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '1rem',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                backgroundColor: 'rgb(37, 99, 235)',
                borderRadius: '50%',
              }}></span>
              Emerging skills
            </h3>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
              {data.emerging.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: '0.75rem',
                    paddingLeft: '1rem',
                    position: 'relative',
                    fontSize: '14px',
                    color: '#0f172a',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, color: 'rgb(37, 99, 235)' }}>
                    •
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            backgroundColor: '#eff6ff',
            border: '1px solid #dbeafe',
            borderRadius: '8px',
            padding: '1.5rem',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '1rem',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                backgroundColor: 'rgb(220, 38, 38)',
                borderRadius: '50%',
              }}></span>
              Declining or pressured
            </h3>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
              {data.declining.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: '0.75rem',
                    paddingLeft: '1rem',
                    position: 'relative',
                    fontSize: '14px',
                    color: '#0f172a',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, color: 'rgb(220, 38, 38)' }}>
                    •
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progression pathways */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Progression pathways</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {data.pathways.map((pathway, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#eff6ff',
                  border: '1px solid #dbeafe',
                  borderRadius: '8px',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '15px', color: '#0f172a', marginBottom: '1rem' }}>
                  {pathway.level}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '12px', color: '#475569', marginBottom: '0.25rem', fontWeight: 500 }}>
                    Typical roles
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#0f172a' }}>
                    {pathway.roles}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#475569', marginBottom: '0.25rem', fontWeight: 500 }}>
                    Key skills to develop
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#0f172a' }}>
                    {pathway.skills}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No-regret investments */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #dbeafe',
          borderRadius: '8px',
          padding: '2rem',
        }}>
          <h2 style={{ marginBottom: '1rem' }}>No-regret investments</h2>
          <p style={{ fontSize: '14px', color: '#475569', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            These capabilities remain valuable across ALL scenarios. Prioritise these first.
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyle: 'none' }}>
            {[
              'Foundational digital work readiness',
              'AI literacy and understanding AI outputs',
              'Human-AI collaboration and judgement',
              'Adaptive learning and continuous upskilling',
              'Supervisory and team leadership capability',
              'Problem-solving, critical thinking, communication',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: '0.75rem',
                  paddingLeft: '1rem',
                  position: 'relative',
                  fontSize: '14px',
                  color: '#0f172a',
                }}
              >
                <span style={{ position: 'absolute', left: 0 }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
