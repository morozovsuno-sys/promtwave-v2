import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/generator', label: 'Генератор' },
    { to: '/blog', label: 'Блог' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-wave">♪</span> PromtWave
        </Link>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://suno.com"
              target="_blank"
              rel="noreferrer"
              className="navbar-cta"
            >
              Открыть Suno AI
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
