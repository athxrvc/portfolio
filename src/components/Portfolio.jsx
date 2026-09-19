import Header from "./layout/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";

const Portfolio = () => (
  <div className="mx-auto max-w-4xl px-6">
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </main>
    <footer className="flex items-center justify-between border-t border-line py-8 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Atharva</span>
      <a href="#top" className="transition-colors hover:text-accent">
        Back to top ↑
      </a>
    </footer>
  </div>
);

export default Portfolio;
