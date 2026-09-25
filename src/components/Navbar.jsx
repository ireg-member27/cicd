import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell nav">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2.5 4 7v10l8 4.5 8-4.5V7l-8-4.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="m8.4 12.2 2.5 2.6 4.7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-name">Shipyard</span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className="nav-mobile-cta" onClick={() => setOpen(false)}>
            Start free
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 2.6v2.2M12 19.2v2.2M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 14.4A8.4 8.4 0 0 1 9.6 4 8.4 8.4 0 1 0 20 14.4Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <a href="#cta" className="btn btn-ghost nav-cta">
            Start free
          </a>

          <button
            type="button"
            className="icon-btn burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
