import { GraduationCap, BookOpen, Globe, CheckCircle2 } from "lucide-react";
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
    <section id="education" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>07 / ACADEMIC FOUNDATION</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e8e4df] leading-tight">
              Education & core{" "}
              <span className="font-serif italic font-normal text-[#d4a574]">
                computer science.
              </span>
            </h2>
            <p className="mt-2 text-sm text-[#9a9590] max-w-xl">
              Formal degree curriculum paired with an IBM-curated curriculum in artificial intelligence and data science.
            </p>
          </div>
        </div>

        {/* Education Details Grid - Asymmetric Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Degree Card */}
          <div className="botanical-card rounded-3xl border border-[#d4a574]/15 bg-[#141312] p-7 sm:p-10 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4a574]/15 text-[#d4a574]">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#e8e4df]">
                    {profileData.education.institution}
                  </h3>
                  <p className="font-mono text-xs text-[#d4a574]">
                    {profileData.education.affiliation} · {profileData.education.location}
                  </p>
                </div>
              </div>

              <div className="flex items-baseline gap-1.5 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 px-4 py-1.5 font-mono text-[#d4a574]">
                <span className="text-xs uppercase tracking-wider">CGPA:</span>
                <span className="text-base font-bold">{profileData.education.cgpa}</span>
              </div>
            </div>

            <div className="mt-7">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#e8e4df]">
                {profileData.education.degree}
              </h4>
              <p className="mt-1 font-serif italic text-sm text-[#d4a574]">
                Specialization: {profileData.education.specialization}
              </p>
              <p className="mt-2 font-mono text-xs text-[#9a9590]">
                Duration: {profileData.education.period}
              </p>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-9 pt-7 border-t border-white/[0.08]">
              <h5 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#d4a574]">
                <BookOpen size={14} className="text-[#d4a574]" />
                <span>Core Academic Coursework</span>
              </h5>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {courses.map((course) => (
                  <div key={course} className="flex items-center gap-2.5 text-xs text-[#e8e4df]">
                    <CheckCircle2 size={14} className="text-[#d4a574] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages & Academic Association Card */}
          <div className="flex flex-col gap-6">
            {/* IBM Association card */}
            <div className="botanical-card rounded-3xl border border-white/[0.08] bg-[#141312] p-7 shadow-sm">
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4a574]/15 text-[#d4a574] font-bold font-mono text-xs">
                  IBM
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#e8e4df]">IBM Academic Association</h4>
                  <p className="text-[11px] font-mono text-[#9a9590]">Integrated industry lab modules</p>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#9a9590]">
                The degree program is conducted in formal academic partnership with IBM, integrating enterprise data engineering tools, predictive analytics coursework, and certified lab tracks into the core curriculum.
              </p>
            </div>

            {/* Languages Card */}
            <div className="botanical-card rounded-3xl border border-white/[0.08] bg-[#141312] p-7 shadow-sm">
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8b4b8]/15 text-[#e8b4b8]">
                  <Globe size={18} />
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#e8e4df]">Spoken & Written Languages</h4>
                  <p className="text-[11px] font-mono text-[#9a9590]">Multilingual communication</p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#1a1918]/80 px-4 py-2.5 text-xs"
                  >
                    <span className="font-medium text-[#e8e4df]">{lang.name}</span>
                    <span className="font-mono text-[10px] text-[#d4a574]">{lang.level}</span>
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
