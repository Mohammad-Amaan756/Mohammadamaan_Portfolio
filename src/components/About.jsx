import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
  Award,
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
      tagline: "Transparent, Auditable Models",
      description:
        "Developing convolutional and transformer-based architectures with PyTorch and integrating Grad-CAM visual attribution heatmaps to ensure AI decisions in clinical and critical environments are fully interpretable.",
      tags: ["PyTorch", "Grad-CAM", "Computer Vision", "Interpretability"],
      accent: "emerald",
    },
    {
      icon: Code2,
      number: "02",
      title: "Full-Stack AI Integration",
      tagline: "MERN & Flask Systems",
      description:
        "Architecting responsive React frontends, robust Node.js/Express REST APIs with JWT security, and Flask microservices to convert ML algorithms into low-latency, user-friendly production web applications.",
      tags: ["React.js", "Node.js", "Express.js", "Flask", "REST APIs"],
      accent: "cyan",
    },
    {
      icon: Database,
      number: "03",
      title: "Data Analytics & Engineering",
      tagline: "Large-Scale Statistical Mining",
      description:
        "Ingesting, cleaning, and modeling complex multi-dimensional datasets (processed 57K+ acoustic records) using Pandas, NumPy, Scikit-learn, and SQL to derive high-fidelity statistical patterns.",
      tags: ["Pandas", "Scikit-learn", "EDA", "SQL", "Power BI"],
      accent: "violet",
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0a0c10]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>01 / ABOUT ME</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Driven by curiosity. <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Engineered for real-world impact.
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300 lg:justify-self-end max-w-md">
            I combine academic rigor with practical development to build systems where data science and software engineering reinforce each other.
          </p>
        </div>

        {/* Narrative & Education Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Story Card */}
          <div className="glass-panel relative rounded-2xl p-7 sm:p-9 border border-white/10 bg-[#0e121a]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Terminal size={20} />
              </span>
              <div>
                <h3 className="text-base font-bold text-white">Engineering Philosophy</h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  Precision · Transparency · Scalability
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
              I am an undergraduate in Computer Science & Engineering specializing in{" "}
              <span className="text-white font-medium">Data Science & Artificial Intelligence</span> at{" "}
              <span className="text-white font-medium">Integral University, Lucknow</span> (in association with{" "}
              <span className="text-emerald-300 font-medium">IBM</span>), holding an academic standing of{" "}
              <span className="text-emerald-300 font-semibold font-mono">9.0 CGPA</span>.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              My engineering experience spans hands-on backend development at{" "}
              <span className="text-white font-medium">One Big Bit</span>, where I built RESTful APIs and integrated
              generative AI triage for a Hospital Management System, to exploratory data science at{" "}
              <span className="text-white font-medium">eTrainIndia</span>, where I analyzed 57,449 acoustic records
              and was recognized as the <span className="text-emerald-300 font-medium">"Best Intern of the Program"</span>.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              I am particularly invested in Explainable AI (XAI) — ensuring machine learning models provide visual
              attribution and gradient transparency rather than acting as opaque black boxes.
            </p>

            {/* Core Competencies badges */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Algorithmic Problem-Solving",
                "Model Interpretability",
                "Full-Stack Web Systems",
                "Analytical Rigor",
                "Cross-Functional Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Academic & University Card */}
          <div className="glass-panel flex flex-col justify-between rounded-2xl p-7 sm:p-8 border border-white/10 bg-[#0e121a]">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <GraduationCap size={22} />
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                  CGPA: 9.0 / 10.0
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="mt-1 text-xs font-medium text-emerald-400">
                Specialization in Data Science and Artificial Intelligence
              </p>

              <div className="mt-6 rounded-xl border border-white/[0.08] bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">Integral University</p>
                <p className="text-xs text-zinc-400">In association with IBM · Lucknow, India</p>
                <p className="mt-2 font-mono text-[11px] text-zinc-400">Aug 2023 – May 2027</p>
              </div>

              <div className="mt-5 space-y-2 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Curriculum aligned with industry-standard IBM data science pathways</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Advanced coursework in Deep Learning, DBMS, OS, and Data Analytics</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-zinc-400">Interested in candidate details?</span>
              <a
                href={profileData.resume}
                download
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                View Full Resume <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Strategic Technical Pillars */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              Core Technical Competencies
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Three Pillars of My Technical Work
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="glass-panel glass-panel-hover flex flex-col rounded-2xl p-6 sm:p-7 border border-white/10 bg-[#0e121a]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-xs font-semibold text-zinc-500">
                      /{pillar.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-white">{pillar.title}</h4>
                  <p className="mt-1 font-mono text-[11px] text-emerald-400">{pillar.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 flex-1">
                    {pillar.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-1 font-mono text-[10px] text-zinc-400"
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
    </section>
  );
}
