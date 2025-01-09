interface Project {
  title: string;
  description: string[];
  technologies: string[];
  url: string;
  github?: string;
  thumbnail: string;
  gradient: string;
  color: string;
  pin: string;
}

interface Projects extends Array<Project> {}

const projects: Projects = [
  {
    title: "Boulangerie.kg",
    description: [
      "Website for local bakery that features a landing page, product catalog and a list of vendor locations. Implemented with Sanity CMS for data management",
    ],
    technologies: ["Typescript", "NextJS", "Sass"],
    url: "https://boulangerie.kg/",
    thumbnail: "./thumbnails/boulangerie.jpg",
    gradient: `
      linear-gradient(45deg, rgba(255, 230, 91, 1) 0%, rgba(255, 230, 91, 0) 50%),
      radial-gradient(at 10% 20%, rgba(255, 189, 34, 1) 0px, rgba(255, 189, 34, 0) 50%),
      radial-gradient(at 50% 100%, rgba(255, 208, 54, 0.5) 0px, rgba(255, 208, 54, 0) 35%),
      linear-gradient(110deg, rgba(255, 230, 207, 1) 65%, rgba(146, 93, 231, 1) 100%)
    `,
    color: "rgb(255 223 173)",
    pin: "/svg/pin1.svg",
  },
  {
    title: "Portfolder",
    description: [
      "Compact portfolio builder for illustrators, photographers, and other visual creators or curators",
    ],
    technologies: ["Javascript", "NextJS", "Tailwind", "Firebase"],
    url: "https://portfolder.vercel.app/",
    github: "https://github.com/medertaab/portfolder",
    thumbnail: "./thumbnails/portfolder0.jpg",
    gradient: `
      linear-gradient(150deg, rgba(153, 71, 241, 1) 0%, rgba(153, 71, 241, 0) 40%),
      linear-gradient(30deg, rgba(133, 74, 252, 1) 0%, rgba(133, 74, 252, 0) 40%),
      radial-gradient(at 30% 100%, rgba(134, 73, 247, 1) 0%, rgba(134, 73, 247, 0) 20%),
      radial-gradient(at 45% 80%, rgba(111, 37, 247, 1) 0%, rgba(111, 37, 247, 0) 45%),
      linear-gradient(90deg, #700becf6 0%, rgba(174, 67, 241, 1) 70%)

    `,
    color: "#bc4fff",
    pin: "/svg/pin5.svg",
  },
  {
    title: "Quickstretch",
    description: [
      "A stretching web app that enables you to run quick and easy stretching routines to relieve muscle tension. Features custom illustrations, done by me as well.",
    ],
    technologies: ["Typescript", "Vite", "Styled-Components"],
    url: "https://quickstretch.app/",
    github: "https://github.com/medertaab/quickstretch",
    thumbnail: "./thumbnails/quickstretch0.jpg",
    gradient: `
      linear-gradient(70deg,rgba(201, 234, 75, 1) 20%, rgba(183, 238, 2, 1) 45%, rgba(217, 226, 0, 1) 67%)
    `,
    color: "#D9E200",
    pin: "/svg/pin4.svg",
  },
];

export default projects;
