export interface CareerPosition {
  id: string;
  title: string;
  level: string;
  qualifications: string[];
  requirements: string[];
  desiredCourses: string[];
  mandatoryTraining: string[];
}

export interface Department {
  id: string;
  name: string;
  positions: CareerPosition[];
}

export const departments: Department[] = [
  {
    id: 'tech',
    name: 'Tecnologia',
    positions: [
      {
        id: 'tech-1',
        title: 'Desenvolvedor Junior',
        level: 'Junior',
        qualifications: [
          'Conhecimento básico em programação',
          'Lógica de programação',
          'Versionamento com Git'
        ],
        requirements: [
          'Graduação em andamento em Ciência da Computação ou áreas relacionadas',
          'Inglês básico'
        ],
        desiredCourses: [
          'Curso de desenvolvimento web',
          'Curso de algoritmos',
          'Curso de banco de dados'
        ],
        mandatoryTraining: [
          'Onboarding técnico',
          'Segurança da informação',
          'Metodologias ágeis'
        ]
      },
      {
        id: 'tech-2',
        title: 'Desenvolvedor Pleno',
        level: 'Pleno',
        qualifications: [
          'Experiência com desenvolvimento full-stack',
          'Conhecimento em arquitetura de software',
          'Experiência com metodologias ágeis'
        ],
        requirements: [
          'Graduação completa em Ciência da Computação ou áreas relacionadas',
          'Inglês intermediário',
          '3+ anos de experiência'
        ],
        desiredCourses: [
          'Especialização em arquitetura de software',
          'Curso de cloud computing',
          'Certificações técnicas'
        ],
        mandatoryTraining: [
          'Clean Code',
          'Design Patterns',
          'DevOps essentials'
        ]
      },
      {
        id: 'tech-3',
        title: 'Tech Lead',
        level: 'Sênior',
        qualifications: [
          'Liderança técnica de equipes',
          'Arquitetura de sistemas complexos',
          'Gestão de projetos técnicos'
        ],
        requirements: [
          'Pós-graduação em área técnica',
          'Inglês avançado',
          '5+ anos de experiência'
        ],
        desiredCourses: [
          'MBA em Gestão de Projetos',
          'Liderança e gestão de equipes',
          'Arquitetura de sistemas distribuídos'
        ],
        mandatoryTraining: [
          'Gestão de pessoas',
          'Liderança técnica',
          'Estratégia de produtos digitais'
        ]
      }
    ]
  },
  {
    id: 'product',
    name: 'Produto',
    positions: [
      {
        id: 'prod-1',
        title: 'Product Owner Jr',
        level: 'Junior',
        qualifications: [
          'Conhecimento básico em gestão de produtos',
          'Comunicação efetiva',
          'Metodologias ágeis'
        ],
        requirements: [
          'Graduação em andamento em áreas relacionadas',
          'Inglês intermediário'
        ],
        desiredCourses: [
          'Curso de Product Management',
          'Scrum Product Owner',
          'UX Design básico'
        ],
        mandatoryTraining: [
          'Fundamentos de Produto',
          'Scrum Framework',
          'OKRs e KPIs'
        ]
      },
      {
        id: 'prod-2',
        title: 'Product Manager',
        level: 'Sênior',
        qualifications: [
          'Gestão de roadmap de produto',
          'Análise de dados e métricas',
          'Liderança de equipe de produto'
        ],
        requirements: [
          'MBA ou Pós em Gestão de Produtos',
          'Inglês avançado',
          '5+ anos de experiência'
        ],
        desiredCourses: [
          'Growth Marketing',
          'Data Analytics',
          'Gestão estratégica'
        ],
        mandatoryTraining: [
          'Liderança de produto',
          'Estratégia de negócios',
          'Gestão de stakeholders'
        ]
      }
    ]
  },
  {
    id: 'design',
    name: 'Design',
    positions: [
      {
        id: 'design-1',
        title: 'UI Designer Jr',
        level: 'Junior',
        qualifications: [
          'Design de interfaces',
          'Prototipagem',
          'Fundamentos de UX'
        ],
        requirements: [
          'Graduação em Design ou áreas relacionadas',
          'Inglês básico'
        ],
        desiredCourses: [
          'UI Design',
          'Design Systems',
          'Ferramentas de design'
        ],
        mandatoryTraining: [
          'Fundamentos de design',
          'Acessibilidade',
          'Design thinking'
        ]
      },
      {
        id: 'design-2',
        title: 'Product Designer',
        level: 'Pleno',
        qualifications: [
          'Design de produtos digitais',
          'Research',
          'Design Systems'
        ],
        requirements: [
          'Graduação completa em Design',
          'Inglês intermediário',
          '3+ anos de experiência'
        ],
        desiredCourses: [
          'UX Research',
          'Service Design',
          'Design Strategy'
        ],
        mandatoryTraining: [
          'Design de produtos',
          'Metodologias ágeis',
          'Gestão de design'
        ]
      }
    ]
  }
];