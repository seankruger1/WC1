'use client'

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '4rem 2rem',
        borderBottom: '1px solid #dbeafe',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '1rem' }}>
            Digital Skills Planning for the Western Cape
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#475569',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Interactive tools to explore future scenarios, design interventions, and map skills pathways. Based on Phase 3 of the SkillsBoost Refresh foresight analysis.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            <div style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '8px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgb(29, 78, 216)', marginBottom: '0.5rem' }}>
                SCENARIOS
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 1rem' }}>
                Explore four plausible futures and understand sector impacts
              </p>
              <a href="/scenarios" style={{
                color: 'rgb(29, 78, 216)',
                fontWeight: 500,
                fontSize: '13px',
                transition: 'opacity 0.2s',
              }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                Open →
              </a>
            </div>

            <div style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '8px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgb(220, 38, 38)', marginBottom: '0.5rem' }}>
                INTERVENTIONS
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 1rem' }}>
                Find your sector intervention pathway based on readiness and exposure
              </p>
              <a href="/interventions" style={{
                color: 'rgb(220, 38, 38)',
                fontWeight: 500,
                fontSize: '13px',
                transition: 'opacity 0.2s',
              }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                Open →
              </a>
            </div>

            <div style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #dbeafe',
              borderRadius: '8px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgb(14, 116, 144)', marginBottom: '0.5rem' }}>
                SKILLS & PATHWAYS
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 1rem' }}>
                Discover emerging skills and career progression by sector
              </p>
              <a href="/skills" style={{
                color: 'rgb(14, 116, 144)',
                fontWeight: 500,
                fontSize: '13px',
                transition: 'opacity 0.2s',
              }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                Open →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to use section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '2rem' }}>How to use</h2>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'rgb(29, 78, 216)' }}>1. Explore scenarios</h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                Understand the four plausible futures for the Western Cape economy: Supercharged Cape, The displacement trap, Co-Pilot Province, and Stalled and stratified. See how each sector responds differently in each scenario.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'rgb(220, 38, 38)' }}>2. Design interventions</h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                Answer three questions about your sector, current readiness level, and AI exposure. Get a tailored intervention roadmap with immediate (0-6 months) and medium-term (6-18 months) actions.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'rgb(14, 116, 144)' }}>3. Map skills pathways</h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                Identify emerging skills and declining roles by sector. Explore career progression pathways from entry level to advanced, and understand which capabilities matter across all scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key insights section */}
      <section style={{
        backgroundColor: '#eff6ff',
        padding: '4rem 2rem',
        borderTop: '1px solid #dbeafe',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '2rem' }}>Key insights from Phase 3</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '1rem', color: '#0f172a' }}>
                Capability conversion, not technology adoption
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14px' }}>
                The Western Cape's digital skills challenge is not simple technology adoption. It is capability conversion: whether firms, workers and training providers can turn digital infrastructure, AI tools, data systems and green-transition investment into usable workplace capability.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '1rem', color: '#0f172a' }}>
                Sector readiness varies dramatically
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14px' }}>
                ICT (79/100) and BPO/GBS (72/100) are near-term acceleration. Manufacturing (54/100) faces conditional transition. Tourism (46/100) and technical trades (40/100) face exposure without readiness.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '1rem', color: '#0f172a' }}>
                No-regret investments exist
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14px' }}>
                Across all scenarios: foundational digital work readiness, AI literacy, progression pathways, employer-integrated training, cybersecurity, human-AI collaboration and supervisory capability.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '1rem', color: '#0f172a' }}>
                Human-centred skills remain critical
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '14px' }}>
                AI cannot replicate emotional intelligence, customer engagement, creativity, empathy and trust-building. These skills become even more valuable as routine work automates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: 'rgba(29, 78, 216, 0.05)',
          border: '1px solid rgba(29, 78, 216, 0.1)',
          borderRadius: '8px',
          padding: '3rem 2rem',
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to explore?</h2>
          <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '16px' }}>
            Start with scenarios to understand the possible futures, then design your intervention strategy.
          </p>
          <a href="/scenarios" style={{
            display: 'inline-block',
            backgroundColor: 'rgb(29, 78, 216)',
            color: '#ffffff',
            padding: '0.75rem 2rem',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '14px',
            transition: 'opacity 0.2s',
          }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Start exploring
          </a>
        </div>
      </section>
    </main>
  )
}
