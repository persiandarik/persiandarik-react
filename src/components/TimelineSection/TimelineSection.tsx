import type { ReactNode } from "react";

import clsx from "clsx";

import { IoBookOutline } from "react-icons/io5";

import type { TimelineItem } from "@/data/timeline";

import styles from "./TimelineSection.module.css";

type Props = {
  title: string;
  items: TimelineItem[];
};

export default function TimelineSection({ title, items }: Props): ReactNode {
  return (
    <section className={styles.timeline}>
      <div className={styles["title-wrapper"]}>
        <div className={styles["icon-box"]}>
          <IoBookOutline className={styles["ion-icon"]} />
        </div>

        <h3 className={styles.h3}>{title}</h3>
      </div>

      <ol className={styles["timeline-list"]}>
        {items.map((item) => (
          <li key={item.id} className={styles["timeline-item"]}>
            <h4 className={clsx(styles["timeline-item-title"], styles.h4)}>
              {item.title}
            </h4>

            <span>{item.period}</span>

            <p className={styles["timeline-text"]}>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
