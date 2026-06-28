import type { ReactNode } from "react";

import styles from "./Blog.module.css";

export default function Blog(): ReactNode {
  return <article className={styles.blog}></article>;
}
