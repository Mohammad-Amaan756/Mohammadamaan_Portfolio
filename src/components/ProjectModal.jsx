import { useEffect } from "react";
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Calendar,
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="botanical-card relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#d4a574]/25 bg-[#141312] p-6 sm:p-9 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full border border-white/10 p-2 text-[#9a9590] transition hover:border-[#d4a574] hover:text-[#e8e4df] hover:bg-white/5"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs font-semibold text-[#d4a574]">
            PROJECT /{project.number}
          </span>
          <span className="text-[#9a9590]/40">·</span>
          <span className="rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 px-3 py-0.5 font-mono text-[10px] font-semibold text-[#d4a574]">
            {project.badge}
          </span>
          <span className="text-[#9a9590]/40">·</span>
          <span className="text-xs text-[#9a9590]">{project.category}</span>
          {project.period && (
            <>
              <span className="text-[#9a9590]/40">·</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-[#9a9590]">
                <Calendar size={12} className="text-[#d4a574]" />
                {project.period}
              </span>
            </>
          )}
        </div>

        {/* Title & Tagline */}
        <h2 id="modal-title" className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#e8e4df]">
          {project.title}
        </h2>
        <p className="mt-1 font-serif italic text-sm sm:text-base text-[#d4a574]">
          {project.tagline}
        </p>

        {/* Overview */}
        <p className="mt-4 text-sm leading-relaxed text-[#9a9590]">
          {project.overview}
        </p>

        {/* Problem vs Solution Split */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#c4856a]/25 bg-[#c4856a]/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c4856a]">
              <AlertCircle size={15} />
              <span className="font-mono uppercase tracking-wider">Problem Statement</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#9a9590]">
              {project.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-[#d4a574]/25 bg-[#d4a574]/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4a574]">
              <CheckCircle2 size={15} />
              <span className="font-mono uppercase tracking-wider">Engineering Solution</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#9a9590]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Pipeline */}
        {project.architecture && (
          <div className="mt-7">
            <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#d4a574]">
              <Layers size={14} className="text-[#d4a574]" />
              <span>System Pipeline Architecture</span>
            </h4>
            <div className="mt-3.5 grid gap-3 sm:grid-cols-2">
              {project.architecture.map((arch, idx) => (
                <div
                  key={arch.step}
                  className="rounded-2xl border border-white/[0.08] bg-[#1a1918]/80 p-3.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4a574]/15 font-mono text-[10px] font-bold text-[#d4a574]">
                      {idx + 1}
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#e8e4df]">{arch.step}</span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-[#9a9590] pl-7">
                    {arch.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features / Highlights */}
        <div className="mt-7">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9a9590]">
            Core Technical Highlights
          </h4>
          <ul className="mt-3.5 space-y-2.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#e8e4df]">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#d4a574]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-7">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9a9590]">
            Technology Stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1 font-mono text-xs text-[#9a9590]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#9a9590]/35 bg-transparent px-5 py-2.5 text-xs font-medium text-[#e8e4df] transition hover:border-[#d4a574] hover:text-[#d4a574] hover:bg-[#d4a574]/5"
              >
                <Github size={15} />
                <span>Source Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-5 py-2.5 text-xs font-semibold text-[#0f0f0f] transition hover:bg-[#c9b896]"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-medium text-[#9a9590] hover:text-white"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
