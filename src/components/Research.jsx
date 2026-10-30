import {
  BookOpen,
  BookmarkCheck,
  CheckCircle2,
} from "lucide-react";
import { researchData } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      {/* Ambient background glow circle */}
      <div
        className="glow-terracotta pointer-events-none absolute top-1/4 right-10 h-[450px] w-[450px] opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>04 / RESEARCH & SCHOLARSHIP</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e8e4df] leading-tight">
              Investigating the frontiers of{" "}
              <span className="font-serif italic font-normal text-[#d4a574]">
                multimodal AI.
              </span>
            </h2>
            <p className="mt-2 text-sm text-[#9a9590] max-w-xl">
              Conducting systematic literature synthesis and comparative architectural benchmarking in vision-language models.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 px-4 py-2 text-xs font-semibold text-[#d4a574]">
            <BookmarkCheck size={15} />
            <span>{researchData.status}</span>
          </div>
        </div>

        {/* Research Paper Feature Card */}
        <div className="botanical-card relative mt-16 overflow-hidden rounded-3xl border border-[#d4a574]/20 bg-[#141312] p-7 sm:p-10 lg:p-12 shadow-2xl">
          <div className="relative z-10">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full border border-[#d4a574]/30 bg-[#d4a574]/15 px-3 py-1 font-mono text-[10px] font-semibold text-[#d4a574]">
                LITERATURE SURVEY & BENCHMARKING
              </span>
              <span className="text-[#9a9590]/40">·</span>
              <span className="text-[#9a9590]">{researchData.area}</span>
              <span className="text-[#9a9590]/40">·</span>
              <span className="text-[#9a9590] font-mono">{researchData.institution}</span>
            </div>

            {/* Paper Title */}
            <h3 className="mt-5 font-serif text-2xl sm:text-4xl font-bold text-[#e8e4df] tracking-tight leading-snug">
              {researchData.title}
            </h3>

            {/* Focus subtitle */}
            <p className="mt-2.5 font-serif italic text-base text-[#d4a574]">
              Core Inquiry: {researchData.focus}
            </p>

            {/* Abstract */}
            <div className="mt-7 rounded-3xl border border-white/[0.08] bg-[#1a1918]/80 p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#d4a574] uppercase tracking-wider">
                <BookOpen size={14} className="text-[#d4a574]" />
                <span>Abstract Synthesis</span>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#9a9590]">
                {researchData.abstract}
              </p>
            </div>

            {/* 4 Core Contribution Pillars */}
            <div className="mt-9">
              <h4 className="text-xs font-mono font-semibold text-[#e8e4df] uppercase tracking-widest">
                Key Literature Contributions & Findings
              </h4>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {researchData.keyPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-white/[0.06] bg-[#1a1918]/60 p-4 sm:p-5 transition-all hover:border-[#d4a574]/30"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-[#d4a574] shrink-0" />
                      <h5 className="font-serif text-base font-semibold text-[#e8e4df]">{point.title}</h5>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#9a9590] pl-6">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Keywords */}
            <div className="mt-9 flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-[#9a9590] uppercase tracking-wider mr-1">
                Keywords:
              </span>
              {researchData.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1 font-mono text-[11px] text-[#9a9590]"
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
