import {
  BookOpen,
  FileText,
  Sparkles,
  Layers,
  ArrowUpRight,
  BookmarkCheck,
  CheckCircle2,
} from "lucide-react";
import { researchData } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0c0f16]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>04 / RESEARCH & ACADEMIC SCHOLARSHIP</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Investigating the frontiers of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                multimodal AI.
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-300 max-w-xl">
              Conducting systematic literature synthesis and comparative architecture benchmarking in vision-language models.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-400">
            <BookmarkCheck size={16} />
            <span>{researchData.status}</span>
          </div>
        </div>

        {/* Research Paper Feature Card */}
        <div className="mt-12 glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e121a] p-6 sm:p-9 lg:p-11 shadow-xl">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-md bg-emerald-500/20 px-2.5 py-1 font-mono font-semibold text-emerald-300">
                LITERATURE SURVEY & COMPARATIVE ANALYSIS
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{researchData.area}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-mono">{researchData.institution}</span>
            </div>

            {/* Paper Title */}
            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {researchData.title}
            </h3>

            {/* Focus subtitle */}
            <p className="mt-2 text-sm font-semibold text-emerald-400">
              Core Focus: {researchData.focus}
            </p>

            {/* Abstract */}
            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-black/40 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                <BookOpen size={14} className="text-emerald-400" />
                <span>Abstract Synthesis</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 font-normal">
                {researchData.abstract}
              </p>
            </div>

            {/* 4 Core Contribution Pillars */}
            <div className="mt-8">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Key Literature Contributions & Findings
              </h4>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {researchData.keyPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-emerald-500/30 hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <h5 className="text-xs font-bold text-white">{point.title}</h5>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400 pl-6">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Keywords */}
            <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                Keywords:
              </span>
              {researchData.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
