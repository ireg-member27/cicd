import { useState } from 'react'
import Reveal from './Reveal.jsx'

const PLANS = [
  {
    name: 'Starter',
    blurb: 'For side projects and first deploys.',
    monthly: 0,
    yearly: 0,
    cta: 'Start free',
    features: ['2,000 build minutes / mo', '2 concurrent jobs', 'Community support', '7-day log retention'],
  },
  {
    name: 'Team',
    blurb: 'For product teams shipping weekly — or daily.',
    monthly: 29,
    yearly: 23,
    cta: 'Start 14-day trial',
    popular: true,
    features: [
      'Unlimited build minutes',
      '20 concurrent jobs',
      'Preview envs on every PR',
      'Flaky test detection',
      'SSO + audit log',
      'Priority support, 1h SLA',
    ],
  },
  {
    name: 'Enterprise',
    blurb: 'For regulated orgs at serious scale.',
    monthly: null,
    yearly: null,
    cta: 'Talk to sales',
    features: [
      'Self-hosted runners (VPC)',
      'Unlimited concurrency',
      'SOC 2 Type II + HIPAA',
      'Custom DORA dashboards',
      'Dedicated success engineer',
    ],
  },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <path d="m5.5 12.5 4 4 9-9.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="section pricing">
      <div className="shell">
        <Reveal className="head center">
          <span className="eyebrow">Pricing</span>
          <h2>
            Pay for seats, <span className="grad-text">not for minutes</span>
          </h2>
          <p>
            Every plan includes unlimited pipelines, preview environments and the full security
            suite. Cancel any time.
          </p>

          <div className="billing-toggle" role="group" aria-label="Billing period">
            <button type="button" className={!yearly ? 'is-active' : ''} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button type="button" className={yearly ? 'is-active' : ''} onClick={() => setYearly(true)}>
              Yearly <em>save 20%</em>
            </button>
          </div>
        </Reveal>

        <div className="plan-grid">
          {PLANS.map((p, i) => {
            const price = yearly ? p.yearly : p.monthly
            return (
              <Reveal
                key={p.name}
                delay={i * 90}
                className={`card plan ${p.popular ? 'is-popular' : ''}`}
              >
                {p.popular && <span className="plan-ribbon">Most popular</span>}

                <h3>{p.name}</h3>
                <p className="plan-blurb">{p.blurb}</p>

                <div className="plan-price">
                  {price === null ? (
                    <span className="price-custom">Custom</span>
                  ) : (
                    <>
                      <span className="price-cur">$</span>
                      <span className="price-num">{price}</span>
                      <span className="price-per">/ user / mo</span>
                    </>
                  )}
                </div>
                {price !== null && price > 0 && yearly && (
                  <p className="plan-note">billed annually</p>
                )}

                <a href="#cta" className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'} plan-cta`}>
                  {p.cta}
                </a>

                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="tick">
                        <Check />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="pricing-foot">
          <p>
            All plans include <strong>SOC 2 Type II</strong> controls, 99.99% uptime SLA on Team
            and above, and unlimited artifacts.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
