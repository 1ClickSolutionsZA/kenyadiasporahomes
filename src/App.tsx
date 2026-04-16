import './styles/globals.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {
  StatsBar, Gallery, Feature, TrustVideo,
  Pricing, PaymentPlans, Lifestyle, LeadCapture,
  Footer, WhatsAppFAB
} from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Gallery />
        <Feature />
        <TrustVideo />
        <Pricing />
        <PaymentPlans />
        <Lifestyle />
        <LeadCapture />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}