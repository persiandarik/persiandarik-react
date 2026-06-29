import type { ReactNode } from "react";

import clsx from "clsx";

import BlogCard from "@/components/BlogCard/BlogCard";

import { BLOGS } from "@/data/blogs";

import styles from "./Blog.module.css";

export default function Blog(): ReactNode {
  return (
    <article className={styles.blog}>
      <header>
        <h2 className={clsx(styles["article-title"], styles.h2)}>Blog</h2>
      </header>

      <section className={styles["blog-posts"]}>
        <ul className={styles["blog-posts-list"]}>
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </ul>
      </section>
    </article>
  );
}
