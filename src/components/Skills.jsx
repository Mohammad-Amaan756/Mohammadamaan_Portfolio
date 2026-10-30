import { useState } from "react";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    "ai-ml": BrainCircuit,
    languages: Code2,
    frameworks: Layers,
    "data-cloud": Database,
    foundations: Cpu,
  };

  const filteredCategories =
    activeCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      {/* Soft blurred gradient */}
      <div
        className="glow-rose pointer-events-none absolute top-1/3 right-0 h-96 w-96 opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>02 / TECHNICAL TOOLKIT</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#e8e4df] leading-tight">
              Competencies rooted in{" "}
              <span className="font-serif italic font-normal text-[#d4a574]">
                theory & production.
              </span>
            </h2>
            <p className="mt-2 text-sm text-[#9a9590] max-w-xl">
              Organized into clear domain competencies with verified specialization markers rather than arbitrary percentage bars.
            </p>
          </div>

          {/* Filter Pills (rounded-full per DESIGN.md) */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#d4a574] text-[#0f0f0f] font-semibold shadow-sm"
                  : "border border-white/10 bg-[#161514] text-[#9a9590] hover:border-[#d4a574]/40 hover:text-[#e8e4df]"
              }`}
            >
              All Categories
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#d4a574] text-[#0f0f0f] font-semibold shadow-sm"
                    : "border border-white/10 bg-[#161514] text-[#9a9590] hover:border-[#d4a574]/40 hover:text-[#e8e4df]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Asymmetric Grid (2-Column Asymmetric, No 3-equal-columns per DESIGN.md) */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || BrainCircuit;

            return (
              <div
                key={cat.id}
                className={`botanical-card botanical-card-hover relative flex flex-col rounded-3xl p-7 sm:p-8 border border-white/[0.08] bg-[#141312] ${
                  idx === 0 && activeCategory === "all" ? "md:col-span-2 border-[#d4a574]/25 bg-[#151413]" : ""
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d4a574]/15 text-[#d4a574]">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#e8e4df]">{cat.title}</h3>
                      <p className="text-xs text-[#9a9590]">{cat.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#9a9590]">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1.5 text-xs transition-all hover:border-[#d4a574]/40 hover:bg-[#201e1d]"
                    >
                      <span className="font-medium text-[#e8e4df] group-hover:text-[#d4a574] transition-colors">
                        {skill.name}
                      </span>
                      <span className="rounded-full bg-[#0f0f0f] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#d4a574]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Stack AI Synergy Callout */}
        <div className="botanical-card mt-12 rounded-3xl p-6 sm:p-8 border border-[#d4a574]/20 bg-[#161514]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4a574]/15 text-[#d4a574]">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="font-serif text-lg font-bold text-[#e8e4df]">End-to-End AI Engineering Synergy</p>
                <p className="text-xs text-[#9a9590]">
                  Translating mathematical tensors, feature pipelines, and LLM endpoints into responsive, auditable web applications.
                </p>
              </div>
            </div>
            <a
              href="#projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d4a574]/40 px-5 py-2 text-xs font-semibold text-[#d4a574] hover:bg-[#d4a574] hover:text-[#0f0f0f] transition-all duration-300"
            >
              Explore Projects In Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
