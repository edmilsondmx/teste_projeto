import { ITraningByUser } from '../Models/TrainingByUser';

export const TRAININGBYUSER_MOCK: ITraningByUser[] = [
  {
    userId: 1,
    trainings: [
        {
            
            id: 2,
            url: 'https://setcesp.org.br/wp-content/uploads/2019/08/treinamento.jpg',
            title: 'Ingles Basico',
            description:
                'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Inlges o basico.',
            teacher: 'Rodrigo Rosa',
            duration: 70,
            status: 'matriculado',
            category: 'idioma',
            
        },
        {
            id: 7,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
            title: 'Angular: Router',
            description:
              'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
            teacher: 'Ana Petra',
            duration: 80,
            status: 'andamento',
            category: 'programacao',
        },
        {
            id: 10,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
            title: 'typescript',
            description:
              'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
            teacher: 'Carol Souza',
            duration: 80,
            status: 'finalizado',
            category: 'programacao',
        },
    ],
  },
  {
    userId: 2,
    trainings: [
      {
        id: 1,
        url: 'https://certificadocursosonline.com/wp-content/uploads/2018/07/Curso-de-Manutenc%CC%A7a%CC%83o-de-Computadores.jpg',
        title: 'Curso de Manutenção de Computadores',
        description:
          'Architecto eaque consectetur nostrum impedit earum at harum. Reiciendis suscipit soluta, ab, repellat ad',
        teacher: 'Carlos Silva',
        duration: 20,
        status: 'andamento',
        category: 'tecnologia',
      },
    ]
  }
];
