import { useState } from "react";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Cpu,
  Sparkles,
  Check,
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
    <section id="skills" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0c0f16]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>02 / TECHNICAL TOOLKIT</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Skills grounded in{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                theory & production.
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-300 max-w-xl">
              Organized into clear domain competencies with genuine specialization markers rather than arbitrary percentage bars.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeCategory === "all"
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                  : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-emerald-500/40 hover:text-white"
              }`}
            >
              All Categories
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                    : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-emerald-500/40 hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || BrainCircuit;

            return (
              <div
                key={cat.id}
                className="glass-panel relative flex flex-col rounded-2xl p-6 sm:p-7 border border-white/10 bg-[#0e121a] transition hover:border-emerald-500/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      <p className="text-[11px] text-zinc-400">{cat.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs transition hover:border-emerald-500/40 hover:bg-white/[0.05]"
                    >
                      <span className="font-medium text-zinc-200 group-hover:text-white">
                        {skill.name}
                      </span>
                      <span className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Callout Strip */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#0a0d13] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-white">Full-Stack AI Synergy</p>
                <p className="text-[11px] text-zinc-400">
                  From mathematical PyTorch tensors & ETL pipelines directly to responsive React/Node.js web experiences.
                </p>
              </div>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              See Skills in Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
