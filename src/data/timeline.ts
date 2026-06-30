export type TimelineItem = {
  id: number;
  title: string;
  period: string;
  description: string;
};

export const EDUCATIONS: TimelineItem[] = [
  {
    id: 1,
    title: "Arak University",
    period: "2012 — 2017",
    description: "Bachelor of Science in Mathematics",
  },
  {
    id: 2,
    title: "High School",
    period: "2008 — 2012",
    description: "Shahed, Qom",
  },
];

export const EXPERIENCES: TimelineItem[] = [
  {
    id: 3,
    title: "React Developer",
    period: "2026 — Present",
    // description: "Digital Currency Trading\nMiner & Graphic Card Installer",
    description:
      "Developed a Kanban-style task management application.\n" +
      "Built a fully responsive personal portfolio website.\n" +
      "Implemented form validation using modern React libraries.\n" +
      "Focused on component reusability and clean architecture principles.",
  },
  {
    id: 2,
    title: "Cryptocurrency Freelancer",
    period: "2020 — Present",
    description: "Digital Currency Trading\nMiner & Graphic Card Installer",
  },
  {
    id: 1,
    title: "Frontend Developer",
    period: "2019 — 2020",
    description: "Shablon Team, Qom",
  },
];
