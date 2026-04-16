import { useState, useEffect } from 'react'
import { AGENT } from '../data/properties'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      padding: '1.25rem 3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.4s',
      background: scrolled ? 'rgba(26,58,42,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,164,114,0.15)' : 'none',
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 500, color: '#fff' }}>
        Kenya Diaspora <span style={{ color: '#c9a472' }}>Homes</span>
      </div>

      {/* Desktop */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {[['gallery','Gallery'],['pricing','Pricing'],['plans','Payment plans'],['lifestyle','Life at Laika']].map(([id, label]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.08em',
            textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}>{label}</button>
        ))}
        <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer" style={{
          border: '1px solid #c9a472', color: '#c9a472', padding: '0.55rem 1.4rem',
          fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>WhatsApp us</a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: '#1a3a2a', zIndex: 300,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#fff', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
          {[['gallery','Gallery'],['pricing','Pricing'],['plans','Payment plans'],['lifestyle','Life at Laika'],['capture','Get the guide']].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              color: '#fff', fontSize: '1.3rem', fontFamily: "'Playfair Display', serif",
              background: 'none', border: 'none', cursor: 'pointer',
            }}>{label}</button>
          ))}
        </div>
      )}
    </nav>
  )
}