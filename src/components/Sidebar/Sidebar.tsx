import { type ReactNode, useState } from "react";

import clsx from "clsx";

import SidebarInfo from "@/components/Sidebar/SidebarInfo/SidebarInfo.tsx";
import SidebarInfoMore from "@/components/Sidebar/SidebarInfoMore/SidebarInfoMore.tsx";

import styles from "./Sidebar.module.css";

export default function Sidebar(): ReactNode {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = (): void => setSidebarActive(!sidebarActive);

  return (
    <aside className={clsx(styles["sidebar"], sidebarActive && styles.active)}>
      <SidebarInfo onClick={toggleSidebar} />
      <SidebarInfoMore sidebarActive={sidebarActive} />
    </aside>
  );
}
