import Reveal from './Reveal.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Connect the repo',
    text: 'GitHub, GitLab or Bitbucket. Shipyard reads your project and generates a working pipeline in about nine seconds.',
  },
  {
    n: '02',
    title: 'Describe the flow',
    text: 'One declarative file, versioned next to your code. Reusable steps, matrices, secrets and conditional deploys.',
  },
  {
    n: '03',
    title: 'Ship on green',
    text: 'Automatic rollouts with health gates, one-click rollback, and a preview URL posted back to every pull request.',
  },
]

export default function Pipeline() {
  return (
    <section id="pipeline" className="section pipeline">
      <div className="shell pipeline-grid">
        <div className="pipeline-copy">
          <Reveal className="head">
            <span className="eyebrow">The pipeline</span>
            <h2>
              One file. <span className="grad-text">Zero</span> YAML archaeology.
            </h2>
            <p>
              Pipelines are code — readable, reviewable and diffable. No hidden UI config, no
              drift between what runs and what you think runs.
            </p>
          </Reveal>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="step">
                <span className="step-num">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={140} className="code-window">
          <div className="code-bar">
            <div className="build-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="code-file">shipyard.yml</span>
            <span className="code-badge">main</span>
          </div>

          <pre className="code-body">
            <code>
              <span className="c-key">name</span>
              <span className="c-punc">:</span> <span className="c-str">web</span>
              {'\n'}
              <span className="c-key">on</span>
              <span className="c-punc">:</span> <span className="c-punc">[</span>
              <span className="c-str">push</span>
              <span className="c-punc">,</span> <span className="c-str">pull_request</span>
              <span className="c-punc">]</span>
              {'\n\n'}
              <span className="c-key">jobs</span>
              <span className="c-punc">:</span>
              {'\n'}
              <span className="c-punc">  </span>
              <span className="c-key">test</span>
              <span className="c-punc">:</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">image</span>
              <span className="c-punc">:</span> <span className="c-str">node:22</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">cache</span>
              <span className="c-punc">:</span> <span className="c-str">pnpm-store</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">steps</span>
              <span className="c-punc">:</span>
              {'\n'}
              <span className="c-punc">      - </span>
              <span className="c-str">pnpm install --frozen-lockfile</span>
              {'\n'}
              <span className="c-punc">      - </span>
              <span className="c-str">pnpm test --coverage</span>
              {'\n\n'}
              <span className="c-punc">  </span>
              <span className="c-key">deploy</span>
              <span className="c-punc">:</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">needs</span>
              <span className="c-punc">:</span> <span className="c-punc">[</span>
              <span className="c-str">test</span>
              <span className="c-punc">]</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">if</span>
              <span className="c-punc">:</span> <span className="c-str">branch == main</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">strategy</span>
              <span className="c-punc">:</span> <span className="c-str">canary(10%)</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">run</span>
              <span className="c-punc">:</span> <span className="c-str">shipyard deploy prod</span>
              {'\n'}
              <span className="c-punc">    </span>
              <span className="c-key">rollback</span>
              <span className="c-punc">:</span> <span className="c-bool">auto</span>
            </code>
          </pre>

          <div className="code-foot">
            <span className="ok-chip">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
                <path d="m5.5 12.5 4 4 9-9.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Validated
            </span>
            <span>14 jobs · 42s average · 96% cache hit</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
