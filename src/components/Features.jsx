import Reveal from './Reveal.jsx'

const FEATURES = [
  {
    icon: 'bolt',
    title: 'Pipelines that start instantly',
    text: 'Warm runners, content-addressed caching and fan-out parallelism cut median build time from 6 minutes to 22 seconds.',
    tag: 'avg. 16× faster',
    wide: true,
  },
  {
    icon: 'branch',
    title: 'Preview env on every PR',
    text: 'Each pull request gets its own URL, seeded database and seeded fixtures — destroyed automatically on merge.',
    tag: 'zero config',
    wide: true,
  },
  {
    icon: 'flask',
    title: 'Flaky test detection',
    text: 'Auto-quarantine retries, bisect the offending commit and post the culprit straight to the PR.',
  },
  {
    icon: 'shield',
    title: 'Security built in',
    text: 'SAST, secret scanning, dependency audit and a signed SBOM on every single artifact.',
  },
  {
    icon: 'rocket',
    title: 'Deploy anywhere',
    text: 'Kubernetes, Fly, Vercel, ECS, or a bare-metal box behind your firewall. Blue/green and canary included.',
  },
  {
    icon: 'chart',
    title: 'DORA metrics, live',
    text: 'Deployment frequency, lead time, change failure rate and MTTR per service — no agents to install.',
  },
  {
    icon: 'rocket',
    title: 'One-click rollback',
    text: 'Any release, any environment, reverted to the previous known-good artifact in under three seconds.',
  },
  {
    icon: 'shield',
    title: 'Secrets & artifacts',
    text: 'Encrypted per-environment secrets, signed artifacts and 90-day retention on every plan.',
  },
]

function Icon({ name }) {
  const paths = {
    bolt: <path d="M13 2.5 4.5 13.5H11l-.8 8 8.3-11H12l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
    branch: (
      <>
        <circle cx="6.5" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="6.5" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 8.4v7.2M8.9 6.6h4.2a2 2 0 0 1 2 2v.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    flask: (
      <>
        <path d="M9.5 3v6.2L4.8 17a2.4 2.4 0 0 0 2 3.6h10.4a2.4 2.4 0 0 0 2-3.6L14.5 9.2V3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.5 3h7M7.4 14.5h9.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2.8 4.8 5.6v6.1c0 4.4 3 7.6 7.2 9.5 4.2-1.9 7.2-5.1 7.2-9.5V5.6L12 2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m9 12 2.2 2.3L15.4 10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    rocket: (
      <>
        <path d="M12 2.8c3.4 2.2 5.2 5.6 5.2 9.4l-2.6 3.4H9.4l-2.6-3.4C6.8 8.4 8.6 5 12 2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="10.4" r="1.9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.4 16.6 7.6 21l3.2-1.6M14.6 16.6 16.4 21l-3.2-1.6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V4M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 16.5v-4M12.5 16.5V8M17 16.5v-6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="shell">
        <Reveal className="head center">
          <span className="eyebrow">Why Shipyard</span>
          <h2>
            Everything between <span className="grad-text">commit</span> and production
          </h2>
          <p>
            One platform for building, testing, scanning and releasing — so your team stops
            gluing five tools together and gets back to shipping.
          </p>
        </Reveal>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 70}
              className={`card feature ${f.wide ? 'is-wide' : ''}`}
            >
              <span className="feature-icon">
                <Icon name={f.icon} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              {f.tag && <span className="feature-tag">{f.tag}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
