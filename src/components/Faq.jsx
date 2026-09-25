import { useState } from 'react'
import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    q: 'How long does migration take?',
    a: 'Most teams are running their first pipeline in under ten minutes. Shipyard reads your existing workflow and generates an equivalent shipyard.yml, which you review and commit like any other change. Migrating caches and secrets is a single command.',
  },
  {
    q: 'Do you support self-hosted runners?',
    a: 'Yes. Team plans can register runners in your own VPC or on-prem hardware while still using the managed control plane. Enterprise plans can run the entire control plane inside your network with no egress.',
  },
  {
    q: 'What happens when a deploy fails?',
    a: 'Health gates watch error rate, latency and saturation for a configurable window. If a gate fails, Shipyard rolls back automatically and posts the diff and logs to the originating PR. Every rollback is one click away in the UI, too.',
  },
  {
    q: 'Is my code used to train models?',
    a: 'Never. Your repositories, artifacts and logs are encrypted at rest, isolated per tenant, and never used for model training or shared across customers.',
  },
  {
    q: 'Can I bring my own caching and storage?',
    a: 'Yes — point the remote cache at S3, GCS or a self-hosted object store. Artifacts, test results and SBOMs all respect the same storage policy.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section faq">
      <div className="shell faq-grid">
        <Reveal className="head">
          <span className="eyebrow">FAQ</span>
          <h2>
            Questions, <span className="grad-text">answered</span>
          </h2>
          <p>
            Still unsure? Talk to a real engineer — no SDR script, no calendar gauntlet.
          </p>
          <a href="#cta" className="btn btn-ghost">
            Book 15 minutes
          </a>
        </Reveal>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 60} className={`card faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
