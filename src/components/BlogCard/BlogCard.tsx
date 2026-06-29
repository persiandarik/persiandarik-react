import type { ReactNode } from "react";

import clsx from "clsx";

import type { Blog } from "@/data/blogs";

import styles from "./BlogCard.module.css";

type Props = Omit<Blog, "id">;

export default function BlogCard({
  image,
  alt,
  href,
  category,
  date,
  dateTime,
  title,
  description,
}: Props): ReactNode {
  return (
    <li className={styles["blog-post-item"]}>
      <a href={href}>
        <figure className={styles["blog-banner-box"]}>
          <img src={image} alt={alt} loading="lazy" />
        </figure>

        <div className={styles["blog-content"]}>
          <div className={styles["blog-meta"]}>
            <p className={styles["blog-category"]}>{category}</p>

            <span className={styles.dot} />

            <time dateTime={dateTime}>{date}</time>
          </div>

          <h3 className={clsx(styles["blog-item-title"], styles.h3)}>
            {title}
          </h3>

          <p className={styles["blog-text"]}>{description}</p>
        </div>
      </a>
    </li>
  );
}
