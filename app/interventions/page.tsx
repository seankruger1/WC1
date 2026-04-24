'use client'

import { useState } from 'react'

type Step = 'sector' | 'readiness' | 'exposure' | 'result'
type Sector = 'ICT' | 'BPO' | 'Manufacturing' | 'Tourism' | 'Trades'
type Readiness = 'low' | 'moderate' | 'high'
type Exposure = 'medium' | 'high'
type RecommendationKey = `${Readiness}_${Exposure}`

type Recommendation = {
  focus: string
  blocker: string
  immediate: string[]
  medium_term: string[]
  rationale: string
}

const sectorOptions: Sector[] = ['ICT', 'BPO', 'Manufacturing', 'Tourism', 'Trades']

const readinessOptions: { value: Readiness; label: string; desc: string }[] = [
  { value: 'low', label: 'Low', desc: 'Weak digital base, significant gaps' },
  { value: 'moderate', label: 'Moderate', desc: 'Some capability, uneven readiness' },
  { value: 'high', label: 'High', desc: 'Strong foundation, clear gaps' },
]

const exposureOptions: { value: Exposure; label: string; desc: string }[] = [
  { value: 'medium', label: 'Medium', desc: 'Gradual change, manageable pace' },
  { value: 'high', label: 'High', desc: 'Rapid change, urgent pressure' },
]

const interventions: Record<Sector, Record<RecommendationKey, Recommendation>> = {
  ICT: {
    low_medium: {
      focus: 'Build foundational capability base',
      blocker: 'Thin entry and mid-level pipeline depth',
      immediate: [
        'Expand cloud foundation training (AWS, Azure, GCP certifications)',
        'Build junior developer pathways paired with AI integration modules',
        'Create supervised apprenticeship models linking bootcamps to real projects',
      ],
      medium_term: [
        'Develop cyber security and data engineering progression pathways',
        'Partner with employers on work-integrated learning',
        'Establish AI governance and responsible AI literacy for non-specialists',
      ],
      rationale: 'ICT has high exposure and near-term acceleration potential. The constraint is pipeline depth. Focus on making entry viable while building capability progression.',
    },
    low_high: {
      focus: 'Urgent: Pipeline expansion with quality gates',
      blocker: 'Risk of talent siege if readiness doesn\'t match exposure',
      immediate: [
        'Accelerate cloud engineering and AI integration training (capacity urgency)',
        'Implement employer-co-designed curricula to ensure relevance',
        'Fast-track cyber security foundational skills to address immediate gaps',
      ],
      medium_term: [
        'Build AI specialisation pathways (MLOps, model evaluation, AI governance)',
        'Create leadership and architecture development programmes',
        'Establish retention strategies to prevent brain drain to global opportunities',
      ],
      rationale: 'High exposure + low readiness = risk. Act quickly on volume and quality. The constraint is speed and relevance of capability building.',
    },
    moderate_medium: {
      focus: 'Strengthen progression and specialisation',
      blocker: 'Thin entry and mid-level pipeline depth',
      immediate: [
        'Deepen cloud, cyber, data engineering capability at mid-levels',
        'Build AI integration and governance skills for experienced developers',
        'Create specialist pathways in emerging areas (AI, security, data)',
      ],
      medium_term: [
        'Establish learning communities and peer-mentoring for continuous capability',
        'Develop product and systems thinking alongside technical depth',
        'Link specialist development to industry certification standards',
      ],
      rationale: 'Moderate readiness means you have a base. Use it. Build upward into emerging specialisations where global demand is highest.',
    },
    moderate_high: {
      focus: 'Parallel track: expand volume AND deepen specialty',
      blocker: 'Need both pipeline breadth and capability depth simultaneously',
      immediate: [
        'Scale entry-level cloud and AI literacy training (volume)',
        'Accelerate mid-to-senior progression in data, cyber, AI (specialty)',
        'Create fast-track pathways for existing workers with foundation capability',
      ],
      medium_term: [
        'Establish AI integration competency centres tied to real projects',
        'Build leadership capability in technical teams',
        'Create international visibility for senior WC talent (retention through growth)',
      ],
      rationale: 'High exposure + moderate readiness means opportunity with urgency. You need to scale breadth (entry) while deepening specialty (mid/senior). Parallel tracks.',
    },
    high_medium: {
      focus: 'Leverage strength: move into specialisation and leadership',
      blocker: 'Thin entry and mid-level pipeline depth (but you have a good base)',
      immediate: [
        'Deepen AI, data architecture, and governance capability (leverage strength)',
        'Build product thinking and systems design for technical teams',
        'Create supervisor and technical leadership pathways',
      ],
      medium_term: [
        'Develop thought leadership and community roles (position WC as hub)',
        'Build research and innovation partnerships with universities and tech firms',
        'Create executive and strategic capability development',
      ],
      rationale: 'You\'re strong. Use it. Move from execution into architecture and leadership. Position as a capability centre, not just a production hub.',
    },
    high_high: {
      focus: 'Sustain leadership: specialise and internationalise',
      blocker: 'Risk of complacency if you assume pace remains steady',
      immediate: [
        'Invest in frontier capabilities (agentic AI, advanced data science, quantum-ready)',
        'Build technical leadership and mentoring infrastructure',
        'Create specialised pathways for architecture and governance roles',
      ],
      medium_term: [
        'Establish research and innovation hubs tied to industry problems',
        'Develop reputation and thought leadership in AI and data domains',
        'Create international partnerships and talent attraction initiatives',
      ],
      rationale: 'You\'re positioned as a leader. Maintain that through continuous evolution into emerging domains and by creating a learning and innovation culture.',
    },
  },
  BPO: {
    low_medium: {
      focus: 'Transform training away from legacy service model',
      blocker: 'Entry-level workforce still trained for legacy service models',
      immediate: [
        'Redesign entry-level training: shift from scripted-call-handling to AI-supported customer operations',
        'Build CRM, workflow automation, and platform fluency into foundation curriculum',
        'Create quality assurance and escalation judgment skills training',
      ],
      medium_term: [
        'Develop supervisor and team-lead capability for AI-enabled service management',
        'Build analytics and customer intelligence skills for service design roles',
        'Establish privacy, compliance, and ethical decision-making training',
      ],
      rationale: 'BPO is near-term acceleration with high exposure. The blocker is that entry-level training is outdated. Redesign entry to prepare for the actual work.',
    },
    low_high: {
      focus: 'Urgent pivot: training redesign + capability conversion',
      blocker: 'Displacement risk if training doesn\'t catch up to exposure',
      immediate: [
        'Immediately pivot entry-level curriculum to AI-supported operations, not voice transaction handling',
        'Partner with BPO employers on rapid curriculum redesign and validation',
        'Accelerate training in workflow tools, CRM, QA, and escalation judgment',
      ],
      medium_term: [
        'Build automation design and bot supervision capability',
        'Develop advanced service design and analytics skills',
        'Create progression pathways from operational roles into higher-value design and management',
      ],
      rationale: 'High exposure + low readiness = displacement risk. Act on training redesign immediately. The entry-level workforce cannot transition unless training changes.',
    },
    moderate_medium: {
      focus: 'Strengthen progression from transaction to operations',
      blocker: 'Entry-level workforce still trained for legacy service models',
      immediate: [
        'Build platform fluency and digital operations capability into supervisor/team-lead roles',
        'Create AI-supported customer operations training modules',
        'Develop analytics and business intelligence skills for operational staff',
      ],
      medium_term: [
        'Establish progression pathways from transaction roles into platform operations and automation',
        'Build customer experience design and personalisation capability',
        'Create learning culture where workers adapt to tool changes continuously',
      ],
      rationale: 'You have a moderate base. Use it to move workers upward into operations and analytics roles. The constraint is progression, not volume.',
    },
    moderate_high: {
      focus: 'Parallel: scale volume AND build management capability',
      blocker: 'Need entry-level pipeline expansion AND manager/designer capability',
      immediate: [
        'Scale entry-level training in AI-supported customer operations (volume)',
        'Accelerate supervisor and team-lead development in automation and platform management (quality)',
        'Build analytics and service design skills in mid-level roles',
      ],
      medium_term: [
        'Create BPaaS architecture and intelligent workflow design capability',
        'Develop leadership in AI-enabled service delivery',
        'Build innovation and process improvement competency centres',
      ],
      rationale: 'Moderate readiness + high exposure = growth opportunity with urgency. Scale entry, but simultaneously build the supervisory and design capability to lead the transformation.',
    },
    high_medium: {
      focus: 'Leverage strength: move into BPaaS and automation design',
      blocker: 'Entry-level workforce still trained for legacy service models (but you have capability foundation)',
      immediate: [
        'Develop automation design and bot supervision from existing experienced staff',
        'Build service architecture and platform capability (leverage your strongest people)',
        'Create designer and analyst pathways from operational roles',
      ],
      medium_term: [
        'Build thought leadership in BPaaS delivery models',
        'Create specialised centres for automation design and workflow optimisation',
        'Develop executive capability in digital service transformation',
      ],
      rationale: 'You\'re strong in operations. Use it. Move into design, automation, and architecture. Create centres of excellence that position you as a high-value provider.',
    },
    high_high: {
      focus: 'Sustain leadership: innovate in service delivery models',
      blocker: 'Risk of complacency or being outpaced by emerging global competitors',
      immediate: [
        'Invest in frontier BPaaS capabilities: agentic AI, autonomous workflows, outcome-based pricing',
        'Build executive and strategic leadership capability',
        'Create research and innovation partnerships with technology firms',
      ],
      medium_term: [
        'Establish specialised centres in emerging service domains (AI consulting, data analytics, automation)',
        'Develop thought leadership and industry visibility',
        'Create international talent attraction and retention strategies',
      ],
      rationale: 'You\'re a leader. Maintain that by staying ahead of capability evolution. Invest in frontier areas and create a learning and innovation culture.',
    },
  },
  Manufacturing: {
    low_medium: {
      focus: 'Build applied digital capability in shop-floor operations',
      blocker: 'Many firms are too weakly digitised to absorb AI well',
      immediate: [
        'Target predictive maintenance training: diagnostics, sensor data, system monitoring',
        'Build production data literacy and interpretation capability',
        'Create digital quality control and process optimisation skills',
      ],
      medium_term: [
        'Develop supervisor digital fluency: dashboards, KPIs, data-driven decision-making',
        'Build ERP and production systems capability for planners and operators',
        'Create problem-solving skills using data and analytics',
      ],
      rationale: 'Manufacturing is conditional transition with low-moderate readiness. The blocker is weak applied capability in diagnostics and data. Start there.',
    },
    low_high: {
      focus: 'Urgent: targeted plant-level digitisation capability building',
      blocker: 'Many firms cannot operate or troubleshoot new systems',
      immediate: [
        'Accelerate predictive maintenance and industrial diagnostics training (most urgent)',
        'Build production data and ERP system capability for core roles',
        'Create digital troubleshooting and maintenance skills in technician pathways',
      ],
      medium_term: [
        'Develop supervisor capability in digital production management',
        'Build quality control and process optimisation using data',
        'Create upskilling pathways for workers in firms making digital investments',
      ],
      rationale: 'High exposure + low readiness = risk that firms automate without workers being ready. Focus on immediate capability for newly digitised plants.',
    },
    moderate_medium: {
      focus: 'Deepen capability in digitally-enabling firms, extend to lagging subsectors',
      blocker: 'Many firms are too weakly digitised to absorb AI well',
      immediate: [
        'Strengthen predictive maintenance and industrial diagnostics in advanced firms',
        'Build applied digital operations capability in lagging firms (food/beverage, tooling)',
        'Create supervisor digital fluency and data-driven decision-making',
      ],
      medium_term: [
        'Establish sectoral learning communities: share digitisation lessons across subsectors',
        'Develop advanced roles in production data and digital twins',
        'Create safety and quality capability in newly digitised processes',
      ],
      rationale: 'Moderate readiness means you have some advanced firms and some lagging ones. Deepen the advanced, uplift the lagging through targeted, sectoral approaches.',
    },
    moderate_high: {
      focus: 'Parallel: uplift lagging firms AND develop advanced capability',
      blocker: 'Dual economy widening between digitally mature and lagging firms',
      immediate: [
        'Scale basic digital operations capability across all firms (data literacy, systems use)',
        'Accelerate predictive maintenance and diagnostics in advanced firms (specialty)',
        'Create supervisor digital fluency as a priority across the sector',
      ],
      medium_term: [
        'Develop advanced roles in production analytics, digital twins, and IoT',
        'Build learning pathways so workers can move between firms and up the value chain',
        'Establish innovation and improvement competency centres in strong firms',
      ],
      rationale: 'Moderate readiness + high exposure = opportunity to narrow the dual economy. Scale broad capability (uplift lagging), deepen specialty (advanced).',
    },
    high_medium: {
      focus: 'Leverage strength: move into advanced production systems and green-digital',
      blocker: 'Many firms are too weakly digitised to absorb AI well (but you have capability)',
      immediate: [
        'Build advanced roles in digital twins, IoT, and production analytics from your strong base',
        'Develop green-digital capability: energy monitoring, efficiency optimisation, emissions data',
        'Create research partnerships with advanced manufacturing centres',
      ],
      medium_term: [
        'Establish centres of excellence in predictive maintenance and autonomous systems',
        'Build executive capability in digital transformation leadership',
        'Create thought leadership and knowledge-sharing roles',
      ],
      rationale: 'You\'re strong. Use it. Move into advanced domains (digital twins, green-digital, innovation). Position your sector as a capability leader.',
    },
    high_high: {
      focus: 'Sustain leadership: frontier manufacturing and green-digital integration',
      blocker: 'Risk of complacency or being outpaced by global competitors',
      immediate: [
        'Invest in frontier capabilities: autonomous production systems, AI-driven optimisation, digital twins',
        'Build green-digital leadership: renewable energy integration, circular economy, emissions reduction',
        'Create research and innovation partnerships with technology and sustainability leaders',
      ],
      medium_term: [
        'Establish specialised centres in Industry 4.0 and green-digital manufacturing',
        'Develop executive and strategic capability',
        'Create international visibility for advanced manufacturing practices',
      ],
      rationale: 'You\'re a leader in capability. Maintain that by investing in frontier areas and creating integration between digital and green-digital systems.',
    },
  },
  Tourism: {
    low_medium: {
      focus: 'Build practical SMME digital fluency, not theory',
      blocker: 'Weak SMME digital fluency',
      immediate: [
        'Focus on immediate business tools: booking systems, CRM, basic analytics',
        'Build AI-assisted marketing and content capability (e.g., review analysis, content generation)',
        'Create practical revenue optimisation and yield management skills',
      ],
      medium_term: [
        'Develop omnichannel marketing and customer engagement capability',
        'Build data literacy for local, personalised, and experience-based marketing',
        'Create customer experience design skills',
      ],
      rationale: 'Tourism has medium exposure and low-moderate readiness. The blocker is SMME digital fluency. Focus on practical, immediately useful tools and skills.',
    },
    low_high: {
      focus: 'Urgent: SMME digital capability to prevent competitive exclusion',
      blocker: 'Digitally excluded operators at risk of market share loss',
      immediate: [
        'Fast-track booking systems and CRM implementation support for SMEs',
        'Build AI-assisted marketing skills (content, review management, personalisation)',
        'Create practical yield and revenue management capability',
      ],
      medium_term: [
        'Develop customer analytics and experience design for local differentiation',
        'Build omnichannel engagement capability',
        'Create learning support so SMEs can adopt and adapt tools continuously',
      ],
      rationale: 'High exposure + low readiness = risk of SMME exclusion. Act urgently on practical tool adoption and AI-assisted capabilities.',
    },
    moderate_medium: {
      focus: 'Lift SMME capability from basic to strategic use of tools',
      blocker: 'Weak SMME digital fluency',
      immediate: [
        'Move SMEs from basic digital awareness to strategic use: yield management, customer analytics',
        'Build AI-assisted marketing and personalisation skills',
        'Create experience design and human-centred service capability',
      ],
      medium_term: [
        'Develop data-informed decision-making for marketing, pricing, and product design',
        'Build omnichannel and digital customer experience design',
        'Create continuous learning and tool adaptation capability',
      ],
      rationale: 'Moderate readiness means you have some capability foundation. Use it to move SMEs from adoption to strategic use of tools.',
    },
    moderate_high: {
      focus: 'Parallel: scale tool adoption AND deepen strategic capability',
      blocker: 'Need both SMME adoption breadth and strategic depth',
      immediate: [
        'Scale basic digital tool adoption and AI-assisted capabilities across SMEs (breadth)',
        'Accelerate strategic use (yield management, customer analytics) in advanced operators (depth)',
        'Build experience design and human-centred differentiation capability',
      ],
      medium_term: [
        'Create SMME learning communities for continuous tool and skill adaptation',
        'Develop advanced analytics and personalisation capabilities',
        'Build reputation and positioning skills for local, personalised, and sustainability-linked experiences',
      ],
      rationale: 'Moderate readiness + high exposure = growth opportunity. Scale adoption broadly, deepen strategic capability in leading SMEs.',
    },
    high_medium: {
      focus: 'Leverage strength: move into experience design and sustainability positioning',
      blocker: 'Weak SMME digital fluency (but you have capability foundation)',
      immediate: [
        'Build advanced experience design and personalisation capability (leverage your strength)',
        'Develop sustainability and green-tourism positioning and marketing',
        'Create thought leadership in cultural, eco-friendly, and technology-enabled experiences',
      ],
      medium_term: [
        'Establish innovation hubs for tourism experience design and sustainability integration',
        'Build executive capability in digital transformation and brand positioning',
        'Create community and partnership models for SMME capability development',
      ],
      rationale: 'You\'re strong in capability. Use it. Move into experience design, sustainability, and thought leadership. Help SMEs uplift through community learning.',
    },
    high_high: {
      focus: 'Sustain leadership: integrate digital, sustainability, and experience innovation',
      blocker: 'Risk of complacency or being outpaced by global tourism competitors',
      immediate: [
        'Invest in frontier tourism innovations: AI-driven personalisation, immersive experiences, sustainability integration',
        'Build executive and strategic capability in digital tourism',
        'Create research and innovation partnerships with tourism and technology leaders',
      ],
      medium_term: [
        'Establish specialised centres in sustainable and digitally-enabled tourism experiences',
        'Develop thought leadership in African, cultural, and eco-tourism innovation',
        'Create international visibility for Western Cape tourism innovation',
      ],
      rationale: 'You\'re a leader. Maintain that by staying ahead in experience innovation and sustainability integration. Position WC as a global tourism innovation hub.',
    },
  },
  Trades: {
    low_medium: {
      focus: 'Embed digital diagnostics and smart tools into existing trade pathways',
      blocker: 'Training equipment and workshop practice lag digital reality',
      immediate: [
        'Integrate digital diagnostics and fault-finding into electrical, mechanical, and service trades',
        'Build smart tool and mobile system fluency into trade curricula',
        'Create remote support and troubleshooting capability',
      ],
      medium_term: [
        'Develop predictive maintenance and condition monitoring skills',
        'Build data logging and equipment performance tracking capability',
        'Create job management and scheduling system fluency',
      ],
      rationale: 'Trades have medium exposure and low readiness. The blocker is that training lags practice. Embed digital tools into real trade work, not as separate modules.',
    },
    low_high: {
      focus: 'Urgent: modernise workshop practice and field-service training',
      blocker: 'Training equipment and practice lags digital reality',
      immediate: [
        'Urgently embed digital diagnostics into trade curricula (electrical, mechanical, HVAC)',
        'Modernise workshop equipment to include smart systems and digital tools',
        'Build remote support and AI-assisted troubleshooting capability',
      ],
      medium_term: [
        'Develop predictive maintenance and IoT sensor capability',
        'Create mobile field-service system training and data logging skills',
        'Build safety judgment and decision-making in digital-enabled environments',
      ],
      rationale: 'High exposure + low readiness = risk of skills obsolescence. Act urgently on workshop modernisation and embedded digital training.',
    },
    moderate_medium: {
      focus: 'Strengthen digital integration in advanced trades, extend to lagging areas',
      blocker: 'Training equipment and workshop practice lag digital reality',
      immediate: [
        'Deepen digital diagnostics and smart tool capability in advanced trades',
        'Build foundational digital fluency across all trades pathways',
        'Create supervisor and team-lead capability in digital-enabled operations',
      ],
      medium_term: [
        'Develop specialised pathways in emerging areas (renewable energy, electric vehicles, smart building systems)',
        'Build learning communities across trades to share tool and technique innovation',
        'Create continuous learning capability for tool and practice adaptation',
      ],
      rationale: 'Moderate readiness means you have some strong areas. Deepen those, uplift the lagging ones through targeted, trade-specific approaches.',
    },
    moderate_high: {
      focus: 'Parallel: scale foundational digital AND specialise in emerging areas',
      blocker: 'Need foundational digital breadth AND emerging specialisation',
      immediate: [
        'Scale foundational digital diagnostics and tool fluency across all trades (breadth)',
        'Accelerate emerging areas: renewable energy, EV systems, smart building systems (specialty)',
        'Build supervisor digital fluency and remote-support capability',
      ],
      medium_term: [
        'Develop advanced roles in predictive maintenance and IoT-enabled service',
        'Create learning pathways between traditional and emerging trade areas',
        'Build innovation in tool design and service delivery models',
      ],
      rationale: 'Moderate readiness + high exposure = opportunity to modernise and specialise. Scale foundation skills, invest in emerging areas.',
    },
    high_medium: {
      focus: 'Leverage strength: lead in emerging trades and green-tech integration',
      blocker: 'Training equipment and workshop practice lag digital reality (but you have capability)',
      immediate: [
        'Build leadership in emerging trade areas: renewable energy, electric vehicles, smart systems (leverage strength)',
        'Create research partnerships with technology and green-tech providers',
        'Establish centres of excellence in digital-enabled trade practice',
      ],
      medium_term: [
        'Develop thought leadership in future of skilled trades',
        'Build executive capability in trade sector digital transformation',
        'Create community and mentoring models for capability development across the sector',
      ],
      rationale: 'You\'re strong. Use it. Lead in emerging areas (renewables, EVs, smart systems) and help the broader sector modernise.',
    },
    high_high: {
      focus: 'Sustain leadership: integrate green-tech, AI diagnostics, and autonomous systems',
      blocker: 'Risk of complacency or being outpaced by global technology evolution',
      immediate: [
        'Invest in frontier trade capabilities: AI-driven diagnostics, autonomous systems, renewable energy specialisation',
        'Build executive and strategic capability in digital trades',
        'Create research and innovation partnerships with technology and green-energy leaders',
      ],
      medium_term: [
        'Establish specialised centres in emerging trades and green-tech integration',
        'Develop thought leadership in skilled trades innovation',
        'Create international visibility for Western Cape trade sector innovation',
      ],
      rationale: 'You\'re a leader. Maintain that by staying ahead in emerging technologies and green integration. Position skilled trades as future-ready and innovation-led.',
    },
  },
}

export default function InterventionsPage() {
  const [step, setStep] = useState<Step>('sector')
  const [sector, setSector] = useState<Sector | null>(null)
  const [readiness, setReadiness] = useState<Readiness | null>(null)
  const [exposure, setExposure] = useState<Exposure | null>(null)

  const handleSectorSelect = (s: Sector) => {
    setSector(s)
    setStep('readiness')
  }

  const handleReadinessSelect = (r: Readiness) => {
    setReadiness(r)
    setStep('exposure')
  }

  const handleExposureSelect = (e: Exposure) => {
    setExposure(e)
    setStep('result')
  }

  const getRecommendation = (): Recommendation | null => {
    if (!sector || !readiness || !exposure) return null

    const key: RecommendationKey = `${readiness}_${exposure}`
    return interventions[sector][key]
  }

  const recommendation = step === 'result' ? getRecommendation() : null

  return (
    <main style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Intervention Pathway Finder</h1>
        <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '16px' }}>
          Answer three questions to find your sector-specific intervention roadmap
        </p>

        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #dbeafe',
          borderRadius: '8px',
          padding: '2rem',
        }}>
          {/* STEP 1: Sector selection */}
          {step === 'sector' && (
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Which sector?</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}>
                {sectorOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSectorSelect(s)}
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      border: '1px solid #93c5fd',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.borderColor = '#64748b'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.borderColor = '#93c5fd'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Readiness selection */}
          {step === 'readiness' && (
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Current readiness in {sector ?? 'this sector'}?</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '1.5rem',
              }}>
                {readinessOptions.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => handleReadinessSelect(r.value)}
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      border: '1px solid #93c5fd',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.borderColor = '#64748b'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.borderColor = '#93c5fd'
                    }}
                  >
                    <div style={{ fontWeight: 500, fontSize: '15px', marginBottom: '4px' }}>
                      {r.label}
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569' }}>
                      {r.desc}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep('sector')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #93c5fd',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  color: '#475569',
                }}
              >
                Back
              </button>
            </div>
          )}

          {/* STEP 3: Exposure selection */}
          {step === 'exposure' && (
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>AI exposure level?</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '1.5rem',
              }}>
                {exposureOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleExposureSelect(option.value)}
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      border: '1px solid #93c5fd',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.borderColor = '#64748b'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.borderColor = '#93c5fd'
                    }}
                  >
                    <div style={{ fontWeight: 500, fontSize: '15px', marginBottom: '4px' }}>
                      {option.label}
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569' }}>
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep('readiness')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #93c5fd',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  color: '#475569',
                }}
              >
                Back
              </button>
            </div>
          )}

          {/* RESULT */}
          {step === 'result' && recommendation && (
            <div>
              <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
                {sector ?? 'Selected sector'}: {recommendation.focus}
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', marginBottom: '1.5rem' }}>
                <strong>Main blocker:</strong> {recommendation.blocker}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Next 6 months
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyle: 'none' }}>
                  {recommendation.immediate.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative', fontSize: '14px', color: '#0f172a', lineHeight: 1.5 }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  6-18 months
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyle: 'none' }}>
                  {recommendation.medium_term.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative', fontSize: '14px', color: '#0f172a', lineHeight: 1.5 }}>
                      <span style={{ position: 'absolute', left: 0 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #dbeafe',
                borderRadius: '6px',
                padding: '1rem',
                marginBottom: '1.5rem',
              }}>
                <p style={{ fontSize: '13px', color: '#0f172a', margin: 0, lineHeight: 1.6 }}>
                  <strong>Rationale:</strong> {recommendation.rationale}
                </p>
              </div>

              <button
                onClick={() => { setStep('sector'); setSector(null); setReadiness(null); setExposure(null); }}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  border: '1px solid #93c5fd',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  color: '#475569',
                }}
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
