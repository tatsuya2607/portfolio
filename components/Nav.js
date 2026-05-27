"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary">
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top" onClick={close}>Tatsuya Ogawa</a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
      >
        <a href="#about" onClick={close}>About</a>
        <a href="#works" onClick={close}>Works</a>
        <a href="#contact" onClick={close}>Contact</a>
      </div>
    </nav>
  );
}
