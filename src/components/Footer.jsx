const COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Pipeline', 'Pricing', 'Changelog', 'Status'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API reference', 'CLI', 'Templates', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Security', 'Contact'],
  },
]

const SOCIALS = [
  {
    label: 'GitHub',
    path: 'M12 2.6a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.7c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.6Z',
  },
  {
    label: 'X',
    path: 'M17.6 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L2 3h6.4l4.4 5.9L17.6 3Zm-1.1 16.1h1.7L7.6 4.8H5.8l10.7 14.3Z',
  },
  {
    label: 'Discord',
    path: 'M19.3 5.4A16.7 16.7 0 0 0 15.2 4l-.3.5c1.4.4 2.6 1 3.7 1.8-1.8-.9-3.7-1.4-6.6-1.4s-4.8.5-6.6 1.4c1-.8 2.3-1.4 3.7-1.8L8.8 4a16.7 16.7 0 0 0-4.1 1.4C2.6 8.6 2 11.8 2.2 15c1.7 1.3 3.4 2 5 2.5l1-1.5c-.8-.3-1.5-.7-2.2-1.1l.5-.4c4.2 2 8.8 2 13 0l.5.4c-.7.4-1.4.8-2.2 1.1l1 1.5c1.6-.5 3.3-1.2 5-2.5.3-3.8-.6-7-2.8-9.6ZM9 13.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2.5 4 7v10l8 4.5 8-4.5V7l-8-4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.4 12.2 2.5 2.6 4.7-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="brand-name">Shipyard</span>
            </a>
            <p>
              CI/CD for teams who would rather ship than babysit builds.
            </p>
            <span className="status">
              <i />
              All systems operational
            </span>
          </div>

          <div className="footer-cols">
            {COLUMNS.map((col) => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#top">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shipyard Labs, Inc. Built with Vite + React.</p>
          <div className="footer-social">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#top" aria-label={s.label}>
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
