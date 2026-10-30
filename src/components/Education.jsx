import { GraduationCap, Award, BookOpen, Globe, CheckCircle2 } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Education() {
  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Native" },
    { name: "Urdu", level: "Native" },
  ];

  const courses = [
    "Data Structures & Algorithms",
    "Machine Learning & Pattern Recognition",
    "Deep Learning & Computer Vision",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)",
    "Object-Oriented Programming (Java/Python)",
    "Statistical Data Analysis & Probability",
  ];

  return (
    <section id="education" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0a0c10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>07 / ACADEMIC FOUNDATION</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Education & core{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                computer science.
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-300 max-w-xl">
              Formal degree training paired with an IBM-curated curriculum in artificial intelligence and data science.
            </p>
          </div>
        </div>

        {/* Education Details Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Degree Card */}
          <div className="glass-panel rounded-2xl border border-white/10 bg-[#0e121a] p-7 sm:p-9 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {profileData.education.institution}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400">
                    {profileData.education.affiliation} · {profileData.education.location}
                  </p>
                </div>
              </div>

              <div className="flex items-baseline gap-1 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-emerald-400">
                <span className="text-sm font-bold">CGPA:</span>
                <span className="text-base font-extrabold">{profileData.education.cgpa}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold text-white">
                {profileData.education.degree}
              </h4>
              <p className="mt-1 text-sm font-medium text-zinc-300">
                Specialization: {profileData.education.specialization}
              </p>
              <p className="mt-2 font-mono text-xs text-zinc-400">
                Duration: {profileData.education.period}
              </p>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <h5 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                <BookOpen size={14} className="text-emerald-400" />
                <span>Core Academic Coursework</span>
              </h5>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {courses.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages & Academic Association Card */}
          <div className="flex flex-col gap-6">
            {/* IBM Association card */}
            <div className="glass-panel rounded-2xl border border-white/10 bg-[#0e121a] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 font-bold font-mono text-xs">
                  IBM
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">IBM Academic Association</h4>
                  <p className="text-[11px] text-zinc-400">Integrated curriculum & lab modules</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-300">
                The degree program is conducted in formal academic partnership with IBM, integrating enterprise data tools, predictive analytics coursework, and certified lab tracks into the core curriculum.
              </p>
            </div>

            {/* Languages Card */}
            <div className="glass-panel rounded-2xl border border-white/10 bg-[#0e121a] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Globe size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Spoken & Written Languages</h4>
                  <p className="text-[11px] text-zinc-400">Multilingual communication</p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2 text-xs"
                  >
                    <span className="font-semibold text-zinc-200">{lang.name}</span>
                    <span className="font-mono text-[10px] text-emerald-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
