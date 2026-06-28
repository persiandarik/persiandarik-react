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
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    id: 2,
    icon: devIcon,
    alt: "Web development icon",
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
  },
];
