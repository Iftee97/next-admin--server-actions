"use client"

import { usePathname } from "next/navigation"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md"
import styles from "./navbar.module.css"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        {pathname.split("/")[1]}
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <MdOutlineChat size={20} className={styles.icon} />
          <MdNotifications size={20} className={styles.icon} />
          <MdPublic size={20} className={styles.icon} />
        </div>
      </div>
    </nav>
  )
}
