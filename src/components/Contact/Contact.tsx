"use no memo";
import type { ReactNode } from "react";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import clsx from "clsx";

import { supabase } from "@/lib/supabase.ts";
import { IoPaperPlane } from "react-icons/io5";

import {
  type ContactFormData,
  contactSchema,
} from "@/schemas/contact-schema.ts";

import styles from "./Contact.module.css";

export default function Contact(): ReactNode {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    try {
      const { error } = await supabase.from("contacts").insert({
        name: data.fullName,
        email: data.email,
        message: data.message,
      });

      if (error) {
        setSuccessMessage("❌ Failed to send message. Please try again.");
      }

      setSuccessMessage("✅ Message sent successfully");

      reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error(error);

      setSuccessMessage("❌ Failed to send message");
    }
  };

  return (
    <article className={styles.contact}>
      <header>
        <h2 className={clsx(styles["article-title"], styles.h2)}>Contact</h2>
      </header>

      <section className={styles.mapbox}>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d52522.856118927135!2d50.8728867!3d34.6375638!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1689579279225!5m2!1sfa!2s"
            width="400"
            height="300"
            loading="lazy"
          />
        </figure>
      </section>

      <section className={styles["contact-form"]}>
        <h3 className={clsx(styles["form-title"], styles.h3)}>
          {successMessage || "Contact Form"}
        </h3>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["input-wrapper"]}>
            <div>
              <input
                type="text"
                placeholder="Full name"
                className={styles["form-input"]}
                {...register("fullName")}
              />
              <span className={styles.error}>
                {errors.fullName?.message || "\u00A0"}
              </span>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                className={styles["form-input"]}
                {...register("email")}
              />
              <span className={styles.error}>
                {errors.email?.message || "\u00A0"}
              </span>
            </div>
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              className={styles["form-input"]}
              rows={7}
              {...register("message")}
            />
            <span className={styles.error}>
              {errors.message?.message || "\u00A0"}
            </span>
          </div>

          <button
            className={clsx(
              styles["form-btn"],
              isValid && styles["form-btn-active"],
            )}
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            <IoPaperPlane className={styles["ion-icon"]} />

            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
