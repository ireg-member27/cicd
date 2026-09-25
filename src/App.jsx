import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SocialProof from './components/SocialProof.jsx'
import Features from './components/Features.jsx'
import Pipeline from './components/Pipeline.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('shipyard-theme')
      if (saved) return saved
      return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('shipyard-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pipeline />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
