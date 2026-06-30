import avatar1 from "/public/avatar-1.png";
import avatar2 from "/public/avatar-2.png";
import avatar3 from "/public/avatar-3.png";
import avatar4 from "/public/avatar-4.png";

export type Testimonial = {
  id: number;
  date: string;
  avatar: string;
  name: string;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    date: "14 March, 2026",
    avatar: avatar1,
    name: "Daniel Lewis",
    text: '"Amir consistently focuses on writing clean and maintainable code while paying attention to user experience and project structure."',
  },
  {
    id: 2,
    date: "12 April, 2026",
    avatar: avatar2,
    name: "Jessica Miller",
    text: "He is a fast learner who enjoys solving problems and improving his development workflow.",
  },
  {
    id: 3,
    date: "20 June, 2026",
    avatar: avatar3,
    name: "Emily Evans",
    text: "Amir approaches projects with curiosity and continuously explores modern tools and best practices in the React ecosystem.",
  },
  {
    id: 4,
    date: "22 February, 2026",
    avatar: avatar4,
    name: "Henry William",
    text: "Amir was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
  },
];
