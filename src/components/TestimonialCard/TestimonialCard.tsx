import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./TestimonialCard.module.css";

type Props = {
  avatar: string;
  name: string;
  text: string;
  onClick?: () => void;
};

export default function TestimonialCard({
  avatar,
  name,
  text,
  onClick,
}: Props): ReactNode {
  return (
    <li className={styles["testimonials-item"]} onClick={onClick}>
      <div className={styles["content-card"]}>
        <figure className={styles["testimonials-avatar-box"]}>
          <img src={avatar} alt={name} />
        </figure>

        <h4 className={clsx(styles.h4, styles["testimonials-item-title"])}>
          {name}
        </h4>

        <div className={styles["testimonials-text"]}>
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
}
