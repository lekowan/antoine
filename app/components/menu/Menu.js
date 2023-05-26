"use client";

import { useState } from "react";
import styles from "./menu.module.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.menuWrapper}>
        <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
          X
        </div>
        {open && (
          <ul className={styles.menuUl}>
            <li className={styles.menuListItems}>HTML5 Design + Build</li>
            <li className={styles.menuListItems}>Motion Graphics</li>
            <li className={styles.menuListItems}>User Interface</li>
            <li className={styles.menuListItems}>Contact</li>
          </ul>
        )}
      </div>
    </>
  );
}
