import { KEZA_LAIKA, AGENT } from '../data/properties'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>

      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        poster="/assets/images/exterior/Exterior_001.jpg"
      >
        <source src={KEZA_LAIKA.videos.heroBackground.webm} type="video/webm" />
        <source src={KEZA_LAIKA.videos.heroBackground.mp4} type="video/mp4" />
      </video>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(10,25,16,0.88) 0%, rgba(10,25,16,0.55) 55%, rgba(10,25,16,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to top, rgba(10,25,16,0.75) 0%, transparent 50%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(2rem,5vw,5rem) clamp(1.5rem,5vw,3rem) clamp(3rem,8vw,6rem)',
        maxWidth: '620px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{ width: '36px', height: '1px', background: '#c9a472' }} />
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a472' }}>
            Ruaka · Nairobi · Kenya
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.6rem, 5vw, 4rem)',
          fontWeight: 400, lineHeight: 1.08, color: '#fff', marginBottom: '1.5rem',
        }}>
          There's a balcony<br />
          in Nairobi with<br />
          <em style={{ color: '#c9a472' }}>your name on it.</em>
        </h1>

        <p style={{
          fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300, maxWidth: '440px',
        }}>
          You've built a good life in South Africa. Now build something back home —
          a real asset, in a city that's growing fast, in a development unlike anything
          Kenya has seen before.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary"
            onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}>
            Download free guide
          </button>
          <a href={AGENT.whatsappSAUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            WhatsApp AK →
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '2.5rem', right: '3rem', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', writingMode: 'vertical-rl' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(201,164,114,0.5), transparent)' }} />
      </div>
    </section>
  )
}