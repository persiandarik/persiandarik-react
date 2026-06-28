import type { ReactNode } from "react";

import clsx from "clsx";

import { FaWhatsapp } from "react-icons/fa6";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoTumblr,
  IoLogoTwitter,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

import styles from "./SidebarInfoMore.module.css";

interface SidebarInfoMoreProps {
  sidebarActive: boolean;
}

export default function SidebarInfoMore({
  sidebarActive,
}: SidebarInfoMoreProps): ReactNode {
  const contacts = [
    {
      icon: IoMailOutline,
      title: "Email",
      content: "mailto",
      value: "persiandarik@gmail.com",
      display: "persiandarik@gmail.com",
    },
    {
      icon: IoPhonePortraitOutline,
      title: "Phone",
      content: "tel",
      value: "+989351622522",
      display: "+98 935 162 2522",
    },
    {
      icon: IoCalendarOutline,
      title: "Birthday",
      value: "1993-12-01",
      display: "December 1, 1993",
      isTime: true,
    },
    {
      icon: IoLocationOutline,
      title: "Location",
      display: "Kalhori, Qom, IRAN",
      isAddress: true,
    },
  ];

  const socialLinks = [
    {
      icon: IoLogoTumblr,
      href: "https://t.me/persiandarik",
    },
    {
      icon: IoLogoTwitter,
      href: "https://twitter.com/persiandarik",
    },
    {
      icon: IoLogoGithub,
      href: "https://github.com/persiandarik",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/qr/PUYF6SVCPCKAJ1",
    },
  ];

  return (
    <div
      className={clsx(
        styles["sidebar-info-more"],
        sidebarActive && styles.active,
      )}
    >
      <div className={styles.separator} />

      <ul className={styles["contacts-list"]}>
        {contacts.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index} className={styles["contact-item"]}>
              <div className={styles["icon-box"]}>
                <Icon className={styles["ion-icon"]} />
              </div>

              <div className={styles["contact-info"]}>
                <p className={styles["contact-title"]}>{item.title}</p>

                {item.content === "mailto" ? (
                  <a
                    href={`mailto:${item.value}`}
                    className={styles["contact-link"]}
                  >
                    {item.display}
                  </a>
                ) : item.content === "tel" ? (
                  <a
                    href={`tel:${item.value}`}
                    className={styles["contact-link"]}
                  >
                    {item.display}
                  </a>
                ) : item.isTime ? (
                  <time dateTime={item.value}>{item.display}</time>
                ) : item.isAddress ? (
                  <address>{item.display}</address>
                ) : (
                  <p>{item.display}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.separator} />

      <ul className={styles["social-list"]}>
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index} className={styles["social-item"]}>
              <a
                href={item.href}
                className={styles["social-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles["ion-icon"]} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
