import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SunIcon, MoonIcon } from './icons'

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

  // Trava o scroll da página enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Fecha o menu se a tela voltar ao tamanho desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 921px)')
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

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
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
            title={theme === 'light' ? 'Tema escuro' : 'Tema claro'}
          >
            <span className={`theme-option ${theme === 'light' ? 'active' : ''}`}>
              <SunIcon /> Light
            </span>
            <span className={`theme-option ${theme === 'dark' ? 'active' : ''}`}>
              <MoonIcon /> Dark
            </span>
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
