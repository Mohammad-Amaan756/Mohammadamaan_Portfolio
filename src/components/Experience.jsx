import { Briefcase, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0a0c10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>05 / PROFESSIONAL EXPERIENCE</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering impact in{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                teams & production.
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-300 max-w-xl">
              Demonstrated capability in backend API engineering, large-scale data modeling, and cross-functional team delivery.
            </p>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="mt-12 space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.company}
              className="glass-panel relative rounded-2xl border border-white/10 bg-[#0e121a] p-6 sm:p-8 lg:p-9 transition hover:border-emerald-500/30 shadow-lg"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Briefcase size={16} />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-zinc-600">·</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                      {exp.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-base font-semibold text-emerald-400">
                    {exp.role}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-6 space-y-2.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills applied */}
              <div className="mt-7 flex flex-wrap gap-2 pt-5 border-t border-white/[0.08]">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider self-center mr-1">
                  Stack:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
