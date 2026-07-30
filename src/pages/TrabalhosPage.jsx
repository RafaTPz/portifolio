import Reveal from '../components/Reveal'
import { GitHubIcon } from '../components/icons'
import { projects } from '../data/portfolio'

function ProjectCard({ project, className = '' }) {
  return (
    <Reveal as="article" className={`content-card project-card ${className}`}>
      <div className="project-top">
        <span className="project-emoji" aria-hidden="true">
          {project.emoji}
        </span>
        <span className="project-type">{project.type}</span>
      </div>

      <h2>{project.title}</h2>
      <p className="project-desc">{project.description}</p>

      <div>
        <h4>Funcionalidades:</h4>
        <ul className="features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <ul className="tag-list" aria-label="Tecnologias utilizadas">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </Reveal>
  )
}

function TrabalhosPage() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <div className="container">
      <Reveal>
        <h1 className="page-title">Trabalhos</h1>
        <p className="page-subtitle">
          Projetos em destaque no meu GitHub - desenvolvidos em equipe durante os projetos
          integradores da FATEC.
        </p>
      </Reveal>

      <div className="projects-grid">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} className="featured-banner" />
        ))}
        {others.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <Reveal className="more-projects">
        <a
          href="https://github.com/RafaTPz?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          <GitHubIcon size={18} /> Ver todos os repositórios
        </a>
      </Reveal>
    </div>
  )
}

export default TrabalhosPage
