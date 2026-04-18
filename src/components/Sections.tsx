import React, { useState, useRef } from 'react'
import { KEZA_LAIKA, AGENT } from '../data/properties'

export function StatsBar() {
  const stats = [
    { num: '256', label: 'Total units' },
    { num: '3', label: 'Towers · 10 floors' },
    { num: '10%', label: 'Secures your unit' },
    { num: '5yr', label: 'Flexible payment plan' },
  ]
  return (
    <div style={{ background: '#1a3a2a', padding: '2rem 3rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0', borderTop: '1px solid rgba(201,164,114,0.12)' }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'center', padding: '0 2.5rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', minWidth: '140px' }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.2rem', color: '#c9a472', display: 'block', lineHeight: 1 }}>{s.num}</span>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.4rem', display: 'block' }}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const featured = [
    KEZA_LAIKA.images.exterior[0],
    KEZA_LAIKA.images.interior[0],
    KEZA_LAIKA.images.interior[1],
    KEZA_LAIKA.images.interior[2],
    KEZA_LAIKA.images.aerial[0],
  ]
  return (
    <section style={{ background: '#fff', padding: '7rem 3rem' }} id="gallery">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">KEZA LAIKA · Ruaka</span></div>
        <h2 className="section-title">See what you're<br />investing in — <em>properly.</em></h2>
      </div>
      <div style={{ maxWidth: '1100px', margin: '3rem auto 0', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '300px 260px', gap: '12px' }}>
        {featured.map((img, i) => (
          <div key={i} onClick={() => setLightbox(img.src)} style={{ gridRow: i === 0 ? '1 / 3' : 'auto', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
            <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(to top, rgba(26,58,42,0.7), transparent)' }}>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{img.caption}</span>
            </div>
          </div>
        ))}
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: '2rem' }}>
          <img src={lightbox} alt="Property view" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} />
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#fff', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
        </div>
      )}
    </section>
  )
}

export function Feature() {
  return (
    <section style={{ background: '#f7f3ed', padding: '7rem 3rem' }} id="about">
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', height: '480px', overflow: 'hidden' }}>
            <img src={KEZA_LAIKA.images.exterior[1].src} alt={KEZA_LAIKA.images.exterior[1].alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', background: '#1a3a2a', padding: '1.5rem 2rem', width: '200px' }}>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', color: '#c9a472', display: 'block', lineHeight: 1 }}>2026</span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem', display: 'block' }}>Estimated handover</span>
          </div>
        </div>
        <div style={{ paddingRight: '1rem' }}>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">The development</span></div>
          <h2 className="section-title">They kept the mango tree.<br /><em>Then built a treehouse in it.</em></h2>
          <blockquote style={{ borderLeft: '2px solid #c9a472', paddingLeft: '1.5rem', margin: '2rem 0' }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#2d5c3f', lineHeight: 1.7 }}>
              "Keza Laika is what happens when a developer actually cares about what they're building — not just what it sells for."
            </p>
          </blockquote>
          <p className="section-body" style={{ marginBottom: '2rem' }}>{KEZA_LAIKA.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            {KEZA_LAIKA.amenities.map(a => <span key={a} className="amenity-tag">{a}</span>)}
          </div>
          <button className="btn-primary" onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
            Request the brochure →
          </button>
        </div>
      </div>
    </section>
  )
}

export function TrustVideo() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <section style={{ background: '#1a3a2a', padding: '7rem 3rem' }} id="trust">
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <div>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Why trust us</span></div>
          <h2 className="section-title" style={{ color: '#fff' }}>The developer has<br /><em style={{ color: '#c9a472' }}>delivered before.</em></h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
            The biggest fear for diaspora buyers is developers who take your deposit and disappear. Mi Vida has completed projects — KEZA RIRUTA is done, people are living in it. KEZA LAIKA is the same team, the same standards, now building bigger.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
            Your booking fee is fully refundable before the Sale Agreement is signed. No risk to reserve early — the risk is waiting while prices go up.
          </p>
          <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Ask AK directly →</a>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#0a1a10', aspectRatio: '9/16', maxHeight: '520px' }}>
            <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} controls={playing} playsInline>
              <source src={KEZA_LAIKA.videos.trustVideo.mp4} type="video/mp4" />
            </video>
            {!playing && (
              <div onClick={() => { setPlaying(true); videoRef.current?.play() }} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10,26,16,0.5)', cursor: 'pointer' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(201,164,114,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid #1a3a2a', marginLeft: '4px' }} />
                </div>
              </div>
            )}
          </div>
          <div style={{ position: 'absolute', bottom: '-1rem', left: '-1rem', background: '#c9a472', padding: '0.75rem 1.25rem' }}>
            <span style={{ fontSize: '0.7rem', color: '#1a3a2a', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Mi Vida · Trust & confidence</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const [activeUnit, setActiveUnit] = useState(1)
  return (
    <section style={{ background: '#1c1c1a', padding: '7rem 3rem', position: 'relative', overflow: 'hidden' }} id="pricing">
      <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(201,164,114,0.06)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '3.5rem' }}>
          <div>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Current pricing</span></div>
            <h2 className="section-title" style={{ color: '#fff' }}>Four ways to own<br />a piece of <em style={{ color: '#c9a472' }}>Nairobi.</em></h2>
          </div>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Prices increase KES 25,000 per floor. A limited number of 5-year payment plan units are still available.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {KEZA_LAIKA.units.map((unit, i) => (
            <div key={unit.type} onClick={() => setActiveUnit(i)} style={{ background: activeUnit === i ? 'rgba(201,164,114,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${activeUnit === i ? 'rgba(201,164,114,0.4)' : 'rgba(201,164,114,0.1)'}`, padding: '1.75rem 1.25rem', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.6rem' }}>{unit.label}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: '#fff', marginBottom: '0.35rem' }}>{unit.type}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{unit.sqm} sqm · {unit.sqft} sqft</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: '#c9a472' }}>KES {(unit.priceKES / 1000000).toFixed(1)}M</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.35rem' }}>10% = KES {(unit.priceKES * 0.1 / 1000).toFixed(0)}k to reserve</div>
              <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '1.25rem', padding: '0.6rem', border: '1px solid rgba(201,164,114,0.3)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a472', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#c9a472'; e.currentTarget.style.color = '#1a3a2a' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a472' }}
              >Enquire now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PaymentPlans() {
  return (
    <section style={{ background: '#fff', padding: '7rem 3rem' }} id="plans">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Payment structures</span></div>
        <h2 className="section-title">Own in Nairobi,<br />on a schedule that <em>works for you.</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
          {KEZA_LAIKA.paymentPlans.map(plan => (
            <div key={plan.id} style={{ border: plan.recommended ? '2px solid #c9a472' : '1px solid #ede5d4', padding: '2.5rem 2rem', position: 'relative' }}>
              {plan.recommended && (
                <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: '#c9a472', color: '#1a3a2a', padding: '0.25rem 1rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Most popular for diaspora</div>
              )}
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: '#1a3a2a', marginBottom: '0.25rem' }}>{plan.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#7a7a70', marginBottom: '1.5rem' }}>{plan.tagline}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {plan.steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', color: '#c9a472', lineHeight: 1, minWidth: '48px' }}>{step.pct}</span>
                    <span style={{ fontSize: '0.82rem', color: '#3a3a35', lineHeight: 1.5, paddingTop: '0.2rem' }}>{step.desc}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#7a7a70', fontStyle: 'italic', borderTop: '1px solid #ede5d4', paddingTop: '1rem' }}>{plan.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Lifestyle() {
  return (
    <section style={{ background: '#f7f3ed', padding: '7rem 3rem' }} id="lifestyle">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Life at KEZA LAIKA</span></div>
            <h2 className="section-title">Not just an<br />apartment. A <em>whole life.</em></h2>
          </div>
          <p className="section-body">
            Your parents didn't have this. An apartment complex where the grounds feel like a park, where your children have space to run, where the gym overlooks the canopy and the evenings smell like bougainvillea. This is what you're buying into — not just square footage.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[KEZA_LAIKA.images.interior[4], KEZA_LAIKA.images.exterior[6], KEZA_LAIKA.images.exterior[0]].map((img, i) => (
            <div key={i} style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(to top, rgba(10,25,16,0.6), transparent)' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data as any).toString() })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }
  return (
    <section style={{ background: '#1a3a2a', padding: '6rem 3rem', position: 'relative', overflow: 'hidden' }} id="capture">
      <div style={{ position: 'absolute', borderRadius: '50%', border: '1px solid rgba(201,164,114,0.06)', width: '500px', height: '500px', top: '-200px', right: '-100px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><div className="eyebrow-line" /><span className="eyebrow-text">Free resource</span></div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 400, color: '#fff', lineHeight: 1.2, margin: '0 0 1rem' }}>
          Everything you need to know before buying property in Nairobi from wherever you are.
        </h2>
        <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: '0 0 2.5rem', fontWeight: 300 }}>
          Legal process, ownership structure, how to transfer money, what questions to ask the developer, and what the diaspora gets wrong most often. Free. No spam, ever.
        </p>
        {!submitted ? (
          <form name="lead-capture" method="POST" data-netlify="true" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '420px', margin: '0 auto' }}>
            <input type="hidden" name="form-name" value="lead-capture" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <input className="form-input" type="text" name="firstName" placeholder="Your first name" required />
              <input className="form-input" type="email" name="email" placeholder="Email address" required />
            </div>
            <input className="form-input" type="tel" name="whatsapp" placeholder="WhatsApp number (optional)" />
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.25rem' }}>Send me the guide →</button>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.5rem' }}>POPIA compliant. Unsubscribe anytime.</p>
          </form>
        ) : (
          <div style={{ background: 'rgba(201,164,114,0.1)', border: '1px solid rgba(201,164,114,0.3)', padding: '2rem', maxWidth: '420px', margin: '0 auto' }}>
            <p style={{ color: '#c9a472', fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', marginBottom: '0.5rem' }}>Guide on its way.</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>Check your inbox. Or WhatsApp AK directly: <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#c9a472' }}>+27 767 696 654</a></p>
          </div>
        )}
      </div>
    </section>
  )
}

export function FloorPlans() {
  const floorplans = KEZA_LAIKA.images.floorplans || []
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  if (floorplans.length === 0) return null
  
  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }
  
  const nextImage = () => setCurrentIndex((currentIndex + 1) % floorplans.length)
  const prevImage = () => setCurrentIndex((currentIndex - 1 + floorplans.length) % floorplans.length)
  
  return (
    <>
      <section style={{ padding: '7rem 3rem', background: '#f9f9f9' }} id="floorplans">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: '#333' }}>Floor Plans</h2>
          <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            {floorplans.map((plan, idx) => (
              <button key={idx} onClick={() => openLightbox(idx)} style={{ flex: '0 0 320px', border: 'none', padding: 0, cursor: 'pointer', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img src={plan.src} alt={plan.alt} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <p style={{ padding: '0.875rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: 500, color: '#333', margin: 0 }}>{plan.caption}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      {lightboxOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setLightboxOpen(false)}>
          <button onClick={(e) => { e.stopPropagation(); prevImage() }} style={{ position: 'absolute', left: '2rem', background: 'white', border: 'none', fontSize: '2rem', cursor: 'pointer', width: '50px', height: '50px', borderRadius: '50%' }}>‹</button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={floorplans[currentIndex].src} style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
            <p style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}>{floorplans[currentIndex].caption} ({currentIndex + 1}/{floorplans.length})</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage() }} style={{ position: 'absolute', right: '2rem', background: 'white', border: 'none', fontSize: '2rem', cursor: 'pointer', width: '50px', height: '50px', borderRadius: '50%' }}>›</button>
          <button onClick={() => setLightboxOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'white', border: 'none', fontSize: '2rem', cursor: 'pointer', width: '50px', height: '50px', borderRadius: '50%' }}>×</button>
        </div>
      )}
    </>
  )
}
export function Footer() {
  return (
    <footer style={{ background: '#111410', padding: '3.5rem 3rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: '#fff', marginBottom: '0.75rem' }}>Kenya Diaspora <span style={{ color: '#c9a472' }}>Homes</span></div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '260px', fontWeight: 300 }}>Connecting the Kenyan diaspora worldwide with verified, premium property in Nairobi. Based in South Africa, on the ground in Nairobi. Safely. Simply.</p>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Properties</div>
          {['KEZA LAIKA', '1 Bedroom units', '2 Bedroom units', '3 Bedroom units', 'Penthouse'].map(item => (
            <a key={item} href="#pricing" style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>{item}</a>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Get in touch</div>
          <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>WhatsApp SA: +27 767 696 654</a>
          <a href={AGENT.whatsappKEUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>WhatsApp KE: +254 112 039 092</a>
          <a href="#capture" style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>Download free guide</a>
        </div>
      </div>
      <div style={{ maxWidth: '1100px', margin: '2rem auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>© {new Date().getFullYear()} Kenya Diaspora Homes · Appointed agent for Mi Vida Homes</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['SA WhatsApp', '+27 767 696 654'], ['KE WhatsApp', '+254 112 039 092']].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a472', marginBottom: '0.15rem' }}>{label}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFAB() {
  return (
    <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer"
      style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '54px', height: '54px', background: '#25d366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300, boxShadow: '0 4px 20px rgba(37,211,102,0.35)', transition: 'transform 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  )
}