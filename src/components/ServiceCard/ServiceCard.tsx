import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./ServiceCard.module.css";

type Props = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  alt,
  title,
  description,
}: Props): ReactNode {
  return (
    <li className={styles["service-item"]}>
      <div className={styles["service-icon-box"]}>
        <img src={icon} alt={alt} />
      </div>

      <div className={styles["service-content-box"]}>
        <h4 className={clsx(styles.h4, styles["service-item-title"])}>
          {title}
        </h4>

        <p className={styles["service-item-text"]}>{description}</p>
      </div>
    </li>
  );
}
