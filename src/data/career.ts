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
    id: 'sac',
    name: 'Serviço de Atendimento ao Cliente (SAC)',
    positions: [
      {
        id: 'sac-1',
        title: 'Supervisor de SAC',
        level: 'Sênior',
        qualifications: [
          'Liderar a equipe de atendimento',
          'Monitorar indicadores de performance',
          'Planejar melhorias para o atendimento ao cliente',
          'Mediar conflitos e garantir cumprimento de metas de qualidade e eficiência',
          'Responsável por relatórios de desempenho e feedbacks à equipe'
        ],
        requirements: [
          'Superior completo em Administração, Gestão de Negócios, Comunicação ou áreas afins'
        ],
        desiredCourses: [
          'Gestão de Equipes',
          'Atendimento ao Cliente',
          'Técnicas de Feedback',
          'Gestão de Conflitos'
        ],
        mandatoryTraining: [
          'Ferramentas de CRM',
          'Técnicas de Atendimento',
          'Gestão de Indicadores de SAC'
        ]
      },
      {
        id: 'sac-2',
        title: 'Atendimento ao Cliente Sênior',
        level: 'Sênior',
        qualifications: [
          'Atender clientes com alta complexidade de demanda',
          'Solucionar problemas de maneira eficiente',
          'Orientar clientes sobre procedimentos',
          'Auxiliar colegas menos experientes'
        ],
        requirements: [
          'Ensino superior completo ou em andamento em áreas de humanas ou comunicação'
        ],
        desiredCourses: [
          'Excelência no Atendimento ao Cliente',
          'Comunicação Eficaz',
          'Técnicas de Negociação'
        ],
        mandatoryTraining: [
          'Uso de CRM',
          'Técnicas de Atendimento ao Cliente'
        ]
      },
      {
        id: 'sac-3',
        title: 'Atendimento ao Cliente Pleno',
        level: 'Pleno',
        qualifications: [
          'Atendimento direto ao cliente',
          'Solução de demandas de média complexidade',
          'Registro de informações no sistema de atendimento'
        ],
        requirements: [
          'Ensino médio completo, desejável superior em andamento'
        ],
        desiredCourses: [
          'Atendimento ao Cliente',
          'Comunicação Interpessoal'
        ],
        mandatoryTraining: [
          'Uso do Sistema de Atendimento',
          'Procedimentos de Registro de Chamados'
        ]
      },
      {
        id: 'sac-4',
        title: 'Atendimento ao Cliente Júnior',
        level: 'Junior',
        qualifications: [
          'Atender e registrar as solicitações dos clientes',
          'Encaminhar questões para níveis mais avançados',
          'Auxiliar na triagem de problemas'
        ],
        requirements: [
          'Ensino médio completo'
        ],
        desiredCourses: [
          'Atendimento ao Cliente Básico',
          'Comunicação e Postura Profissional'
        ],
        mandatoryTraining: [
          'Introdução ao Sistema de Atendimento',
          'Procedimentos Internos do SAC'
        ]
      }
    ]
  },
  {
    id: 'post-sales',
    name: 'Pós-Vendas',
    positions: [
      {
        id: 'post-sales-1',
        title: 'Supervisor de Pós-Vendas',
        level: 'Sênior',
        qualifications: [
          'Gerenciar a equipe de back office',
          'Monitorar indicadores de satisfação e eficiência',
          'Implementar processos de melhoria contínua',
          'Coordenar estratégias de fidelização e retenção de clientes'
        ],
        requirements: [
          'Superior completo em Administração, Gestão de Negócios ou áreas correlatas'
        ],
        desiredCourses: [
          'Gestão de Pessoas',
          'Processos e Qualidade no Atendimento',
          'Fidelização de Clientes'
        ],
        mandatoryTraining: [
          'Ferramentas de CRM',
          'Procedimentos de Pós-Vendas',
          'Indicadores de Performance'
        ]
      },
      {
        id: 'post-sales-2',
        title: 'Assistente de Back Office Sênior',
        level: 'Sênior',
        qualifications: [
          'Atender demandas complexas de pós-venda',
          'Acompanhar e resolver casos críticos',
          'Orientar a equipe e documentar melhorias'
        ],
        requirements: [
          'Superior em andamento ou completo em áreas de humanas ou administração'
        ],
        desiredCourses: [
          'Excelência no Atendimento ao Cliente',
          'Técnicas Avançadas de Resolução de Problemas'
        ],
        mandatoryTraining: [
          'Uso Avançado do Sistema de CRM',
          'Procedimentos de Qualidade no Atendimento'
        ]
      },
      {
        id: 'post-sales-3',
        title: 'Assistente de Back Office Pleno',
        level: 'Pleno',
        qualifications: [
          'Analisar e solucionar solicitações de média complexidade',
          'Suporte à equipe em tarefas operacionais',
          'Manter registros precisos de atendimentos'
        ],
        requirements: [
          'Ensino médio completo, desejável superior em andamento'
        ],
        desiredCourses: [
          'Atendimento ao Cliente',
          'Processos de Pós-Venda'
        ],
        mandatoryTraining: [
          'Sistema de Atendimento',
          'Políticas de Pós-Venda'
        ]
      },
      {
        id: 'post-sales-4',
        title: 'Assistente de Back Office Júnior',
        level: 'Junior',
        qualifications: [
          'Realizar registros, triagens e acompanhamento inicial de demandas',
          'Encaminhar solicitações para outros níveis',
          'Auxiliar nas atividades administrativas do setor'
        ],
        requirements: [
          'Ensino médio completo'
        ],
        desiredCourses: [
          'Atendimento ao Cliente Básico',
          'Noções de CRM'
        ],
        mandatoryTraining: [
          'Introdução ao Sistema de CRM',
          'Procedimentos Básicos de Pós-Venda'
        ]
      }
    ]
  }
];
