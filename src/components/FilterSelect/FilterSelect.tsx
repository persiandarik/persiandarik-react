import { type ReactNode, useState } from "react";

import clsx from "clsx";

import { IoChevronDown } from "react-icons/io5";

import { PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";

import styles from "./FilterSelect.module.css";

type Props = {
  selected: ProjectCategory;
  onSelect: (category: ProjectCategory) => void;
};

export default function FilterSelect({ selected, onSelect }: Props): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category: ProjectCategory): void => {
    onSelect(category);
    setIsOpen(false);
  };

  return (
    <div className={styles["filter-select-box"]}>
      <button
        className={clsx(styles["filter-select"], isOpen && styles.active)}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={styles["select-value"]}>{selected}</div>

        <div className={styles["select-icon"]}>
          <IoChevronDown className={styles["ion-icon"]} />
        </div>
      </button>

      <ul className={clsx(styles["select-list"], isOpen && styles.active)}>
        {PROJECT_CATEGORIES.map((category) => (
          <li key={category} className={styles["select-item"]}>
            <button onClick={() => handleSelect(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
