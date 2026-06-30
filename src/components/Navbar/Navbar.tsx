import type { ReactNode } from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import styles from "./Navbar.module.css";

export default function Navbar(): ReactNode {
  const navLinks = [
    { to: "/", label: "About" },
    { to: "/resume", label: "Resume" },
    { to: "/Projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        {navLinks.map((link) => (
          <li key={link.to} className={styles["navbar-item"]}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                clsx(styles["navbar-link"], isActive && styles.active)
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
