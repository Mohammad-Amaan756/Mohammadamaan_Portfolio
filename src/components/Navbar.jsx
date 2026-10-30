import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c10]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Mohammad Amaan portfolio home"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 font-mono text-sm font-bold text-emerald-400 transition group-hover:border-emerald-400 group-hover:bg-emerald-500/20">
            <span>MA</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#0a0c10]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-400">
              Data Science & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-400 transition-colors hover:text-emerald-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={profileData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-zinc-300 transition hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
          >
            <FileText size={13} className="text-emerald-400" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Contact
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/5 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0c0f15]/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
              <a
                href={profileData.resume}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] py-2.5 text-xs font-semibold text-zinc-200"
              >
                <FileText size={14} className="text-emerald-400" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-xs font-semibold text-black"
              >
                Contact Me
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
