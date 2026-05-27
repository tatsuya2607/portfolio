import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import PageWrapper from "@/components/PageWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageWrapper>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <span className={styles.copy}>© 2026 Tatsuya Ogawa</span>
            <span className={styles.mark}>Built from the void</span>
          </div>
        </div>
      </footer>
    </PageWrapper>
  );
}
