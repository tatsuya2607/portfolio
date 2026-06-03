"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Contact.module.css";
import SectionDivider from "./SectionDivider";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

const contacts = [
  {
    label: "Email",
    value: "tatsuyaogawa26@gmail.com",
    href: "mailto:tatsuyaogawa26@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/tatsuya2607",
    href: "https://github.com/tatsuya2607",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  return (
    <section className={styles.contact} id="contact">
      <SectionDivider colorA="rgba(124,58,237,0.55)" colorB="rgba(6,182,212,0.55)" />
      <div className={styles.glow} aria-hidden="true" />
      <motion.div
        ref={ref}
        className={`container ${styles.inner}`}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}>{t.eyebrow}</div>
        <h2 className={styles.heading}>{t.heading.pre}<em>{t.heading.accent}</em>{t.heading.post}</h2>
        <p className={styles.sub}>{t.sub}</p>
        <div className={styles.cards}>
          {contacts.map((c) => (
            <a key={c.label} className={styles.card} href={c.href} target={c.label === "GitHub" ? "_blank" : undefined} rel={c.label === "GitHub" ? "noopener noreferrer" : undefined}>
              <span className={styles.icon}>{c.icon}</span>
              <span className={styles.text}>
                <span className={styles.cardLabel}>{c.label}</span>
                <span className={styles.cardValue}>{c.value}</span>
              </span>
              <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
