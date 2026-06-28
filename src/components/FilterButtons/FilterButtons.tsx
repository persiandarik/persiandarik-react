import type { ReactNode } from "react";

import clsx from "clsx";

import { PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";

import styles from "./FilterButtons.module.css";

type Props = {
  selected: ProjectCategory;
  onSelect: (category: ProjectCategory) => void;
};

export default function FilterButtons({
  selected,
  onSelect,
}: Props): ReactNode {
  return (
    <ul className={styles["filter-list"]}>
      {PROJECT_CATEGORIES.map((category) => (
        <li key={category} className={styles["filter-item"]}>
          <button
            className={clsx(selected === category && styles.active)}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
