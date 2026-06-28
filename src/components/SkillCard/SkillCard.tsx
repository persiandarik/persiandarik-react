import type { ReactNode } from "react";

import styles from "./SkillCard.module.css";

type Props = {
  title: string;
  percent: number;
};

export default function SkillCard({ title, percent }: Props): ReactNode {
  return (
    <li className={styles["skills-item"]}>
      <div className={styles["title-wrapper"]}>
        <h5>{title}</h5>

        <data value={percent}>{percent}%</data>
      </div>

      <div className={styles["skill-progress-bg"]}>
        <div
          className={styles["skill-progress-fill"]}
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </li>
  );
}
