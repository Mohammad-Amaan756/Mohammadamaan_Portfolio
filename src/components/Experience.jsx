import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      {/* Background ambient glow */}
      <div
        className="glow-warm pointer-events-none absolute top-1/3 left-0 h-96 w-96 opacity-30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>05 / PROFESSIONAL EXPERIENCE</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e8e4df] leading-tight">
              Engineering impact in{" "}
              <span className="font-serif italic font-normal text-[#d4a574]">
                teams & production.
              </span>
            </h2>
            <p className="mt-2 text-sm text-[#9a9590] max-w-xl">
              Demonstrated capability in backend API engineering, large-scale acoustic modeling, and collaborative agile delivery.
            </p>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="mt-16 space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="botanical-card botanical-card-hover relative rounded-3xl border border-[#d4a574]/15 bg-[#141312] p-7 sm:p-10 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4a574]/15 text-[#d4a574]">
                      <Briefcase size={17} />
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#e8e4df]">
                      {exp.company}
                    </h3>
                    <span className="text-[#9a9590]/40">·</span>
                    <span className="rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 px-3.5 py-0.5 font-mono text-[10px] font-semibold text-[#d4a574]">
                      {exp.badge}
                    </span>
                  </div>

                  <p className="mt-2 font-serif italic text-base text-[#d4a574]">
                    {exp.role}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#9a9590]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#d4a574]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#d4a574]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#9a9590]">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-6 space-y-2.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e8e4df]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#d4a574]" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills applied */}
              <div className="mt-7 flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
                <span className="text-xs font-mono text-[#9a9590] uppercase tracking-wider self-center mr-1">
                  Stack:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1 font-mono text-xs text-[#9a9590]"
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
