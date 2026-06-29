import blog1 from "/public/blog-1.jpg";
import blog2 from "/public/blog-2.jpg";
import blog3 from "/public/blog-3.jpg";
import blog4 from "/public/blog-4.jpg";
import blog5 from "/public/blog-5.jpg";
import blog6 from "/public/blog-6.jpg";

export type Blog = {
  id: number;
  image: string;
  alt: string;
  href: string;
  category: string;
  date: string;
  dateTime: string;
  title: string;
  description: string;
};

export const BLOGS: Blog[] = [
  {
    id: 1,
    image: blog1,
    alt: "Design conferences in 2022",
    href: "#",
    category: "Design",
    date: "Fab 23, 2022",
    dateTime: "2022-02-23",
    title: "Design conferences in 2022",
    description:
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    id: 2,
    image: blog2,
    alt: "Best fonts every designer",
    href: "#",
    category: "Design",
    date: "Fab 23, 2022",
    dateTime: "2022-02-23",
    title: "Best fonts every designer",
    description:
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    id: 3,
    image: blog3,
    alt: "Design digest #80",
    href: "#",
    category: "Design",
    date: "Fab 23, 2022",
    dateTime: "2022-02-23",
    title: "Design digest #80",
    description:
      "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    id: 4,
    image: blog4,
    alt: "UI interactions of the week",
    href: "#",
    category: "Design",
    date: "Fab 23, 2022",
    dateTime: "2022-02-23",
    title: "UI interactions of the week",
    description:
      "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    id: 5,
    image: blog5,
    alt: "The forgotten art of spacing",
    href: "#",
    category: "Design",
    date: "Fab 23, 2022",
    dateTime: "2022-02-23",
    title: "The forgotten art of spacing",
    description:
      "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    image: blog6,
    alt: "Design digest #79",
    href: "#",
    category: "Design",
    date: "Fab 23, 2022",
    dateTime: "2022-02-23",
    title: "Design digest #79",
    description:
      "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];
