import Reveal from '../components/Reveal'

function MotivacaoPage() {
  return (
    <div className="container">
      <Reveal>
        <h1 className="page-title">Motivação</h1>
      </Reveal>

      <Reveal className="content-card">
        <div className="section-block">
          <h2>🎮 Como tudo começou</h2>
          <p>
            Meu interesse por programação começou ainda na infância. O que inicialmente era
            curiosidade sobre como os jogos funcionavam rapidamente se transformou em vontade
            de criar os meus próprios.
          </p>
          <p>
            Comecei explorando desenvolvimento de jogos com Unity utilizando C#, além de criar
            projetos no RPG Maker MV. Mesmo sem grande experiência, eu já buscava entender
            lógica, mecânicas e estrutura de sistemas.
          </p>
          <p>
            Cheguei a publicar dois jogos em versões iniciais no meu site,{' '}
            <a href="https://gamerealm.net" target="_blank" rel="noreferrer">
              gamerealm.net
            </a>
            . Embora estejam atualmente pausados, esses projetos foram fundamentais para meu
            desenvolvimento, pois me ensinaram disciplina, resolução de problemas e
            principalmente a transformar ideias em algo concreto.
          </p>
        </div>
      </Reveal>

      <br />

      <Reveal className="content-card">
        <div className="section-block">
          <h2>💡 Por que continuo na tecnologia?</h2>
          <p>
            O que me motiva não é apenas programar, mas criar soluções que facilitem o dia a
            dia das pessoas. Ao longo da minha formação técnica e experiência profissional,
            percebi que o mesmo entusiasmo que eu tinha ao criar jogos é o que hoje aplico no
            desenvolvimento de sistemas.
          </p>
          <p>
            Gosto de entender problemas, pensar na melhor estrutura e construir soluções
            organizadas e eficientes. A tecnologia, para mim, é uma ferramenta para gerar
            impacto real.
          </p>
        </div>
      </Reveal>

      <br />

      <Reveal className="content-card">
        <div className="section-block">
          <h2>🎯 Objetivo</h2>
          <p>
            Busco evoluir constantemente como desenvolvedor, aprofundando meus conhecimentos
            técnicos e contribuindo em projetos que tragam valor e inovação. Quero participar
            da construção de sistemas que façam diferença e continuar transformando curiosidade
            em criação.
          </p>
        </div>
      </Reveal>
    </div>
  )
}

export default MotivacaoPage
