import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";

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
      <Footer />
    </PageWrapper>
  );
}
