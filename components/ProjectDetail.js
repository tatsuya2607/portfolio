"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "../app/works/[slug]/page.module.css";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

function BackLink({ label }) {
  return (
    <Link href="/#works" className={styles.back}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      {label}
    </Link>
  );
}

export default function ProjectDetail({ project }) {
  const { lang } = useLanguage();
  const t = translations[lang].detail;
  const content = project[lang] || project.en;

  // Lightbox: click a gallery image to read it full-size without browser zoom.
  const [zoomed, setZoomed] = useState(null);
  const closeZoom = useCallback(() => setZoomed(null), []);
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => e.key === "Escape" && closeZoom();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed, closeZoom]);

  return (
    <article className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.shell}`}>
        <BackLink label={t.back} />

        <header className={styles.header}>
          <div className={styles.index}>{project.index}</div>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.tagline}>{content.tagline}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className={styles.cta}>
            {project.github && (
              <a className={styles.btnPrimary} href={project.github} target="_blank" rel="noopener noreferrer">
                {t.viewGithub}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            )}
            {project.live && (
              <a className={styles.btnSecondary} href={project.live} target="_blank" rel="noopener noreferrer">
                {t.liveSite}
              </a>
            )}
          </div>
        </header>

        {(project.heroVideo || project.cover) && (
          <figure className={styles.cover}>
            {project.heroVideo ? (
              <video src={project.heroVideo} poster={project.cover} autoPlay loop muted playsInline aria-label={`${content.title} demo`} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.cover} alt={`${content.title} preview`} loading="lazy" />
            )}
          </figure>
        )}

        <section className={styles.section}>
          <div className={styles.eyebrow}>{t.overview}</div>
          {content.overview.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}
        </section>

        {project.media?.length > 0 && (
          <section className={styles.section}>
            <div className={styles.eyebrow}>{t.screenshots}</div>
            <div className={styles.gallery}>
              {project.media.map((m, i) => (
                <figure key={i} className={styles.galleryItem}>
                  {m.type === "video" ? (
                    <video src={m.src} poster={m.poster} autoPlay loop muted playsInline aria-label={m.alt || ""} />
                  ) : (
                    <button
                      type="button"
                      className={styles.galleryZoom}
                      onClick={() => setZoomed(m)}
                      aria-label={`${m.alt || t.screenshots} — ${t.enlarge}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.src} alt={m.alt || ""} loading="lazy" />
                    </button>
                  )}
                  {m.caption && <figcaption>{m.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <div className={styles.eyebrow}>{t.techStack}</div>
          <dl className={styles.stack}>
            {Object.entries(project.stack).map(([group, items]) => (
              <div key={group} className={styles.stackRow}>
                <dt className={styles.stackLabel}>{t.stackGroups[group] || group}</dt>
                <dd className={styles.stackItems}>
                  {items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>{t.keyFeatures}</div>
          <ul className={styles.features}>
            {content.features.map((f) => (
              <li key={f.title} className={styles.feature}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>{t.learnings}</div>
          <ul className={styles.learnings}>
            {content.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>

        <footer className={styles.footerNav}>
          <BackLink label={t.back} />
        </footer>
      </div>

      {zoomed && (
        <div
          className={styles.lightbox}
          onClick={closeZoom}
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt || t.screenshots}
        >
          <button type="button" className={styles.lightboxClose} onClick={closeZoom} aria-label={t.close}>
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zoomed.src}
            alt={zoomed.alt || ""}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  );
}
