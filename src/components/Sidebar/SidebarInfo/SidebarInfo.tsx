import type { ReactNode } from "react";

import { IoChevronDown } from "react-icons/io5";

import styles from "./SidebarInfo.module.css";

type Props = {
  onClick: () => void;
};

export default function SidebarInfo({ onClick }: Props): ReactNode {
  return (
    <div className={styles["sidebar-info"]}>
      <figure className={styles["avatar-box"]}>
        <img src="/my-avatar-3.png" alt="Amir Ebadi" />
      </figure>

      <div className={styles["info-content"]}>
        <h1 className={styles["name"]} title="Amir Ebadi">
          Amir Ebadi
        </h1>

        <p className={styles["title"]}>Web developer</p>
      </div>

      <button
        className={styles["info_more-btn"]}
        data-sidebar-btn
        onClick={onClick}
      >
        <span>Show Contacts</span>

        <IoChevronDown className={styles["ion-icon"]} />
      </button>
    </div>
  );
}
