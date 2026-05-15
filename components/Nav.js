"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary">
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top">Tatsuya Ogawa</a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
