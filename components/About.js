"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";
import SectionDivider from "./SectionDivider";

const skills = {
  "Languages & Markup": ["HTML", "CSS", "JavaScript", "Python", "C++"],
  "Frameworks & Libraries": ["React", "Next.js", "Flutter"],
  "Tools": ["Git", "VS Code"],
};

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

function BadgeGroup({ group, tags, groupIndex }) {
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
        {group}
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
  return (
    <section className={styles.about} id="about">
      <SectionDivider colorA="rgba(124,58,237,0.6)" colorB="rgba(6,182,212,0.6)" />
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.grid}>
          <FadeIn>
            <div className={styles.eyebrow}>— About</div>
            <h2 className={styles.heading}>About <em>Me</em></h2>
            <div className={styles.bio}>
              <p>I&apos;m a <strong>frontend developer</strong> with a passion for building modern, visually engaging web experiences.</p>
              <p>Currently completing my <strong>CS degree</strong>, I specialize in <strong>React</strong> and <strong>Next.js</strong> — crafting interfaces where clean code meets thoughtful design.</p>
              <p>I enjoy turning complex ideas into smooth, intuitive products that live on the web.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className={styles.stackTitle}>Tech Stack</h3>
            {Object.entries(skills).map(([group, tags], i) => (
              <BadgeGroup key={group} group={group} tags={tags} groupIndex={i} />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
