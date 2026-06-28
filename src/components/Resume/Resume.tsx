import type { ReactNode } from "react";

import clsx from "clsx";

import SkillCard from "@/components/SkillCard/SkillCard";
import TimelineSection from "@/components/TimelineSection/TimelineSection";

import { SKILLS } from "@/data/skills";
import { EDUCATIONS, EXPERIENCES } from "@/data/timeline";

import styles from "./Resume.module.css";

export default function Resume(): ReactNode {
  return (
    <article className={styles.resume}>
      <header>
        <h2 className={clsx(styles["article-title"], styles.h2)}>Resume</h2>
      </header>

      <TimelineSection title="Education" items={EDUCATIONS} />

      <TimelineSection title="Experience" items={EXPERIENCES} />

      <section className={styles.skill}>
        <h3 className={clsx(styles["skills-title"], styles.h3)}>My Skills</h3>

        <ul className={clsx(styles["skills-list"], styles["content-card"])}>
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              percent={skill.percent}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}
