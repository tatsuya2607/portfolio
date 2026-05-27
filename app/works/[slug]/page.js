import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Tatsuya Ogawa`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.shell}`}>
        <Link href="/#works" className={styles.back}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Works
        </Link>

        <header className={styles.header}>
          <div className={styles.index}>{project.index}</div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className={styles.cta}>
            {project.github && (
              <a className={styles.btnPrimary} href={project.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            )}
            {project.live && (
              <a className={styles.btnSecondary} href={project.live} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            )}
          </div>
        </header>

        {project.cover && (
          <figure className={styles.cover}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={`${project.title} preview`} loading="lazy" />
          </figure>
        )}

        <section className={styles.section}>
          <div className={styles.eyebrow}>— Overview</div>
          {project.overview.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}
        </section>

        {project.media?.length > 0 && (
          <section className={styles.section}>
            <div className={styles.eyebrow}>— Screenshots</div>
            <div className={styles.gallery}>
              {project.media.map((m, i) => (
                <figure key={i} className={styles.galleryItem}>
                  {m.type === "video" ? (
                    <video
                      src={m.src}
                      poster={m.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={m.alt || ""}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.src} alt={m.alt || ""} loading="lazy" />
                  )}
                  {m.caption && <figcaption>{m.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <div className={styles.eyebrow}>— Tech Stack</div>
          <dl className={styles.stack}>
            {Object.entries(project.stack).map(([group, items]) => (
              <div key={group} className={styles.stackRow}>
                <dt className={styles.stackLabel}>{group}</dt>
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
          <div className={styles.eyebrow}>— Key Features</div>
          <ul className={styles.features}>
            {project.features.map((f) => (
              <li key={f.title} className={styles.feature}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>— What I Took Away</div>
          <ul className={styles.learnings}>
            {project.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>

        <footer className={styles.footerNav}>
          <Link href="/#works" className={styles.back}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Works
          </Link>
        </footer>
      </div>
    </article>
  );
}
