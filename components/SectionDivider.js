"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionDivider.module.css";

export default function SectionDivider({ colorA = "rgba(124,58,237,0.6)", colorB = "rgba(6,182,212,0.6)" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={styles.wrapper} aria-hidden="true">
      <motion.div
        className={styles.line}
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${colorA} 38%, ${colorB} 62%, transparent 100%)`,
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={styles.shimmer}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
      />
    </div>
  );
}
