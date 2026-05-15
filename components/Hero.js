"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import TextReveal from "./TextReveal";

function generateStars(count = 140) {
  let seed = 1337;
  const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  return Array.from({ length: count }, (_, i) => {
    const x = rand() * 100;
    const y = rand() * 100;
    const sizeRoll = rand();
    const size = sizeRoll > 0.97 ? 3 : sizeRoll > 0.85 ? 2 : 1;
    const opLo = 0.15 + rand() * 0.2;
    const opHi = Math.min(1, opLo + 0.4 + rand() * 0.4);
    const dur = (2.4 + rand() * 4).toFixed(2);
    const delay = (rand() * 4).toFixed(2);
    const accentRoll = rand();
    let cls = styles.star;
    if (accentRoll < 0.10) cls += " " + (rand() > 0.5 ? styles.starPurple : styles.starCyan);
    else if (accentRoll < 0.18 && size >= 2) cls += " " + styles.starBright;
    return { id: i, x, y, size, opLo, opHi, dur, delay, cls };
  });
}

const stars = generateStars();

export default function Hero() {
  const glowRef = useRef(null);
  const starsRef = useRef(null);
  const mouseOffsetRef = useRef({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const starsScrollY = useTransform(scrollY, [0, 600], [0, -120]);
  const glowScrollY = useTransform(scrollY, [0, 600], [0, -60]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      mouseOffsetRef.current = { x: cx, y: cy };
      if (glowRef.current) glowRef.current.style.transform = `translate(${cx * 14}px, ${cy * 10}px)`;
      raf = (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) ? requestAnimationFrame(tick) : null;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className={styles.hero} id="top" ref={heroRef}>
      <div className={styles.glow} ref={glowRef} aria-hidden="true" />
      <motion.div
        className={styles.stars}
        style={{ y: starsScrollY }}
        aria-hidden="true"
      >
        {stars.map((s) => (
          <span
            key={s.id}
            className={s.cls}
            style={{
              left: s.x + "%", top: s.y + "%",
              width: s.size + "px", height: s.size + "px",
              "--op-lo": s.opLo, "--op-hi": s.opHi,
              "--tw": s.dur + "s", "--td": s.delay + "s",
            }}
          />
        ))}
      </motion.div>
      <div className={styles.horizon} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Frontend Developer
        </motion.div>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Tatsuya Ogawa
        </motion.h1>
        <p className={styles.intro}>
          <TextReveal text="Building digital experiences from the void." by="word" delay={1.0} />
        </p>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className={styles.btnPrimary} href="#works">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a className={styles.btnSecondary} href="#contact">Contact Me</a>
        </motion.div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
