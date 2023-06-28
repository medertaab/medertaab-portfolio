interface Project {
  title: string,
  description: string[],
  technologies: string[],
  url: string,
  github?: string,
  thumbnail: string,
  gradient: string,
  color: string
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
      linear-gradient(150deg, #994bec 0%, transparent 40%),
      linear-gradient(30deg, #8a52fa 0%, transparent 40%),
      radial-gradient(at 30% 100%, #884ff1 0%, transparent 20%),
      radial-gradient(at 45% 80%, #742bfd 0%, transparent 45%),
      linear-gradient(90deg, #6807E1 0%, #b048f1 70%)
    `,
    color: "#bc4fff"
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
      linear-gradient(70deg,#C9EA4B 20%, #B7EE02 45%, #D9E200 67%)
    `,
    color: "#D9E200"
  },
  {
    title: "Boulangerie",
    description: [
      "Website for local bakery that features pages for landing, product catalog and a list of vendor locations. Implemented with Sanity CMS for data management"
    ],
    technologies: ["Typescript", "NextJS", "Tailwind"],
    url: "https://boulangeriekg.netlify.app/",
    thumbnail: "./thumbnails/boulangerie.jpg",
    gradient: `
      linear-gradient(45deg, #ffe65b 0%, transparent 50%),
      radial-gradient(at 10% 20%, #ffbd22 0px, transparent 50%),
      radial-gradient(at 50% 100%, #ffd03698 0px, transparent 35%),
      linear-gradient(110deg, #ffe6cf 65%, #9465df 100%)
    `,
    color: "rgb(255 223 173)"
  },
];

export default projects;
