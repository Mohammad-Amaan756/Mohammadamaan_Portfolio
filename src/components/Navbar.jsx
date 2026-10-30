import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
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
    { name: "Credentials", href: "#certifications" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#d4a574]/15 py-3.5"
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
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a574]/40 bg-[#171615] font-serif text-base font-semibold italic text-[#d4a574] transition group-hover:border-[#d4a574] group-hover:bg-[#d4a574]/10 shadow-sm">
            <span>MA</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#d4a574] ring-2 ring-[#0f0f0f]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-medium tracking-tight text-[#e8e4df] group-hover:text-[#d4a574] transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#9a9590]">
              Data Science & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-wide text-[#9a9590] transition-colors hover:text-[#d4a574]"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-[#9a9590]/30 bg-transparent px-4 py-2 text-xs font-medium text-[#e8e4df] transition hover:border-[#d4a574]/60 hover:text-[#d4a574] hover:bg-[#d4a574]/5"
          >
            <FileText size={13} className="text-[#d4a574]" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#d4a574] px-5 py-2 text-xs font-semibold text-[#0f0f0f] transition hover:bg-[#c9b896] shadow-sm hover:shadow-md"
          >
            Contact
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full border border-white/10 p-2 text-[#e8e4df] transition hover:border-[#d4a574]/40 hover:bg-white/5 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#d4a574]/15 bg-[#121110]/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-[#9a9590] hover:text-[#d4a574] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
              <a
                href={profileData.resume}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-[#9a9590]/30 py-2.5 text-xs font-medium text-[#e8e4df]"
              >
                <FileText size={14} className="text-[#d4a574]" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#d4a574] py-2.5 text-xs font-semibold text-[#0f0f0f]"
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
