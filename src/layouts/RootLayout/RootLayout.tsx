import type {ReactNode} from "react";

import {Outlet} from "react-router";
import Sidebar from "@/components/Sidebar/Sidebar.tsx";

import styles from "./RootLayout.module.css";
import Navbar from "@/components/Navbar/Navbar.tsx";

export default function RootLayout(): ReactNode {
  return (
    <div className={styles["root-layout"]}>

      <main>
        <Sidebar/>
        <div className={styles['main-content']}>
          <Navbar/>
          <Outlet/>
        </div>
      </main>
    </div>
  );
}
