import { Category, Project, SocialLink } from '@component/types/portfolio';

export const COLORS = {
  black: '#0A0A0A',
  blue: '#002BFE',
  cream: '#FAF9F6',
};

export const PROJECTS: Project[] = [
  {
    id: 's0',
    category: Category.SOFTWARE,
    title: 'Outtalent (YC S19)',
    description: 'Outtalent is a Y Combinator backed online mentorship and career acceleration platform for software engineers. It features 5 user-facing platforms, including Outtalent Launchpad (educational web app) and TrackTalent (job tracking and application management system). I am currently the main product engineer and work on full-stack development and maintenance, including design, frontend and backend, database management, and APIs.',
    images: [
      '/',
    ],
    image: "./screenshots/software/outtalent_tracktalent.jpg",
    link: 'https://outtalent.com/'
  },
  {
    id: 's1',
    category: Category.SOFTWARE,
    title: 'Boulangerie.kg',
    description: 'Website for local bakery that features a landing page, product catalog and a list of vendor locations. Implemented with Sanity CMS for data management',
    images: [
      '/',
    ],
    image: "./screenshots/software/boulangerie.jpg",
    link: 'https://boulangerie.kg/'
  },
  {
    id: 's2',
    category: Category.SOFTWARE,
    title: 'Rabbit Repair',
    year: '2024',
    description: 'Car repair shop landing page and repair booking system for a local US-based business. Full brand identity and website design creation, including logo, brand colors, typography, copy and website design. Implemented with Next.js, Tailwind CSS, Cal.com and Sanity CMS for data management.',
    image: "./screenshots/software/rabbitrepair.jpg",
    link: 'https://rabbit-repair.com/'
  },
  {
    id: 's3',
    category: Category.SOFTWARE,
    title: 'Calendrier',
    year: '2024',
    description: 'Calendrier is an early stage French startup that provides an event calendar, piecing together key dates from the worlds of art, fashion, design and culture.',
    image: "./screenshots/software/calendrier.jpg",
    link: 'https://calendrierenligne.com/'
  },
  {
    id: 'd1',
    category: Category.DESIGN,
    title: 'Disney Villains',
    description: 'Apparel design for Disney villains, licensed by Disney and printed for a limited time by Threadless.',
    images: [
      "./screenshots/design/disney_1.jpg",
      "./screenshots/design/disney_2.jpg",
    ],
  },
  {
    id: 'd2',
    category: Category.DESIGN,
    title: 'Adventure Time',
    description: 'Print design for Adventure Time, licensed by Cartoon Network and printed for a limited time by Redbubble.',
    images: [
      "./screenshots/design/adventuretime_1.jpg",
      "./screenshots/design/adventuretime_2.jpg",
    ],
  },
  {
    id: 'd3',
    category: Category.DESIGN,
    title: 'Football Navigator',
    description: 'Logo design for Football Navigator, a football camp for young kids, in partneship with Atlético Madrid academy.',
    images: [
      "./screenshots/design/footballnavigator_1.jpg",
      "./screenshots/design/footballnavigator_2.jpg",
    ],
  },
  {
    id: 'i1',
    category: Category.ILLUSTRATION,
    title: 'Avatar: The Last Airbender portrait series',
    description: 'A series of semi-realistic portraits of the characters from Avatar: The Last Airbender. Over 500k+ likes across social media. Featured on Comicbook.com, Deviantart and more.',
    images: [
      "./screenshots/illustration/avatar_1.jpg",
      "./screenshots/illustration/avatar_2.jpg",
      "./screenshots/illustration/avatar_3.jpg",
      "./screenshots/illustration/avatar_4.jpg",

    ],
  },
  {
    id: 'i2',
    category: Category.ILLUSTRATION,
    title: 'Gotham City Sirens character illustrations',
    description: 'A series of character design illustrations for the Gotham City Sirens.',
    images: [
      "./screenshots/illustration/sirens_1.jpg",
      "./screenshots/illustration/sirens_2.jpg",
      "./screenshots/illustration/sirens_3.jpg",
      "./screenshots/illustration/sirens_4.jpg",

    ],
  },
  {
    id: 'i3',
    category: Category.ILLUSTRATION,
    title: 'Fantasy Fashion series',
    description: 'Collection of character design illustrations of the main fantasy classes.',
    images: [
      "./screenshots/illustration/fantasy_1.jpg",
      "./screenshots/illustration/fantasy_2.jpg",
      "./screenshots/illustration/fantasy_3.jpg",
      "./screenshots/illustration/fantasy_4.jpg",
      "./screenshots/illustration/fantasy_5.jpg",
      "./screenshots/illustration/fantasy_6.jpg",
    ],
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'EMAIL', url: 'mailto:medertaab@gmail.com' },
  { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/meder-taab-34195b73/' },
  { label: 'GITHUB', url: 'https://github.com/medertaab' }
];
