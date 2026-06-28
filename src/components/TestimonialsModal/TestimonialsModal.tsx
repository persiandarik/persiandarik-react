import {
  type AnimationEvent,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  useState,
} from "react";

import clsx from "clsx";

import { IoCloseOutline } from "react-icons/io5";

import type { Testimonial } from "@/data/testimonials.ts";

import styles from "./TestimonialsModal.module.css";

type Props = ComponentProps<"dialog"> & {
  ref: RefObject<HTMLDialogElement | null>;
  testimonial: Omit<Testimonial, "id"> | null;
};

export default function TestimonialsModal({
  ref,
  testimonial,
  className,
  onClick,
  ...otherProps
}: Props): ReactNode {
  const [isClosing, setIsClosing] = useState(false);

  const handleAnimationEnd = (e: AnimationEvent<HTMLDialogElement>): void => {
    if (e.target !== e.currentTarget || !isClosing) return;

    ref.current?.close();
    setIsClosing(false);
  };

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      setIsClosing(true);
    }

    onClick?.(e);
  };

  const handleCloseButtonClick = (): void => {
    setIsClosing(true);
  };

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, isClosing && styles.closing, className)}
      onClick={handleDialogClick}
      onAnimationEnd={handleAnimationEnd}
      {...otherProps}
    >
      {/* overlay */}
      {/*<div className={styles.overlay} />*/}

      {/* modal */}
      <section className={styles["testimonials-modal"]}>
        <button
          className={styles["modal-close-btn"]}
          onClick={handleCloseButtonClick}
        >
          <IoCloseOutline className={styles["ion-icon"]} />
        </button>

        <div className={styles["modal-img-wrapper"]}>
          <figure className={styles["modal-avatar-box"]}>
            <img src={testimonial?.avatar} alt={testimonial?.name} />
          </figure>

          <img src="/public/icon-quote.svg" alt="quote icon" />
        </div>

        <div className={styles["modal-content"]}>
          <h4 className={clsx(styles["modal-title"], styles.h3)}>
            {testimonial?.name}
          </h4>

          {testimonial?.date && (
            <time dateTime={testimonial.date}>{testimonial.date}</time>
          )}

          <div className={styles["modal-text"]}>
            <p>{testimonial?.text}</p>
          </div>
        </div>
      </section>
    </dialog>
  );
}
