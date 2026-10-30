import { useEffect } from "react";
import {
  X,
  Github,
  ExternalLink,
  BrainCircuit,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0e121a] p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-semibold text-emerald-400">
            PROJECT /{project.number}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
            {project.badge}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-400">{project.category}</span>
          {project.period && (
            <>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                <Calendar size={12} className="text-emerald-400" />
                {project.period}
              </span>
            </>
          )}
        </div>

        {/* Title & Tagline */}
        <h2 id="modal-title" className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
          {project.title}
        </h2>
        <p className="mt-1 text-sm font-medium text-emerald-300">{project.tagline}</p>

        {/* Overview */}
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          {project.overview}
        </p>

        {/* Problem vs Solution Split */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
              <AlertCircle size={15} />
              <span>Problem Statement</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-zinc-300">
              {project.problem}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 size={15} />
              <span>Engineering Solution</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-zinc-300">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Pipeline */}
        {project.architecture && (
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              <Layers size={14} className="text-cyan-400" />
              <span>System Pipeline Architecture</span>
            </h4>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {project.architecture.map((arch, idx) => (
                <div
                  key={arch.step}
                  className="rounded-xl border border-white/[0.08] bg-black/30 p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-[10px] font-bold text-cyan-300">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-white">{arch.step}</span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-400 pl-7">
                    {arch.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features / Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Core Technical Features & Highlights
          </h4>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Technology Stack
          </h4>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <Github size={15} />
                <span>View Source Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-emerald-400"
              >
                <ExternalLink size={15} />
                <span>Live Demonstration</span>
              </a>
            )}
            {!project.demo && project.inProgress && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <Sparkles size={13} className="text-emerald-400" />
                Active Engineering Build
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
