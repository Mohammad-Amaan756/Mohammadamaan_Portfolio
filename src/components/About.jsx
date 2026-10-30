import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: BrainCircuit,
      number: "01",
      title: "Deep Learning & Explainable AI",
      tagline: "Verifiable, Auditable Diagnostic Models",
      description:
        "Developing convolutional and deep architectures in PyTorch and integrating Layer-wise Grad-CAM visual attribution heatmaps to ensure diagnostic AI decisions in clinical radiology are completely interpretable and transparent.",
      tags: ["PyTorch", "Grad-CAM", "Computer Vision", "Medical Imaging", "Interpretability"],
      accentColor: "text-[#d4a574]",
      accentBg: "bg-[#d4a574]/15",
    },
    {
      icon: Code2,
      number: "02",
      title: "Full-Stack AI Application Engineering",
      tagline: "High-Performance MERN & REST Systems",
      description:
        "Architecting responsive React frontends, robust Node.js and Express RESTful APIs with JWT authentication, and MongoDB datastores to turn machine learning and Gemini generative endpoints into accessible production tools.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "REST APIs"],
      accentColor: "text-[#e8b4b8]",
      accentBg: "bg-[#e8b4b8]/15",
    },
    {
      icon: Database,
      number: "03",
      title: "Large-Scale Data Science & Mining",
      tagline: "57K+ Records Pattern Analytics",
      description:
        "Processing, cleaning, and modeling complex multi-dimensional datasets with Pandas, NumPy, Scikit-learn, and SQL. Awarded 'Best Intern of the Program' for acoustic environmental classification and predictive modeling.",
      tags: ["Python", "Pandas", "Scikit-learn", "EDA", "Random Forest", "LogReg"],
      accentColor: "text-[#c4856a]",
      accentBg: "bg-[#c4856a]/15",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      {/* Soft blurred gradient circles */}
      <div
        className="glow-gold pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>01 / ABOUT ME</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e8e4df] leading-[1.1]">
              Driven by curiosity. <br />
              <span className="font-serif italic font-normal text-[#d4a574]">
                Engineered for verifiable real-world impact.
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#9a9590] lg:justify-self-end max-w-md">
            Uniting mathematical rigor with production software engineering to design systems where data intelligence and reliable architectures reinforce one another.
          </p>
        </div>

        {/* Narrative & Education Cards - Asymmetric Layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Story Card */}
          <div className="botanical-card relative rounded-3xl p-7 sm:p-9 border border-[#d4a574]/15 bg-[#141312]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 text-[#d4a574]">
                <Terminal size={18} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#e8e4df]">Engineering Philosophy</h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#9a9590]">
                  Mathematical Rigor · Diagnostic Transparency · Scalable Delivery
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#9a9590]">
              I am an undergraduate in Computer Science & Engineering specializing in{" "}
              <span className="text-[#e8e4df] font-medium">Data Science & Artificial Intelligence</span> at{" "}
              <span className="text-[#e8e4df] font-medium">Integral University, Lucknow</span> in association with{" "}
              <span className="text-[#d4a574] font-medium">IBM</span>, maintaining an academic standing of{" "}
              <span className="font-mono font-semibold text-[#d4a574]">9.0 CGPA</span>.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#9a9590]">
              My hands-on engineering journey spans building robust RESTful APIs and integrating Google Gemini AI triage at{" "}
              <span className="text-[#e8e4df] font-medium">One Big Bit</span>, to analyzing 57,449 real-world acoustic records at{" "}
              <span className="text-[#e8e4df] font-medium">eTrainIndia</span>, where I earned the distinction of{" "}
              <span className="text-[#d4a574] font-medium">"Best Intern of the Program"</span>.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#9a9590]">
              I am dedicated to Explainable AI (XAI) — ensuring machine learning decisions offer visual saliency and gradient auditability rather than operating as opaque black boxes.
            </p>

            {/* Core Competencies badges */}
            <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
              {[
                "Algorithmic Problem-Solving",
                "Model Interpretability (Grad-CAM)",
                "Full-Stack Web Systems",
                "Large-Scale Data Mining",
                "Cross-Functional Team Delivery",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1 text-xs text-[#9a9590]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Academic & University Card */}
          <div className="botanical-card flex flex-col justify-between rounded-3xl p-7 sm:p-9 border border-[#d4a574]/15 bg-[#141312]">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 text-[#d4a574]">
                  <GraduationCap size={20} />
                </span>
                <span className="rounded-full border border-[#d4a574]/30 bg-[#1a1918] px-3.5 py-1 font-mono text-[10px] font-semibold text-[#d4a574]">
                  CGPA: 9.0 / 10.0
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold text-[#e8e4df]">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="mt-1 text-xs font-mono text-[#d4a574]">
                Specialization in Data Science and Artificial Intelligence
              </p>

              <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#1a1918]/80 p-4">
                <p className="font-serif text-base font-semibold text-[#e8e4df]">Integral University</p>
                <p className="text-xs text-[#9a9590]">In association with IBM · Lucknow, India</p>
                <p className="mt-2 font-mono text-[11px] text-[#d4a574]">Aug 2023 – May 2027</p>
              </div>

              <div className="mt-5 space-y-2.5 text-xs text-[#9a9590]">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4a574] shrink-0" />
                  <span>Curriculum aligned with industry-standard IBM artificial intelligence pathways</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4a574] shrink-0" />
                  <span>Rigorous coursework in Deep Learning, DBMS, Operating Systems, and Networks</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#9a9590]">Verified Academic Standing</span>
              <a
                href={profileData.resume}
                download
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4a574] hover:text-[#c9b896] transition-colors"
              >
                View Full Resume <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Strategic Technical Pillars - Asymmetric Layout (per DESIGN.md rule: No 3-equal-columns) */}
        <div className="mt-20">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#d4a574] uppercase tracking-widest">
              Core Technical Competencies
            </span>
            <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#e8e4df]">
              Three Pillars of My Technical Work
            </h3>
          </div>

          {/* Asymmetric layout: Large flagship card on left (1.1fr) and stacked cards on right (0.9fr) */}
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Primary Pillar: Deep Learning & Explainable AI */}
            <div className="botanical-card botanical-card-hover flex flex-col justify-between rounded-3xl p-8 sm:p-10 border border-[#d4a574]/20 bg-[#151413]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4a574]/15 text-[#d4a574]">
                    <BrainCircuit size={24} />
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#d4a574]">
                    /{pillars[0].number} · Primary Focus
                  </span>
                </div>

                <h4 className="mt-8 font-serif text-2xl sm:text-3xl font-bold text-[#e8e4df]">
                  {pillars[0].title}
                </h4>
                <p className="mt-1 font-mono text-xs text-[#d4a574]">
                  {pillars[0].tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9a9590]">
                  {pillars[0].description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
                {pillars[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#1a1918] px-3.5 py-1 font-mono text-[11px] text-[#9a9590]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stacked Pillars: Full-Stack AI & Large-Scale Data Science */}
            <div className="space-y-6">
              {pillars.slice(1).map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="botanical-card botanical-card-hover rounded-3xl p-7 sm:p-8 border border-white/[0.08] bg-[#141312]"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${pillar.accentBg} ${pillar.accentColor}`}>
                        <Icon size={19} />
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#9a9590]">
                        /{pillar.number}
                      </span>
                    </div>

                    <h4 className="mt-5 font-serif text-xl font-bold text-[#e8e4df]">
                      {pillar.title}
                    </h4>
                    <p className={`mt-0.5 font-mono text-[11px] ${pillar.accentColor}`}>
                      {pillar.tagline}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#9a9590]">
                      {pillar.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-[#1a1918] px-2.5 py-0.5 font-mono text-[10px] text-[#9a9590]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
