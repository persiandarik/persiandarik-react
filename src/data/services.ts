import designIcon from "/public/icon-design.svg";
import devIcon from "/public/icon-dev.svg";

export type Service = {
  id: number;
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: designIcon,
    alt: "Design icon",
    title: "Front-End Development",
    description: "Building modern and responsive web applications .",
  },
  {
    id: 2,
    icon: devIcon,
    alt: "Web development icon",
    title: "React Development",
    description:
      "Creating reusable components and state using modern tools and libraries.",
  },
];
