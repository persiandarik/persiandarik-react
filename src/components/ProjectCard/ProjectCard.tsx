import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { IoEyeOutline } from "react-icons/io5";

import type { Project } from "@/data/projects";

import styles from "./ProjectCard.module.css";

type Props = Project;

export default function ProjectCard({
  title,
  category,
  image,
  href,
  alt,
}: Props): ReactNode {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.25 }}
      className={styles["project-item"]}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <figure className={styles["project-img"]}>
          <div className={styles["project-item-icon-box"]}>
            <IoEyeOutline className={styles["ion-icon"]} />
          </div>

          <img src={image} alt={alt} loading="lazy" />
        </figure>

        <h3 className={styles["project-title"]}>{title}</h3>

        <p className={styles["project-category"]}>{category}</p>
      </a>
    </motion.li>
  );
}
