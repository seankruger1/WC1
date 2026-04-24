import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'WC Scenarios Explorer | Digital Skills Planning Tool',
  description: 'Interactive scenario mapping and skills planning for Western Cape digital economy',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', backgroundColor: '#f7fbff' }}>
          <nav style={{
            background: 'linear-gradient(90deg, #0b1f3a 0%, #123d73 62%, #1d4ed8 100%)',
            borderBottom: '4px solid #dc2626',
            padding: '1.25rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 12px 30px rgba(15, 42, 79, 0.18)',
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/" style={{
                  color: '#ffffff',
                  fontSize: '19px',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                }}>
                  WC <span style={{ color: '#fca5a5' }}>Scenarios</span>
                </a>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <a href="/" className="nav-link">
                    Home
                  </a>
                  <a href="/scenarios" className="nav-link">
                    Scenarios
                  </a>
                  <a href="/interventions" className="nav-link">
                    Interventions
                  </a>
                  <a href="/skills" className="nav-link">
                    Skills
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {children}

          <footer style={{
            background: '#ffffff',
            borderTop: '1px solid #dbeafe',
            padding: '2rem',
            marginTop: '4rem',
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ color: '#0f2a4f', fontSize: '13px', fontWeight: 700, margin: 0 }}>
                Western Cape Digital Skills Mapping | Phase 3 Foresight Report
              </p>
              <p style={{ color: '#475569', fontSize: '12px', margin: '0.5rem 0 0' }}>
                Interactive planning tool for scenario exploration and intervention design
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
