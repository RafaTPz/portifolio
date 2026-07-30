export const projects = [
  {
    emoji: '📬',
    title: 'JD Notify — Sistema de Notificações',
    type: 'PI · 4º Semestre ADS',
    description:
      'Plataforma completa de comunicações por e-mail: API REST com autenticação JWT + refresh token + API Key, templates versionados, anexos (Cloudflare R2), agendamentos e painel web com dashboard.',
    features: [
      'Autenticação com JWT, refresh token e API Key',
      'Templates de e-mail com controle de versões e editor de código integrado',
      'Envios e agendamentos de comunicações com anexos',
      'Dashboard com indicadores, validação com Zod e documentação Swagger/OpenAPI',
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Chakra UI', 'Docker'],
    links: [
      { label: 'Back-end no GitHub', url: 'https://github.com/RafaTPz/notification-system-back' },
      { label: 'Front-end no GitHub', url: 'https://github.com/RafaTPz/notification-system-front' },
    ],
    featured: true,
  },
  {
    emoji: '🐾',
    title: 'Pata Amiga — Gestão para ONG de Animais',
    type: 'PI · 3º Semestre ADS',
    description:
      'Sistema desktop desenvolvido para auxiliar ONGs no gerenciamento de animais resgatados, com controle de documentos e acompanhamento correto dos tratamentos. Projeto com modelagem completa do banco e diagramas UML.',
    features: [
      'Cadastro de animais com anexos e documentos',
      'Registro de medicamentos aplicados',
      'Agendamento de futuras aplicações',
      'Histórico completo por animal',
    ],
    technologies: ['Java', 'JavaFX', 'Maven', 'Supabase', 'PostgreSQL'],
    links: [{ label: 'Visualizar no GitHub', url: 'https://github.com/RafaTPz/friendly-paw' }],
  },
  {
    emoji: '💈',
    title: 'Amarillo Barber — Sistema para Barbearia',
    type: 'PI · 2º Semestre ADS',
    description:
      'API desenvolvida com Laravel Breeze para gestão de barbearia: controle de estoque de produtos e agendamento de horários de clientes, centralizando a gestão do negócio em uma única plataforma.',
    features: [
      'Cadastro e controle de produtos em estoque',
      'Agendamento de horários com controle de disponibilidade',
      'Autenticação com papéis de acesso (USER/ADMIN)',
      'Migrations, seeders e endpoints REST documentados',
    ],
    technologies: ['PHP', 'Laravel', 'Blade', 'SQLite', 'Docker'],
    links: [{ label: 'Visualizar no GitHub', url: 'https://github.com/RafaTPz/pi-amarillo-barber' }],
  },
]

export const technologies = [
  { id: 'react', label: 'React', icon: 'react.png' },
  { id: 'node', label: 'Node.js', icon: 'node.png' },
  { id: 'typescript', label: 'TypeScript', icon: 'typescript.svg' },
  { id: 'javascript', label: 'JavaScript', icon: 'javascript.png' },
  { id: 'python', label: 'Python', icon: 'python.svg' },
  { id: 'fastapi', label: 'FastAPI', icon: 'fastapi.svg' },
  { id: 'mysql', label: 'MySQL', icon: 'mysql.png' },
  { id: 'docker', label: 'Docker', icon: 'docker.svg' },
  { id: 'git', label: 'Git', icon: 'git.png' },
]
