import { type ReactNode, useRef, useState } from "react";

import clsx from "clsx";

import ServiceCard from "@/components/ServiceCard/ServiceCard.tsx";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard.tsx";
import TestimonialsModal from "@/components/TestimonialsModal/TestimonialsModal.tsx";

import { CLIENTS } from "@/data/clients.ts";
import { SERVICES } from "@/data/services.ts";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials.ts";

import styles from "./About.module.css";

export default function About(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [selected, setSelected] = useState<Testimonial | null>(null);

  const handleOpenModalClick = (testimonial: Testimonial): void => {
    setSelected(testimonial);
    dialogRef.current?.showModal();
  };

  return (
    <article className={styles.about}>
      <header>
        <h2 className={clsx(styles["article-title"], styles.h2)}>About me</h2>
      </header>

      <section className={styles["about-text"]}>
        <p>
          React Front-End Developer passionate about building modern web
          applications
        </p>
        <p>
          I'm a self-taught Front-End Developer focused on building modern,
          responsive, and maintainable web applications using React and
          TypeScript. I enjoy transforming ideas into interactive user
          experiences and continuously improving my skills through real-world
          projects and challenges.
        </p>
      </section>

      <section className={styles.service}>
        <h3 className={clsx(styles.h3, styles["service-title"])}>
          What I'm doing
        </h3>

        <ul className={styles["service-list"]}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </ul>
      </section>

      <section className={styles.testimonials}>
        <h3 className={clsx(styles.h3, styles["testimonials-title"])}>
          Testimonials
        </h3>

        <ul className={clsx(styles["testimonials-list"], "has-scrollbar")}>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              onClick={() => handleOpenModalClick(testimonial)}
            />
          ))}
        </ul>
      </section>

      <section className={styles.clients}>
        <h3 className={clsx(styles.h3, styles["clients-title"])}>Clients</h3>

        <ul className={clsx(styles["clients-list"], "has-scrollbar")}>
          {CLIENTS.map((client) => (
            <li key={client.id} className={styles["clients-item"]}>
              <a href={client.href}>
                <img src={client.logo} alt={client.alt} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <TestimonialsModal ref={dialogRef} testimonial={selected} />
    </article>
  );
}
