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
          I'm Creative Director and UI/UX Designer from Qom, Iran, working in
          web development and print media. I enjoy turning complex problems into
          simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
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
