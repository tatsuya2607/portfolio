"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Works.module.css";
import SectionDivider from "./SectionDivider";

const projects = [
  {
    id: "gmail",
    index: "01",
    wordmark: "Gmail AI",
    title: "Gmail AI Reply",
    desc: "Web app that automatically generates email replies using Claude AI. Features multi-account Gmail management, OAuth authentication, and streaming output.",
    tags: ["Next.js", "Claude API", "Gmail API", "TypeScript"],
    href: "#",
  },
  {
    id: "culture",
    index: "02",
    wordmark: "Culture Site",
    title: "Japanese Culture Site",
    desc: "A visually engaging website introducing Japanese culture and traditions, built with modern frontend technologies.",
    tags: ["React", "Tailwind CSS", "Vite"],
    href: "#",
  },
  {
    id: "matcha",
    index: "03",
    wordmark: "Matcha LP",
    title: "Matcha Cafe LP",
    desc: "A landing page for a matcha cafe, focused on clean layout and smooth user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "#",
  },
];

function WorkCard({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.a
      ref={ref}
      href={project.href}
      className={`${styles.card} ${styles[project.id]}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`View project: ${project.title}`}
    >
      <div className={styles.thumb} aria-hidden="true">
        <span className={styles.index}>{project.index}</span>
        <span className={styles.wordmark}>{project.wordmark}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.tags.map((t) => <span key={t} className="tag" style={{ fontSize: "11px", padding: "5px 10px" }}>{t}</span>)}
        </div>
        <span className={styles.link}>
          View Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}

export default function Works() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
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
          <div className={styles.eyebrow}>— Works</div>
          <h2 className={styles.heading}>My <em>Projects</em></h2>
        </motion.div>
        <div className={styles.grid}>
          {projects.map((p, i) => <WorkCard key={p.id} project={p} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
