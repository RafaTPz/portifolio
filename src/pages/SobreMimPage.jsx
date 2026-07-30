import Reveal from '../components/Reveal'

function SobreMimPage() {
  return (
    <div className="container">
      <Reveal>
        <h1 className="page-title">Sobre Mim</h1>
      </Reveal>

      <Reveal className="content-card">
        <div className="profile-section">
          <div className="section-block">
            <p>
              Meu nome é <strong>Rafael Tadeu Praça</strong>, tenho 21 anos e sou natural de São
              Paulo - SP. Sou desenvolvedor full stack com foco em aplicações web e estou no 5º
              de 6 semestres de Análise e Desenvolvimento de Sistemas na FATEC Indaiatuba.
            </p>
            <p>
              Minha trajetória na tecnologia começou na formação técnica em Informática, onde
              tive meu primeiro contato com desenvolvimento web. Desde então, venho evoluindo
              constantemente: passei dois anos como estagiário na FIEC desenvolvendo e
              sustentando sistemas institucionais e, em seguida, atuei na TechFilter com
              telemetria industrial em tempo real.
            </p>
            <p>
              Nessas experiências trabalhei de ponta a ponta: APIs com Node.js e FastAPI,
              front-ends em React, apps mobile em Flutter e React Native, otimização de
              consultas em bases com milhões de registros e deploy com Docker e AWS. Aprendi a
              importância de escrever código organizado, trabalhar em equipe e desenvolver
              soluções que realmente impactam o dia a dia das pessoas.
            </p>
          </div>
          <div className="profile-image-wrap">
            <img className="profile-photo" src="/images/eu.jpg" alt="Rafael Tadeu Praça" />
          </div>
        </div>
      </Reveal>

      <br />

      <Reveal className="content-card">
        <div className="section-block">
          <h2>Meu Perfil Profissional</h2>
          <ul>
            <li>Desenvolvimento Full Stack com React, Node.js, Python e FastAPI</li>
            <li>Bancos de dados relacionais, NoSQL e otimização de consultas em grandes volumes</li>
            <li>Aplicações em tempo real (WebSockets) e apps mobile (Flutter, React Native)</li>
            <li>Docker, AWS e CI/CD com GitHub Actions — atualmente estudando Microsoft Azure</li>
            <li>Boa comunicação, trabalho em equipe e aprendizado constante</li>
          </ul>
        </div>
      </Reveal>

      <br />

      <Reveal className="content-card">
        <div className="section-block">
          <h2>O que me diferencia</h2>
          <p>
            Acredito que tecnologia vai além de código. Para mim, desenvolver é entender o
            problema antes de escrever a solução. Busco sempre criar sistemas organizados,
            intuitivos e eficientes, pensando tanto na experiência do usuário quanto na
            qualidade técnica da aplicação.
          </p>
          <p>
            Estou em constante evolução, buscando crescer como desenvolvedor e contribuir cada
            vez mais em projetos que gerem impacto positivo.
          </p>
        </div>
      </Reveal>
    </div>
  )
}

export default SobreMimPage
