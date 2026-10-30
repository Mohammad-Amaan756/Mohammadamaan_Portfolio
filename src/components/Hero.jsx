import { useState } from "react";
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
  CheckCircle,
} from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.06] bg-tech-grid"
    >
      {/* Ambient background glows */}
      <div
        className="glow-emerald pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] -translate-x-1/2 opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="glow-cyan pointer-events-none absolute top-1/3 right-10 h-[450px] w-[450px] opacity-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Recruiter Pitch & Hero Information */}
          <div className="flex flex-col">
            {/* Top Status Pill */}
            <div className="mb-6 inline-flex max-w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-1.5 text-[11px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>B.Tech CSE (Data Science & AI) · 9.0 CGPA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.08]">
              Hi, I'm <span className="text-white">{profileData.name}</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Data Science & AI
              </span>
            </h1>

            {/* Positioning Statement */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Specializing in <span className="text-white font-medium">Machine Learning</span>,{" "}
              <span className="text-white font-medium">Deep Learning</span> (PyTorch, CNNs, Explainable AI), and{" "}
              <span className="text-white font-medium">Scalable Web Systems</span> (MERN & Flask). Focused on
              solving high-impact problems with transparent, verifiable models.
            </p>

            {/* University & Degree Callout */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <GraduationCap size={15} className="text-emerald-400" />
              <span>Integral University, Lucknow (in association with IBM) · Expected 2027</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 hover:shadow-emerald-500/40"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </a>

              <a
                href={profileData.resume}
                download="Mohammad_Amaan_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-500/40 hover:bg-white/[0.08] hover:text-white"
              >
                <Download size={15} className="text-emerald-400" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-3.5 text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                Contact Me
              </a>
            </div>

            {/* Social / Direct Connect links */}
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 transition hover:text-emerald-300"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 transition hover:text-emerald-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-1.5 text-xs text-zinc-400 transition hover:text-emerald-300"
                aria-label="Send Email"
              >
                <Mail size={15} />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Portrait & Quick Identity Card */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            {/* Ambient decorative border backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-transparent blur-xl opacity-80" />

            {/* Image Card Container */}
            <div className="relative aspect-[0.9] overflow-hidden rounded-2xl border border-white/10 bg-[#0e121a] shadow-2xl">
              {!imgError ? (
                <img
                  src={profileData.photo}
                  alt={profileData.name}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center filter saturate-[1.05]"
                  loading="eager"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#121722] to-[#0a0c10] p-6 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 font-mono text-4xl font-extrabold text-emerald-400">
                    MA
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{profileData.name}</h3>
                  <p className="mt-1 text-xs text-zinc-400">{profileData.title}</p>
                </div>
              )}
            </div>

            {/* Achievement Card - Below the Photo */}
            <div className="relative mt-3.5 flex items-center justify-between rounded-xl border border-white/10 bg-[#0e121a]/95 p-3 sm:p-3.5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400 font-mono font-bold text-xs">
                  57K+
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Acoustic ML Records</p>
                  <p className="font-mono text-[10px] text-zinc-400">eTrainIndia Best Intern Award</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                <CheckCircle size={11} />
                <span>Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Quick Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.08] bg-[#0d1118]/80 p-5 backdrop-blur-sm sm:grid-cols-4 sm:p-6">
          {profileData.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col ${
                idx !== 0 ? "sm:border-l sm:border-white/[0.08] sm:pl-6" : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                  {metric.value}
                </span>
                {metric.value === "9.0" && <span className="text-xs font-mono text-zinc-500">/ 10</span>}
              </div>
              <span className="mt-1 text-xs font-semibold text-emerald-300">{metric.label}</span>
              <span className="mt-0.5 text-[11px] text-zinc-400 leading-tight">{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
