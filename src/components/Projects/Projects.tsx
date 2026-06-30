import { type ReactNode, useState } from "react";

import clsx from "clsx";

import { AnimatePresence } from "framer-motion";

import FilterButtons from "@/components/FilterButtons/FilterButtons";
import FilterSelect from "@/components/FilterSelect/FilterSelect";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import { PROJECTS, type ProjectCategory } from "@/data/projects";

import styles from "./Projects.module.css";

export default function Projects(): ReactNode {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <article className={styles.Projects}>
      <header>
        <h2 className={clsx(styles["article-title"], styles.h2)}>Projects</h2>
      </header>

      <section className={styles.projects}>
        <FilterButtons
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <FilterSelect
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <ul className={styles["project-list"]}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </ul>
      </section>
    </article>
  );
}
