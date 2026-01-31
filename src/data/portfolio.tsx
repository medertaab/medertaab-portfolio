import { Category, Project, SocialLink } from '@component/types/portfolio';

export const COLORS = {
  black: '#0A0A0A',
  blue: '#002BFE',
  cream: '#FAF9F6',
};

export const PROJECTS: Project[] = [
  {
    id: 's1',
    category: Category.SOFTWARE,
    title: 'Arcane Engine',
    year: '2023',
    description: 'A custom WebGL rendering engine built for performance and artistic fidelity. Features a node-based shader graph and real-time ray-marching capabilities.',
    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200'
    ],
    link: 'https://github.com'
  },
  {
    id: 's2',
    category: Category.SOFTWARE,
    title: 'Flux Orchestrator',
    year: '2024',
    description: 'Distributed system management dashboard using Next.js and Go. Visualizing complex microservice relationships with D3.js force-directed graphs.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    ],
    link: 'https://github.com'
  },
  {
    id: 'd1',
    category: Category.DESIGN,
    title: 'Neon Nomad Brand',
    year: '2022',
    description: 'Visual identity system for a futuristic apparel brand. Combining Bauhaus principles with cyber-urban aesthetics.',
    images: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'i1',
    category: Category.ILLUSTRATION,
    title: 'Midnight Chronicles',
    year: '2021',
    description: 'A series of detailed linework illustrations exploring urban loneliness. Published as a limited edition risograph zine.',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'EMAIL', url: 'mailto:hello@medertaab.com' },
  { label: 'LINKEDIN', url: 'https://linkedin.com/in/medertaab' },
  { label: 'GITHUB', url: 'https://github.com/medertaab' }
];
