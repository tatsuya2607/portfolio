"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";
import SectionDivider from "./SectionDivider";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

const skillGroups = [
  { id: "languages", items: ["HTML", "CSS", "JavaScript", "Python", "C++", "Java", "C#", "PHP", "MySQL", "TypeScript"] },
  { id: "frameworks", items: ["React", "Next.js", "Flutter"] },
  { id: "tools", items: ["Git", "VS Code", "Cursor"] },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BadgeGroup({ label, tags, groupIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={styles.stackGroup}>
      <motion.div
        className={styles.stackLabel}
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.div>
      <div className={styles.stackTags}>
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            className="tag"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.35,
              delay: groupIndex * 0.1 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  return (
    <section className={styles.about} id="about">
      <SectionDivider colorA="rgba(124,58,237,0.6)" colorB="rgba(6,182,212,0.6)" />
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.grid}>
          <FadeIn>
            <div className={styles.eyebrow}>{t.eyebrow}</div>
            <h2 className={styles.heading}>
              {t.heading.pre}
              <em>{t.heading.accent}</em>
              {t.heading.post}
            </h2>
            <div className={styles.bio}>
              {t.bio.map((para, i) => (
                <p key={i}>
                  {para.map((seg, j) =>
                    seg.strong ? <strong key={j}>{seg.t}</strong> : <span key={j}>{seg.t}</span>
                  )}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className={styles.stackTitle}>{t.stackTitle}</h3>
            {skillGroups.map((group, i) => (
              <BadgeGroup key={group.id} label={t.groups[group.id]} tags={group.items} groupIndex={i} />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
