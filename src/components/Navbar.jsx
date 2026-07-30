import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/sobre-mim', label: 'Sobre Mim' },
  { to: '/motivacao', label: 'Motivação' },
  { to: '/trabalhos', label: 'Trabalhos' },
  { to: '/contato', label: 'Contato' },
]

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="navbar-inner container" aria-label="Navegação principal">
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-bracket">&lt;</span>RafaTPz<span className="logo-bracket">/&gt;</span>
        </NavLink>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
            title={theme === 'light' ? 'Tema escuro' : 'Tema claro'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
