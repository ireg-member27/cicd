import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const LOGOS = [
  'NOVA',
  'HYPERLOOP',
  'QUANTEX',
  'ORBIT LABS',
  'LUMEN',
  'FOUNDRY',
  'VERTEX',
  'COBALT',
  'HEXAGON',
  'NIMBUS',
]

const STATS = [
  { value: 12.4, suffix: 'M', label: 'Builds run every month', decimals: 1 },
  { value: 4.2, suffix: 's', label: 'Median pipeline start', decimals: 1 },
  { value: 99.99, suffix: '%', label: 'Control-plane uptime', decimals: 2 },
  { value: 8400, suffix: '+', label: 'Teams shipping daily', decimals: 0 },
]

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function Counter({ value, decimals, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(() => (prefersReduced() ? value : 0))

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()

        const dur = 1400
        let raf = 0
        let start = 0

        const tick = (now) => {
          if (!start) start = now
          const p = Math.min(Math.max((now - start) / dur, 0), 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(value * eased)
          if (p < 1) raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [value])

  const shown = decimals === 0 ? Math.round(n).toLocaleString('en-US') : n.toFixed(decimals)

  return (
    <span ref={ref} className="stat-num">
      {shown}
      {suffix}
    </span>
  )
}

export default function SocialProof() {
  return (
    <section className="proof">
      <div className="marquee" aria-label="Companies using Shipyard">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span key={`${logo}-${i}`} className="logo-item">
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="shell">
        <Reveal className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              <p>{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
