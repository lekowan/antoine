"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <div
        className={[styles.headerContent, styles.purpleBackground].join(" ")}
      >
        <div className={[styles.header, styles.darkPurple].join(" ")}>
          antoine
          <br />
          pommert
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.mainContentWrapper}>
          <div className={[styles.bodyCopy, styles.darkPurple].join(" ")}>
            Hello! My name is Antoine.
            <br />
            I’m a <span className={styles.bold}>digital designer</span> and{" "}
            <span className={styles.bold}>front-end engineer</span> who loves
            bringing ideas to life.
            <br />
            <br />
            <a
              href="#html5"
              className={[styles.cta, styles.purpleCta].join(" ")}
            >
              Scroll down for more &#8595;
            </a>
          </div>
        </div>
      </div>
      <div className={[styles.sayHi, styles.darkPurple].join(" ")}>
        <Link
          className={[styles.sayHiLink, styles.darkPurple].join(" ")}
          href="#hi"
        >
          SAY HI HERE
        </Link>
      </div>
    </section>
  );
}
