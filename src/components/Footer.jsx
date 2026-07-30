import { GitHubIcon, LinkedInIcon } from './icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p>
          <a href="https://github.com/RafaTPz" target="_blank" rel="noreferrer">
            Rafael Tadeu Praça
          </a>{' '}
          · © {new Date().getFullYear()}
        </p>
        <div className="footer-socials">
          <a href="https://github.com/RafaTPz" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-tadeu-praca/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
