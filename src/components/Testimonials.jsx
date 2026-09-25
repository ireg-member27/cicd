import Reveal from './Reveal.jsx'

const QUOTES = [
  {
    quote:
      'We went from 38-minute pipelines to under four minutes. The team stopped dreading CI and started merging on Fridays again.',
    name: 'Amara Okafor',
    role: 'VP Engineering, Quantex',
    initials: 'AO',
    tone: 'violet',
    metric: '10× faster CI',
  },
  {
    quote:
      'Preview environments were the killer feature. Product signs off on real data before merge, so our rollback rate dropped to almost nothing.',
    name: 'Daniel Reyes',
    role: 'Staff Platform Engineer, Orbit Labs',
    initials: 'DR',
    tone: 'cyan',
    metric: '-72% rollbacks',
  },
  {
    quote:
      'Self-hosted runners inside our VPC, with SOC 2 evidence generated automatically. Security signed off in a single review.',
    name: 'Priya Nair',
    role: 'Head of Infrastructure, Cobalt',
    initials: 'PN',
    tone: 'pink',
    metric: '1 review to audit',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="shell">
        <Reveal className="head center">
          <span className="eyebrow">Loved by engineers</span>
          <h2>
            The teams that ship <span className="grad-text">every day</span>
          </h2>
        </Reveal>

        <div className="quote-grid">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 90} className="card quote">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p className="quote-text">{q.quote}</p>
              <span className="quote-metric">{q.metric}</span>
              <div className="quote-author">
                <span className={`avatar tone-${q.tone}`}>{q.initials}</span>
                <span>
                  <strong>{q.name}</strong>
                  <em>{q.role}</em>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
