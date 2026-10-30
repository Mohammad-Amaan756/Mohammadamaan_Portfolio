import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Sparkles,
  BrainCircuit,
  Database,
  Layers,
  Award,
  CheckCircle,
} from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[#d4a574]/15 bg-[#0f0f0f] bg-botanical-grid"
    >
      {/* Abstract soft gradient circles (DESIGN.md elevation & depth) */}
      <div
        className="glow-warm pointer-events-none absolute -top-32 left-1/4 h-[520px] w-[520px] -translate-x-1/2 opacity-70 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="glow-rose pointer-events-none absolute top-1/4 right-0 h-[460px] w-[460px] opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="glow-terracotta pointer-events-none absolute bottom-10 left-10 h-[380px] w-[380px] opacity-40 blur-3xl"
        aria-hidden="true"
      />

      {/* Thin decorative vertical accent line (DESIGN.md) */}
      <div className="botanical-line pointer-events-none absolute top-0 left-12 h-96 w-px hidden lg:block opacity-40" />
      <div className="botanical-line pointer-events-none absolute top-40 right-16 h-80 w-px hidden lg:block opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Editorial Headline & Identity */}
          <div className="flex flex-col">
            {/* Top Status Pill */}
            <div className="mb-6 inline-flex max-w-fit items-center gap-2.5 rounded-full border border-[#d4a574]/30 bg-[#161514] px-4 py-1.5 text-xs font-mono text-[#d4a574] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a574] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4a574]" />
              </span>
              <span>B.Tech CSE (Data Science & AI) · 9.0 CGPA</span>
            </div>

            {/* Main Display Headline (Cormorant Garamond 700 + Italic Signature) */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#e8e4df] leading-[1.06]">
              Hello, I'm <span className="text-[#e8e4df]">{profileData.name}</span>
              <br />
              <span className="font-serif italic font-normal text-[#d4a574]">
                Data Science & AI Engineer
              </span>
            </h1>

            {/* Positioning Statement */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#9a9590]">
              Bridging deep learning rigor with production software. Specializing in{" "}
              <span className="text-[#e8e4df] font-medium">Explainable AI</span> (PyTorch, Grad-CAM),{" "}
              <span className="text-[#e8e4df] font-medium">Machine Learning</span>, and{" "}
              <span className="text-[#e8e4df] font-medium">Full-Stack Systems</span> (React, Node.js, Express). Committed to transparent, clinical-grade models that solve real-world problems.
            </p>

            {/* University & Degree Callout */}
            <div className="mt-5 flex items-center gap-2.5 text-xs font-mono text-[#9a9590]">
              <GraduationCap size={15} className="text-[#d4a574]" />
              <span>Integral University, Lucknow (in association with IBM) · Expected 2027</span>
            </div>

            {/* Action Buttons (Pill shaped per DESIGN.md) */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4a574] px-7 py-3.5 text-xs font-semibold tracking-wide uppercase text-[#0f0f0f] shadow-md transition-all duration-300 hover:bg-[#c9b896] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-px"
              >
                <span>Explore Projects</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href={profileData.resume}
                download="Mohammad_Amaan_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[#9a9590]/35 bg-transparent px-6 py-3.5 text-xs font-medium tracking-wide uppercase text-[#e8e4df] transition-all duration-300 hover:border-[#d4a574] hover:text-[#d4a574] hover:bg-[#d4a574]/5"
              >
                <Download size={14} className="text-[#d4a574]" />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-xs font-medium tracking-wide uppercase text-[#9a9590] transition hover:text-[#e8e4df]"
              >
                Get In Touch
              </a>
            </div>

            {/* Social / Direct Connect links */}
            <div className="mt-10 flex flex-wrap items-center gap-5 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9a9590]">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#9a9590] transition hover:text-[#d4a574]"
                aria-label="GitHub Profile"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <span className="text-[#9a9590]/40">·</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#9a9590] transition hover:text-[#d4a574]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#9a9590]/40">·</span>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-1.5 text-xs text-[#9a9590] transition hover:text-[#d4a574]"
                aria-label="Send Email"
              >
                <Mail size={14} />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Dark Botanical Showcase (NO PHOTO) */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            {/* Ambient decorative concentric arcs (CSS/SVG) */}
            <div className="pointer-events-none absolute -inset-6 flex items-center justify-center opacity-30">
              <div className="h-80 w-80 rounded-full border border-[#d4a574]/20" />
              <div className="absolute h-96 w-96 rounded-full border border-[#c9b896]/15" />
            </div>

            {/* Main Botanical Architectural Card */}
            <div className="botanical-card relative rounded-3xl p-7 sm:p-9 border border-[#d4a574]/20 bg-[#141312]/95 backdrop-blur-xl">
              {/* Card Header Meta */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4a574]/15 text-[#d4a574]">
                    <Sparkles size={13} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#d4a574]">
                    Core Engineering Manifesto
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#9a9590]">
                  IBM Partnered Program
                </span>
              </div>

              {/* Three Strategic Core Disciplines */}
              <div className="mt-6 space-y-3.5">
                <div className="rounded-2xl border border-white/[0.06] bg-[#1a1918]/80 p-4 transition-all hover:border-[#d4a574]/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d4a574]/15 text-[#d4a574]">
                      <BrainCircuit size={17} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#e8e4df]">
                        Explainable AI & Deep Learning
                      </h4>
                      <p className="font-mono text-[10px] text-[#9a9590]">
                        PyTorch · Grad-CAM Visual Saliency · Clinical MRI
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-[#1a1918]/80 p-4 transition-all hover:border-[#d4a574]/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e8b4b8]/15 text-[#e8b4b8]">
                      <Layers size={17} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#e8e4df]">
                        Full-Stack AI Application Architecture
                      </h4>
                      <p className="font-mono text-[10px] text-[#9a9590]">
                        React.js · Node.js · Express · Gemini AI · JWT Auth
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-[#1a1918]/80 p-4 transition-all hover:border-[#d4a574]/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#c4856a]/15 text-[#c4856a]">
                      <Database size={17} />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#e8e4df]">
                        Large-Scale Acoustic Data Modeling
                      </h4>
                      <p className="font-mono text-[10px] text-[#9a9590]">
                        57,449 Records · Scikit-learn · Random Forest & LogReg
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distinction Banner: eTrainIndia Award */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#d4a574]/25 bg-gradient-to-r from-[#d4a574]/10 via-[#c9b896]/5 to-transparent p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d4a574]/30 bg-[#161514] font-mono text-xs font-bold text-[#d4a574]">
                    57K+
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#e8e4df]">
                      Acoustic ML Pattern Analysis
                    </p>
                    <p className="font-mono text-[10px] text-[#d4a574]">
                      Awarded "Best Intern of the Program"
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-[#9a9590]">
                  <Award size={13} className="text-[#d4a574]" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Quick Metrics Bar (DESIGN.md Botanical Card & Warm Accents) */}
        <div className="botanical-card mt-16 grid grid-cols-2 gap-6 rounded-3xl p-6 sm:grid-cols-4 sm:p-8">
          {profileData.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col ${
                idx !== 0 ? "sm:border-l sm:border-white/[0.08] sm:pl-7" : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e4df]">
                  {metric.value}
                </span>
                {metric.value === "9.0" && (
                  <span className="font-mono text-xs text-[#9a9590]">/ 10</span>
                )}
              </div>
              <span className="mt-1.5 text-xs font-semibold text-[#d4a574] uppercase tracking-wider font-mono">
                {metric.label}
              </span>
              <span className="mt-1 text-xs text-[#9a9590] leading-snug">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
