import Reveal from '../components/Reveal'
import { GitHubIcon, LinkedInIcon } from '../components/icons'

const contacts = [
  {
    icon: '✉️',
    title: 'E-mail',
    value: 'rafael.praca@fatec.sp.gov.br',
    action: 'Enviar e-mail',
    url: 'mailto:rafael.praca@fatec.sp.gov.br',
  },
  {
    icon: <LinkedInIcon size={26} />,
    title: 'LinkedIn',
    value: 'rafael-tadeu-praca',
    action: 'Acessar perfil',
    url: 'https://www.linkedin.com/in/rafael-tadeu-praca/',
  },
  {
    icon: <GitHubIcon size={26} />,
    title: 'GitHub',
    value: '@RafaTPz',
    action: 'Ver repositórios',
    url: 'https://github.com/RafaTPz',
  },
  {
    icon: '📍',
    title: 'Localização',
    value: 'Indaiatuba - SP, Brasil',
    action: null,
    url: null,
  },
]

function ContatoPage() {
  return (
    <div className="container">
      <Reveal>
        <h1 className="page-title">Contato</h1>
        <p className="page-subtitle">Onde me encontrar — respondo mais rápido pelo LinkedIn.</p>
      </Reveal>

      <div className="contact-grid">
        {contacts.map((contact, index) =>
          contact.url ? (
            <Reveal
              as="a"
              key={contact.title}
              href={contact.url}
              target={contact.url.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="content-card contact-card"
              delay={index * 80}
            >
              <span className="contact-icon" aria-hidden="true">
                {contact.icon}
              </span>
              <h3>{contact.title}</h3>
              <p>{contact.value}</p>
              <span className="contact-action">{contact.action} →</span>
            </Reveal>
          ) : (
            <Reveal key={contact.title} className="content-card contact-card" delay={index * 80}>
              <span className="contact-icon" aria-hidden="true">
                {contact.icon}
              </span>
              <h3>{contact.title}</h3>
              <p>{contact.value}</p>
            </Reveal>
          ),
        )}
      </div>

      <Reveal className="content-card contact-cta">
        <p>
          Estou aberto a oportunidades e novos projetos. Se quiser conversar sobre tecnologia
          ou trabalho, me chame! 🚀
        </p>
        <a
          href="https://www.linkedin.com/in/rafael-tadeu-praca/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Vamos conversar
        </a>
      </Reveal>
    </div>
  )
}

export default ContatoPage
