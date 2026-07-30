import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'
import { GitHubIcon, LinkedInIcon } from '../components/icons'
import { technologies } from '../data/portfolio'

const phrases = [
  'Desenvolvedor Full Stack',
  'React · Node.js · Python · FastAPI',
  'APIs, dados e aplicações em tempo real',
]

const quickLinks = [
  { to: '/curriculum', icon: '📄', label: 'Curriculum', desc: 'Experiência e formação' },
  { to: '/sobre-mim', icon: '👋', label: 'Sobre mim', desc: 'Minha trajetória' },
  { to: '/motivacao', icon: '🚀', label: 'Motivação', desc: 'O que me move' },
  { to: '/trabalhos', icon: '💼', label: 'Trabalhos', desc: 'Projetos desenvolvidos' },
  { to: '/contato', icon: '✉️', label: 'Contato', desc: 'Vamos conversar' },
]

function HomePage() {
  return (
    <div className="container">
      <section className="home-hero">
        <Reveal>
          <p className="hero-hello mono">Olá, eu sou</p>
          <h1 className="hero-name">
            Rafael Tadeu <span className="gradient-text">Praça</span>
          </h1>
          <h2 className="hero-role mono" aria-label="Desenvolvedor Full Stack">
            &gt; <Typewriter phrases={phrases} />
          </h2>
          <p className="hero-quote">
            <strong>"Construir sistemas para facilitar o dia a dia"</strong> — desenvolvedor
            full stack de Indaiatuba/SP com experiência em telemetria industrial e sistemas
            institucionais, cursando Análise e Desenvolvimento de Sistemas na FATEC.
          </p>
          <div className="hero-actions">
            <Link to="/trabalhos" className="btn btn-primary">
              Ver projetos
            </Link>
            <Link to="/contato" className="btn btn-outline">
              Fale comigo
            </Link>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/RafaTPz" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-tadeu-praca/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="avatar-ring">
            <img className="avatar" src="/images/eu.jpg" alt="Foto de Rafael Tadeu Praça" />
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="tech-section">
        <h2>Tecnologias que utilizo</h2>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-item" key={tech.id}>
              <img src={`/images/${tech.icon}`} alt="" loading="lazy" />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="nav" className="quick-links" aria-label="Atalhos das páginas">
        {quickLinks.map((item) => (
          <Link to={item.to} className="quick-link" key={item.to}>
            <span className="ql-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="ql-label">{item.label}</span>
            <span className="ql-desc">{item.desc}</span>
          </Link>
        ))}
      </Reveal>
    </div>
  )
}

export default HomePage
