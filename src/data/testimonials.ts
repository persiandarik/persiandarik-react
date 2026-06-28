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
    date: "14 June, 2021",
    avatar: avatar1,
    name: "Daniel Lewis",
    text: "Amir was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    id: 2,
    date: "2021-03-12",
    avatar: avatar2,
    name: "Jessica Miller",
    text: "Amir was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
  },
  {
    id: 3,
    date: "2022-06-4",
    avatar: avatar3,
    name: "Emily Evans",
    text: "Amir was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
  },
  {
    id: 4,
    date: "2023-02-1",
    avatar: avatar4,
    name: "Henry William",
    text: "Amir was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
  },
];
