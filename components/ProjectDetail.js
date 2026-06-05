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

  // Lightbox: a photobook-style viewer — click the hero or a screenshot to open
  // it full screen, browse with arrows/keys/thumbnails, and click an image to
  // zoom in for detail. The hero video is the first "page" of the collection.
  const slides = [
    ...(project.heroVideo
      ? [{ type: "video", src: project.heroVideo, poster: project.cover, alt: `${content.title} demo` }]
      : []),
    ...(project.media || []).filter((m) => m.type === "image"),
  ];
  const [lbIndex, setLbIndex] = useState(null);
  const [lbZoom, setLbZoom] = useState(false);
  const lbOpen = lbIndex !== null;
  const current = lbOpen ? slides[lbIndex] : null;

  const closeLb = useCallback(() => setLbIndex(null), []);
  const goTo = useCallback(
    (i) => {
      setLbZoom(false);
      setLbIndex((i + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") goTo(lbIndex - 1);
      else if (e.key === "ArrowRight") goTo(lbIndex + 1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lbOpen, lbIndex, goTo, closeLb]);

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
              <button
                type="button"
                className={styles.heroZoom}
                onClick={() => goTo(0)}
                aria-label={`${content.title} demo — ${t.enlarge}`}
              >
                <video src={project.heroVideo} poster={project.cover} autoPlay loop muted playsInline />
                <span className={styles.heroHint} aria-hidden="true">⤢</span>
              </button>
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
                      onClick={() => goTo(slides.indexOf(m))}
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

      {lbOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLb}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt || t.screenshots}
        >
          <button type="button" className={styles.lightboxClose} onClick={closeLb} aria-label={t.close}>
            ×
          </button>

          {slides.length > 1 && (
            <div className={styles.lightboxCount} onClick={(e) => e.stopPropagation()}>
              {lbIndex + 1} / {slides.length}
            </div>
          )}

          {slides.length > 1 && (
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => { e.stopPropagation(); goTo(lbIndex - 1); }}
              aria-label={t.prev}
            >
              ‹
            </button>
          )}

          <div
            className={`${styles.lightboxStage} ${lbZoom ? styles.lightboxStageZoom : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                poster={current.poster}
                className={styles.lightboxVideo}
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={current.src}
                alt={current.alt || ""}
                className={`${styles.lightboxImg} ${lbZoom ? styles.lightboxImgZoom : ""}`}
                onClick={() => setLbZoom((z) => !z)}
                title={lbZoom ? t.close : t.enlarge}
              />
            )}
          </div>

          {slides.length > 1 && (
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => { e.stopPropagation(); goTo(lbIndex + 1); }}
              aria-label={t.next}
            >
              ›
            </button>
          )}

          {slides.length > 1 && (
            <div className={styles.lightboxThumbs} onClick={(e) => e.stopPropagation()}>
              {slides.map((m, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.lightboxThumb} ${i === lbIndex ? styles.lightboxThumbActive : ""} ${m.type === "video" ? styles.lightboxThumbVideo : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`${m.alt || t.screenshots} ${i + 1}`}
                  aria-current={i === lbIndex}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.type === "video" ? m.poster : m.src} alt="" loading="lazy" />
                  {m.type === "video" && <span className={styles.lightboxThumbPlay} aria-hidden="true">▶</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
