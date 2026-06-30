const Persiandarik = "/persiandarik-demo.png";
const canban = "/canban-demo.png";
const project2 = "/project-2.png";
const project3 = "/project-3.jpg";
const project4 = "/project-4.png";
const project5 = "/project-5.png";
const project6 = "/project-6.png";
const project7 = "/project-7.png";
const project8 = "/project-8.jpg";
const project9 = "/project-9.png";
const project1 = "/project-Portfolio-Photographer.png";

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
    id: 11,
    title: "Projects Photographer  (Js)",
    category: "Web development",
    image: project1,
    href: "https://github.com/persiandarik/Portfolio-Photographer",
    alt: "Projects website",
  },
  {
    id: 10,
    title: "Canban",
    category: "Web development",
    image: canban,
    href: "https://github.com/persiandarik/Canban",
    alt: "Canban website",
  },
  {
    id: 9,
    title: "Persiandarik",
    category: "Web development",
    image: Persiandarik,
    href: "https://github.com/persiandarik/persiandarik-react",
    alt: "Canban website",
  },
  {
    id: 8,
    title: "In Progress",
    category: "Web development",
    image: project2,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 7,
    title: "In Progress",
    category: "Web design",
    image: project3,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 6,
    title: "In Progress",
    category: "Applications",
    image: project4,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 5,
    title: "In Progress",
    category: "Web design",
    image: project5,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 4,
    title: "In Progress",
    category: "Web design",
    image: project6,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 3,
    title: "In Progress",
    category: "Web development",
    image: project7,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 2,
    title: "In Progress",
    category: "Applications",
    image: project8,
    href: "#",
    alt: "In Progress",
  },
  {
    id: 1,
    title: "In Progress",
    category: "Web development",
    image: project9,
    href: "#",
    alt: "In Progress",
  },
];
