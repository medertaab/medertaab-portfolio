interface Project {
  title: string,
  description: string[],
  technologies: string[],
  url: string,
  github?: string,
  thumbnail: string,
  gradient: string,
  color: string,
  pin: string
}

interface Projects extends Array<Project>{}

const projects: Projects = [
  {
    title: "Portfolder",
    description: [
      "Compact portfolio builder for illustrators, photographers, and other visual creators or curators",
    ],
    technologies: ["Typescript", "NextJS", "Tailwind"],
    url: "https://portfolder.netlify.app/",
    github: "http://",
    thumbnail: "./thumbnails/portfolder0.jpg",
    gradient: `
      linear-gradient(150deg, rgba(153, 71, 241, 0.957) 0%, transparent 40%),
      linear-gradient(30deg, rgba(133, 74, 252, 0.957) 0%, transparent 40%),
      radial-gradient(at 30% 100%, rgba(134, 73, 247, 0.973) 0%, transparent 20%),
      radial-gradient(at 45% 80%, rgba(111, 37, 247, 0.986) 0%, transparent 45%),
      linear-gradient(90deg, #700becf6 0%, rgba(174, 67, 241, 0.973) 70%)

    `,
    color: "#bc4fff",
    pin: "/svg/pin5.svg"
  },
  {
    title: "Quickstretch",
    description: [
      "A stretching web app that enables you to run quick and easy stretching routines to relieve muscle tension. Features custom illustrations, done by me as well.",
      "Also comes as a Google Chrome extension.",
    ],
    technologies: ["Typescript", "Vite", "Styled-Components"],
    url: "https://quickstretch.netlify.app/",
    github: "http://",
    thumbnail: "./thumbnails/quickstretch0.jpg",
    gradient: `
      linear-gradient(70deg,rgba(201, 234, 75, 1) 20%, rgba(183, 238, 2, 1) 45%, rgba(217, 226, 0, 1) 67%)
    `,
    color: "#D9E200",
    pin: "/svg/pin4.svg"
  },
  {
    title: "Boulangerie",
    description: [
      "Website for local bakery that features a landing page, product catalog and a list of vendor locations. Implemented with Sanity CMS for data management"
    ],
    technologies: ["Typescript", "NextJS", "Tailwind"],
    url: "https://boulangerie.kg/",
    thumbnail: "./thumbnails/boulangerie.jpg",
    gradient: `
      linear-gradient(45deg, #ffe65bf2 0%, transparent 50%),
      radial-gradient(at 10% 20%, rgba(255, 189, 34, 0.932) 0px, transparent 50%),
      radial-gradient(at 50% 100%, rgba(255, 208, 54, 0.582) 0px, transparent 35%),
      linear-gradient(110deg, #ffe6cff8 65%, #925de7f2 100%)
    `,
    color: "rgb(255 223 173)",
    pin: "/svg/pin1.svg"
  },
];

export default projects;