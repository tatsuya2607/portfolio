"use client";
import styles from "../app/page.module.css";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <span className={styles.copy}>© 2026 Tatsuya Ogawa</span>
          <span className={styles.mark}>{t.mark}</span>
        </div>
      </div>
    </footer>
  );
}
