"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

function LangToggle({ className }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`${styles.langToggle} ${className || ""}`} role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "en" ? styles.langActive : ""}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === "ja" ? styles.langActive : ""}
        aria-pressed={lang === "ja"}
        onClick={() => setLang("ja")}
      >
        日本語
      </button>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].nav;

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
          <a href="#about">{t.about}</a>
          <a href="#works">{t.works}</a>
          <a href="#contact">{t.contact}</a>
          <LangToggle />
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
        <a href="#about" onClick={close}>{t.about}</a>
        <a href="#works" onClick={close}>{t.works}</a>
        <a href="#contact" onClick={close}>{t.contact}</a>
        <LangToggle className={styles.langToggleMobile} />
      </div>
    </nav>
  );
}
