import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e8e4df] font-sans selection:bg-[#d4a574]/30 selection:text-[#d4a574]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[#d4a574] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#0f0f0f]"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
