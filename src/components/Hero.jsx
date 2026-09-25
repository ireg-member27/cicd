import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'

const STAGES = [
  { name: 'Checkout', meta: 'git@github.com:shipyard/web', time: '0.8s', log: 'Cloned 4 branches · cache hit (1.2 GB)' },
  { name: 'Install', meta: 'pnpm install --frozen-lockfile', time: '2.1s', log: 'Reused store · 0 packages downloaded' },
  { name: 'Build', meta: 'vite build', time: '6.4s', log: '1,284 modules transformed → dist/ (4.1 MB)' },
  { name: 'Test', meta: 'vitest run --coverage', time: '9.2s', log: '312 passed · 0 failed · coverage 94.7%' },
  { name: 'Scan', meta: 'shipyard scan --strict', time: '3.0s', log: 'No secrets · 0 critical · SBOM attached' },
  { name: 'Deploy', meta: 'shipyard deploy prod', time: '4.5s', log: 'Rolled out to 12 regions · health OK' },
]

const TOTAL = STAGES.length

export default function Hero() {
  const [step, setStep] = useState(0)
  const [copied, setCopied] = useState(false)
  const done = step >= TOTAL

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s > TOTAL ? 0 : s + 1)), 750)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!copied) return undefined
    const id = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(id)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('npx shipyard init')
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="top" className="section hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">v3.0 · 4× faster remote cache</span>
          </Reveal>

          <Reveal delay={80}>
            <h1>
              Ship like the
              <br />
              <span className="grad-text">big leagues.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-sub">
              Shipyard is the CI/CD platform for teams who ship daily — pipelines that start in
              milliseconds, a preview environment on every pull request, and rollouts you can undo in
              one click.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-cta">
              <a href="#pricing" className="btn btn-primary btn-lg">
                Start free — no card
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
                  <path d="M5 12h13M13 6.5 18.5 12 13 17.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#pipeline" className="btn btn-ghost btn-lg">
                See a live pipeline
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <button type="button" className="cmd" onClick={copy}>
              <span className="cmd-dollar">$</span>
              <code>npx shipyard init</code>
              <span className={`cmd-copy ${copied ? 'is-done' : ''}`}>
                {copied ? 'Copied' : 'Copy'}
              </span>
            </button>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero-trust">
              <div className="avatars" aria-hidden="true">
                <span>AK</span>
                <span>MR</span>
                <span>JL</span>
                <span>SV</span>
              </div>
              <p>
                Trusted by <strong>8,400+</strong> engineering teams · 14-day free trial
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="hero-visual">
          <div className="build-card">
            <div className="build-head">
              <div className="build-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="build-repo">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="18" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M6 8.4v7.2M8.4 6h5.2a2 2 0 0 1 2 2v.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                shipyard/web
                <span className="branch">main</span>
              </div>
              <div className="build-status">
                <span className={`status-pill ${done ? 'is-done' : 'is-run'}`}>
                  <i />
                  {done ? 'Passed · 42.1s' : 'Running'}
                </span>
              </div>
            </div>

            <ol className="stages">
              {STAGES.map((s, i) => {
                const state = i < step - 1 || done ? 'done' : i === step - 1 && !done ? 'active' : 'idle'
                return (
                  <li key={s.name} className={`stage is-${state}`}>
                    <span className="stage-icon" aria-hidden="true">
                      {state === 'done' ? (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
                          <path d="m5.5 12.5 4 4 9-9.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : state === 'active' ? (
                        <span className="spinner" />
                      ) : (
                        <span className="dot" />
                      )}
                    </span>
                    <span className="stage-name">{s.name}</span>
                    <span className="stage-meta">{s.meta}</span>
                    <span className="stage-time">{state === 'idle' ? '—' : s.time}</span>
                  </li>
                )
              })}
            </ol>

            <div className="terminal">
              <div className="terminal-bar">
                <span>build.log</span>
                <span className="terminal-live">
                  <i />
                  live
                </span>
              </div>
              <div className="terminal-body">
                {STAGES.slice(0, Math.max(step, 1)).map((s, i) => (
                  <p key={s.name} className={i === step - 1 && !done ? 'is-new' : ''}>
                    <span className="t-dim">{String(i + 1).padStart(2, '0')}</span>
                    <span className="t-ok">✓</span>
                    <span className="t-name">{s.name}</span>
                    <span className="t-msg">{s.log}</span>
                  </p>
                ))}
                {!done && <p className="cursor-line"><span className="caret" /></p>}
                {done && (
                  <p className="t-summary">
                    <span className="t-dim">--</span>
                    <span className="t-ok">✓</span>
                    <span className="t-name">Done</span>
                    <span className="t-msg">Pipeline passed in 42.1s · deployed to production</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="float-chip chip-a">
            <span className="chip-dot ok" />
            Preview ready · pr-482
          </div>
          <div className="float-chip chip-b">
            <span className="chip-dot" />
            Cache hit 96%
          </div>
        </Reveal>
      </div>
    </section>
  )
}
