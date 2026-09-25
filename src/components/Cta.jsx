import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Cta() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSent(true)
  }

  return (
    <section id="cta" className="section cta-section">
      <div className="shell">
        <Reveal className="cta-panel">
          <div className="cta-glow" aria-hidden="true" />

          <span className="eyebrow">Get started</span>
          <h2>
            Your next deploy could be
            <br />
            <span className="grad-text">the fastest one yet.</span>
          </h2>
          <p>
            Free for 14 days on every plan. No credit card, no sales call, no procurement
            committee — just connect a repo and watch it go green.
          </p>

          {sent ? (
            <div className="cta-success">
              <span className="tick-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <path d="m5.5 12.5 4 4 9-9.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <strong>Check your inbox</strong>
                <p>We sent a magic link to {email} — it expires in 15 minutes.</p>
              </div>
            </div>
          ) : (
            <form className="cta-form" onSubmit={submit}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Work email"
              />
              <button type="submit" className="btn btn-primary">
                Create workspace
              </button>
            </form>
          )}

          <ul className="cta-points">
            <li>9-second setup</li>
            <li>Unlimited pipelines</li>
            <li>Cancel any time</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
