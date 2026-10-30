import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  BrainCircuit,
  CheckCircle2,
  Maximize2,
  Workflow,
  Calendar,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const flagshipProjects = projectsData.filter((p) => p.flagship);
  const secondaryProjects = projectsData.filter((p) => !p.flagship);

  return (
    <section id="projects" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      {/* Soft blurred ambient glow */}
      <div
        className="glow-warm pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 opacity-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>03 / FEATURED ENGINEERING BUILDS</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e8e4df] leading-tight">
              Production systems & <br />
              <span className="font-serif italic font-normal text-[#d4a574]">
                verifiable AI pipelines.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#9a9590] sm:text-right">
            Every build demonstrates tangible software engineering, algorithmic design, and measurable problem-solving.
          </p>
        </div>

        {/* FEATURED FLAGSHIP BUILDS */}
        <div className="mt-16 space-y-12">
          {flagshipProjects.map((project, idx) => (
            <article
              key={project.id}
              className="botanical-card relative overflow-hidden rounded-3xl border border-[#d4a574]/15 bg-[#141312] p-7 sm:p-10 transition-all duration-300 hover:border-[#d4a574]/35 shadow-xl"
            >
              {/* Background ambient glow circle */}
              <div
                className={`pointer-events-none absolute -top-24 ${
                  idx % 2 === 0 ? "-left-20 glow-warm" : "-right-20 glow-rose"
                } h-80 w-80 rounded-full opacity-40 blur-3xl`}
                aria-hidden="true"
              />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Left side: Project details, Problem/Solution, Features */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#d4a574]">
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

                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e4df]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 font-serif italic text-base text-[#d4a574]">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9a9590]">
                    {project.overview}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 space-y-2.5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e8e4df]">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#d4a574]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1 font-mono text-xs text-[#9a9590]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons (Pill style per DESIGN.md) */}
                  <div className="mt-9 flex flex-wrap items-center gap-3.5 pt-6 border-t border-white/[0.08]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0f0f0f] transition-all hover:bg-[#c9b896] shadow-sm hover:shadow-md"
                    >
                      <Maximize2 size={13} />
                      Deep Dive Specs
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#9a9590]/35 bg-transparent px-5 py-2.5 text-xs font-medium text-[#e8e4df] transition hover:border-[#d4a574] hover:text-[#d4a574] hover:bg-[#d4a574]/5"
                      >
                        <Github size={14} />
                        Repository
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#e8b4b8]/35 bg-[#e8b4b8]/10 px-5 py-2.5 text-xs font-medium text-[#e8b4b8] transition hover:bg-[#e8b4b8]/20"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side: Visual Pipeline Architecture breakdown & Metrics */}
                <div className="rounded-3xl border border-[#d4a574]/20 bg-[#161514] p-6 sm:p-7 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                    <div className="flex items-center gap-2">
                      <Workflow size={16} className="text-[#d4a574]" />
                      <span className="font-mono text-xs font-semibold text-[#e8e4df] uppercase tracking-wider">
                        Pipeline Architecture
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#d4a574]">
                      {project.pipelineFlow || "PIPELINE ARCHITECTURE"}
                    </span>
                  </div>

                  {/* Architecture steps */}
                  <div className="mt-5 space-y-3">
                    {project.architecture.map((step, sIdx) => (
                      <div
                        key={step.step}
                        className="rounded-2xl border border-white/[0.06] bg-[#1a1918]/90 p-3.5 transition-all hover:border-[#d4a574]/30"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4a574]/15 font-mono text-[10px] font-bold text-[#d4a574]">
                            0{sIdx + 1}
                          </span>
                          <span className="font-serif text-sm font-semibold text-[#e8e4df]">{step.step}</span>
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-[#9a9590] pl-7">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Project metric specs */}
                  <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08]">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="font-serif text-base sm:text-lg font-bold text-[#e8e4df]">{m.value}</p>
                        <p className="mt-0.5 text-[10px] font-mono uppercase tracking-wider text-[#9a9590]">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Builds (if any) */}
        {secondaryProjects.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-[#e8e4df]">
                Additional Production & Analytics Projects
              </h3>
              <span className="font-mono text-xs text-[#9a9590]">
                0{secondaryProjects.length} Additional Build{secondaryProjects.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="botanical-card botanical-card-hover flex flex-col justify-between rounded-3xl p-7 sm:p-8 border border-white/[0.08] bg-[#141312]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-[#1a1918] px-3 py-0.5 font-mono text-[10px] text-[#9a9590]">
                        PROJECT /{project.number}
                      </span>
                      <span className="font-mono text-[10px] text-[#d4a574]">
                        {project.badge}
                      </span>
                    </div>

                    <h4 className="mt-5 font-serif text-2xl font-bold text-[#e8e4df]">{project.title}</h4>
                    <p className="mt-1 font-serif italic text-xs text-[#d4a574]">{project.tagline}</p>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#9a9590]">
                      {project.overview}
                    </p>

                    <div className="mt-5 space-y-2">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#e8e4df]">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#d4a574]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/[0.08] bg-[#1a1918] px-2.5 py-0.5 font-mono text-[10px] text-[#9a9590]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between pt-5 border-t border-white/[0.08]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4a574] hover:text-[#c9b896]"
                    >
                      Deep Dive Specs <ArrowUpRight size={13} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 p-2 text-[#9a9590] hover:text-[#e8e4df] hover:border-[#d4a574]/40"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-[#e8b4b8]/15 px-3 py-1 text-xs font-medium text-[#e8b4b8] hover:bg-[#e8b4b8]/25"
                        >
                          Demo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Render Technical Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
