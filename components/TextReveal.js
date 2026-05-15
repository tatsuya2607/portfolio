"use client";
import { motion } from "framer-motion";

export default function TextReveal({ text, className, delay = 0, by = "word" }) {
  const items = by === "char" ? text.split("") : text.split(" ");

  return (
    <span
      className={className}
      aria-label={text}
      style={{ display: "inline-flex", flexWrap: "wrap", gap: by === "char" ? "0" : "0.25em" }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.9,
            delay: delay + i * (by === "char" ? 0.025 : 0.07),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item === " " ? " " : item}
        </motion.span>
      ))}
    </span>
  );
}
