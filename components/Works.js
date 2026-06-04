"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import styles from "./Works.module.css";
import SectionDivider from "./SectionDivider";
import { projects as detailedProjects } from "@/lib/projects";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

const MotionLink = motion.create(Link);
const detailById = Object.fromEntries(detailedProjects.map((p) => [p.id, p]));

const cards = [
  { id: "gmail", index: "01", wordmark: "Gmail AI", tags: ["Next.js", "Claude API", "Gmail API", "TypeScript"] },
  { id: "culture", index: "02", wordmark: "JSA Site", tags: ["React", "Vite", "Tailwind CSS", "Firebase"] },
  { id: "matcha", index: "03", wordmark: "Matcha LP", tags: ["Next.js", "TypeScript", "next-intl", "i18n"] },
];

function WorkCard({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tw = translations[lang].works;
  const copy = tw.cards[project.id];
  const detail = detailById[project.id];
  const href = detail ? `/works/${detail.slug}` : null;
  const isLink = !!href;
  const commonProps = {
    ref,
    className: `${styles.card} ${styles[project.id]} ${project.comingSoon ? styles.disabled : ""}`,
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
  const Inner = (
    <>
      <div className={styles.thumb} aria-hidden="true">
        <span className={styles.index}>{project.index}</span>
        <span className={styles.wordmark}>{project.wordmark}</span>
        {project.comingSoon && <span className={styles.comingBadge}>{tw.comingBadge}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{copy.title}</h3>
        <p className={styles.desc}>{copy.desc}</p>
        <div className={styles.tags}>
          {project.tags.map((t) => <span key={t} className="tag" style={{ fontSize: "11px", padding: "5px 10px" }}>{t}</span>)}
        </div>
        {isLink ? (
          <span className={styles.link}>
            {tw.link}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        ) : (
          <span className={`${styles.link} ${styles.linkMuted}`}>{tw.comingLink}</span>
        )}
      </div>
    </>
  );

  if (isLink) {
    return (
      <MotionLink
        {...commonProps}
        href={href}
        aria-label={copy.title}
      >
        {Inner}
      </MotionLink>
    );
  }
  return (
    <motion.div {...commonProps} aria-label={copy.title}>
      {Inner}
    </motion.div>
  );
}

export default function Works() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tw = translations[lang].works;
  return (
    <section className={styles.works} id="works">
      <SectionDivider colorA="rgba(6,182,212,0.5)" colorB="rgba(124,58,237,0.5)" />
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={headRef}
          className={styles.head}
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.eyebrow}>{tw.eyebrow}</div>
          <h2 className={styles.heading}>{tw.heading.pre}<em>{tw.heading.accent}</em>{tw.heading.post}</h2>
        </motion.div>
        <div className={styles.grid}>
          {cards.map((p, i) => <WorkCard key={p.id} project={p} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
