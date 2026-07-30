import Reveal from '../components/Reveal'

const experiences = [
  {
    role: 'Assistente de Pesquisa e Desenvolvimento',
    company: 'TechFilter',
    period: 'abr 2026 - jul 2026 · Indaiatuba/SP',
    items: [
      'Plataforma web e mobile de telemetria industrial em tempo real para tratamento e reúso de água',
      'Otimização de consultas em base com 12M+ de registros: relatórios de ~7s para menos de 150ms',
      'App Android em Flutter com WebSockets, modo offline, biometria, alertas, widget, visualização 3D e exportação PDF/Excel',
      'Autenticação em duas etapas (2FA) e controle de permissões por perfil',
      'Rotinas automatizadas de relatórios e internacionalização em 4 idiomas',
      'CI/CD na AWS e geração de APKs assinados via GitHub Actions',
    ],
    stack: ['Python', 'FastAPI', 'MySQL', 'React', 'Flutter', 'Docker', 'AWS'],
  },
  {
    role: 'Estagiário de Desenvolvimento',
    company: 'FIEC - Fundação Indaiatubana de Educação e Cultura',
    period: 'mar 2024 - mar 2026 · Indaiatuba/SP',
    items: [
      'Sistema de controle de estoque dos laboratórios com QR Code',
      'App mobile para leitura de QR Code de produtos químicos',
      'Sistema web de gestão de eventos institucionais',
      'Sistema de cestas natalinas com QR Code e webcam',
      'Classificação de docentes e progressão parcial no sistema de carteirinhas',
      'Sustentação de 7 sistemas em produção, com atenção à LGPD',
    ],
    stack: ['React', 'React Native', 'Expo', 'Node.js', 'Express', 'Git'],
  },
]

const education = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    school: 'FATEC Indaiatuba',
    period: 'jul 2024 - ago 2027',
  },
  {
    course: 'Técnico em Informática para Internet',
    school: 'FIEC - Fundação Indaiatubana de Educação e Cultura',
    period: 'jan 2023 - jul 2024 · concluído',
  },
]

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'FastAPI',
  'Flutter',
  'MySQL',
  'NoSQL',
  'Docker',
  'AWS',
  'WebSockets',
  'Git & GitHub',
]

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
  { name: 'Espanhol', level: 'Básico' },
]

function CurriculumPage() {
  return (
    <div className="container">
      <Reveal>
        <h1 className="page-title">Curriculum</h1>
        <p className="page-subtitle">
          Desenvolvedor Full Stack - APIs, bancos de dados relacionais e aplicações em tempo
          real. Atualmente estudando Microsoft Azure.
        </p>
      </Reveal>

      <div className="cv-grid">
        <div className="cv-col">
          <Reveal className="content-card">
            <h2>Experiência</h2>
            <div className="timeline">
              {experiences.map((exp) => (
                <div className="timeline-item" key={exp.company}>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline-period">{exp.period}</span>
                  <ul>
                    {exp.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="tag-list">
                    {exp.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="cv-col">
          <Reveal className="content-card" delay={80}>
            <h2>Formação</h2>
            <div className="timeline">
              {education.map((edu) => (
                <div className="timeline-item" key={edu.course}>
                  <h3>{edu.course}</h3>
                  <h4>{edu.school}</h4>
                  <span className="timeline-period">{edu.period}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="content-card" delay={140}>
            <h2>Habilidades</h2>
            <ul className="tag-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="content-card" delay={200}>
            <h2>Idiomas</h2>
            <div className="timeline">
              {languages.map((lang) => (
                <div className="timeline-item" key={lang.name}>
                  <h3>{lang.name}</h3>
                  <span className="timeline-period">{lang.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default CurriculumPage
