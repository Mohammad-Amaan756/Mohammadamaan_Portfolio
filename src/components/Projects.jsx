import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  BrainCircuit,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
  Workflow,
  Cpu,
  Calendar,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const flagshipProjects = projectsData.filter((p) => p.flagship);
  const secondaryProjects = projectsData.filter((p) => !p.flagship);

  return (
    <section id="projects" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0a0c10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>03 / FEATURED ENGINEERING BUILDS</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Production systems & <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                verifiable AI pipelines.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-right">
            Every project demonstrates tangible software engineering, algorithmic design, and measurable problem-solving.
          </p>
        </div>

        {/* TIER 1: FEATURED FLAGSHIP PROJECTS */}
        <div className="mt-14 space-y-12">
          {flagshipProjects.map((project, idx) => (
            <article
              key={project.id}
              className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e121a] p-6 sm:p-9 lg:p-10 transition hover:border-emerald-500/30 shadow-xl"
            >
              {/* Background ambient glow */}
              <div
                className={`pointer-events-none absolute -top-24 ${
                  idx % 2 === 0 ? "-left-20" : "-right-20"
                } h-80 w-80 rounded-full ${
                  project.accentGlow || (idx % 2 === 0 ? "bg-emerald-500/10" : "bg-cyan-500/10")
                } blur-3xl`}
                aria-hidden="true"
              />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Left side: Project details, Problem/Solution, Features */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      FLAGSHIP /{project.number}
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

                  <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {project.overview}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 space-y-2">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-emerald-400 shadow-md shadow-emerald-500/20"
                    >
                      <Maximize2 size={14} />
                      View Technical Deep Dive
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:bg-white/[0.08] hover:text-white"
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
                        className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side: Visual Pipeline Architecture breakdown & Metrics */}
                <div className="rounded-2xl border border-white/10 bg-[#0a0d14]/90 p-5 sm:p-6 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex items-center gap-2">
                      <Workflow size={16} className="text-emerald-400" />
                      <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                        Pipeline Architecture
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">
                      {project.pipelineFlow || "PIPELINE ARCHITECTURE"}
                    </span>
                  </div>

                  {/* Architecture steps */}
                  <div className="mt-4 space-y-3">
                    {project.architecture.map((step, sIdx) => (
                      <div
                        key={step.step}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-emerald-500/30"
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/20 font-mono text-[10px] font-bold text-emerald-400">
                            0{sIdx + 1}
                          </span>
                          <span className="text-xs font-bold text-zinc-200">{step.step}</span>
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-zinc-400 pl-7">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Project metric specs */}
                  <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08]">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="font-mono text-xs font-bold text-white">{m.value}</p>
                        <p className="mt-0.5 text-[10px] text-zinc-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TIER 2: SECONDARY BUILDS (if any) */}
        {secondaryProjects.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Additional Production & Analytics Projects
              </h3>
              <span className="font-mono text-xs text-zinc-400">
                0{secondaryProjects.length} Additional Build{secondaryProjects.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <article
                  key={project.id}
                  className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#0e121a]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400">
                        PROJECT /{project.number}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400">
                        {project.badge}
                      </span>
                    </div>

                    <h4 className="mt-4 text-xl font-bold text-white">{project.title}</h4>
                    <p className="mt-1 text-xs font-medium text-emerald-300">{project.tagline}</p>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                      {project.overview}
                    </p>

                    <div className="mt-5 space-y-1.5">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-400" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-5 border-t border-white/[0.08]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Deep Dive Specs <ArrowUpRight size={13} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/30"
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
