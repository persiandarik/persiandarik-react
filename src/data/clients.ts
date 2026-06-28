import logo1 from "/public/logo-1-color.png";
import logo2 from "/public/logo-2-color.png";
import logo3 from "/public/logo-3-color.png";
import logo4 from "/public/logo-4-color.png";
import logo5 from "/public/logo-5-color.png";
import logo6 from "/public/logo-6-color.png";

export type Client = {
  id: number;
  logo: string;
  href: string;
  alt: string;
};

export const CLIENTS: Client[] = [
  {
    id: 1,
    logo: logo1,
    href: "#",
    alt: "Client logo 1",
  },
  {
    id: 2,
    logo: logo2,
    href: "#",
    alt: "Client logo 2",
  },
  {
    id: 3,
    logo: logo3,
    href: "#",
    alt: "Client logo 3",
  },
  {
    id: 4,
    logo: logo4,
    href: "#",
    alt: "Client logo 4",
  },
  {
    id: 5,
    logo: logo5,
    href: "#",
    alt: "Client logo 5",
  },
  {
    id: 6,
    logo: logo6,
    href: "#",
    alt: "Client logo 6",
  },
];
