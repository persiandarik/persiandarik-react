import project2 from "/public/project-2.png";
import project3 from "/public/project-3.jpg";
import project4 from "/public/project-4.png";
import project5 from "/public/project-5.png";
import project6 from "/public/project-6.png";
import project7 from "/public/project-7.png";
import project8 from "/public/project-8.jpg";
import project9 from "/public/project-9.png";
import project1 from "/public/project-Portfolio-Photographer.png";

export const PROJECT_CATEGORIES = [
  "All",
  "Web design",
  "Applications",
  "Web development",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  image: string;
  href: string;
  alt: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Photographer",
    category: "Web development",
    image: project1,
    href: "https://persiandarik.github.io/Portfolio-Photographer/",
    alt: "Portfolio website",
  },
  {
    id: 2,
    title: "Orizon",
    category: "Web development",
    image: project2,
    href: "#",
    alt: "Orizon",
  },
  {
    id: 3,
    title: "Fundo",
    category: "Web design",
    image: project3,
    href: "#",
    alt: "Fundo",
  },
  {
    id: 4,
    title: "Brawlhalla",
    category: "Applications",
    image: project4,
    href: "#",
    alt: "Brawlhalla",
  },
  {
    id: 5,
    title: "DSM.",
    category: "Web design",
    image: project5,
    href: "#",
    alt: "DSM",
  },
  {
    id: 6,
    title: "MetaSpark",
    category: "Web design",
    image: project6,
    href: "#",
    alt: "MetaSpark",
  },
  {
    id: 7,
    title: "Summary",
    category: "Web development",
    image: project7,
    href: "#",
    alt: "Summary",
  },
  {
    id: 8,
    title: "Task Manager",
    category: "Applications",
    image: project8,
    href: "#",
    alt: "Task Manager",
  },
  {
    id: 9,
    title: "Arrival",
    category: "Web development",
    image: project9,
    href: "#",
    alt: "Arrival",
  },
];
