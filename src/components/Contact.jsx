import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("Opportunity / Project Collaboration");
  const [note, setNote] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(note)}`;

  return (
    <section id="contact" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0c0f16]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>08 / GET IN TOUCH</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's collaborate on <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                intelligent systems.
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300 max-w-md">
            Open to summer 2025/2026 internships, AI/ML engineering roles, data science opportunities, and research collaborations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Direct Channels */}
          <div className="glass-panel flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0e121a] p-7 sm:p-9 shadow-lg">
            <div>
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Direct Channels
              </span>

              {/* Email Card with Copy button */}
              <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-300">Primary Email Address</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-3 font-mono text-base sm:text-lg font-bold text-white break-all">
                  {profileData.email}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-black hover:bg-emerald-400 transition"
                  >
                    Open Mail Client <ArrowUpRight size={13} />
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      profileData.email
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-white/10 transition"
                  >
                    Open in Gmail Web <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Other info: Phone, Location */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${profileData.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-emerald-500/30"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Phone size={14} className="text-emerald-400" />
                    <span>Direct Phone</span>
                  </div>
                  <p className="mt-1 font-mono text-sm font-bold text-white">
                    {profileData.phone}
                  </p>
                </a>

                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>Location</span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-white">
                    {profileData.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-[#121620] p-4 transition hover:border-emerald-500/40"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-emerald-400" />
                    <span className="text-xs font-bold text-white">LinkedIn Network</span>
                  </div>
                  <ArrowUpRight size={15} className="text-zinc-500" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-[#121620] p-4 transition hover:border-emerald-500/40"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-emerald-400" />
                    <span className="text-xs font-bold text-white">GitHub Repositories</span>
                  </div>
                  <ArrowUpRight size={15} className="text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Resume Callout */}
            <div className="mt-8 flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/30 p-4">
              <div>
                <p className="text-xs font-semibold text-white">Need an offline copy?</p>
                <p className="text-[11px] text-zinc-400">Verified resume PDF with full academic & internship credentials</p>
              </div>
              <a
                href={profileData.resume}
                download="Mohammad_Amaan_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <Download size={13} className="text-emerald-400" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Quick Note Composer / Outreach Box */}
          <div className="glass-panel flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0e121a] p-7 sm:p-9 shadow-lg">
            <div>
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-emerald-400" />
                <h3 className="text-base font-bold text-white">Quick Inquiries & Outreach</h3>
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                Draft a message directly or choose a standard inquiry template:
              </p>

              {/* Inquiry Type Selector */}
              <div className="mt-5 space-y-2">
                <label className="text-xs font-mono text-zinc-400">Inquiry Purpose:</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Summer Internship 2025/2026",
                    "Full-Time Role",
                    "Research Collaboration",
                    "Project Discussion",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSubject(item)}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        subject === item
                          ? "bg-emerald-500 text-black font-semibold"
                          : "border border-white/10 bg-white/[0.02] text-zinc-300 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Note Area */}
              <div className="mt-5 space-y-2">
                <label className="text-xs font-mono text-zinc-400">Message Outline (Optional):</label>
                <textarea
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Hello Mohammad, we came across your work on Explainable AI / Hospital Management System and would like to discuss..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 p-3.5 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <a
                href={mailtoLink}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-xs font-bold text-black transition hover:bg-emerald-400 shadow-md shadow-emerald-500/20"
              >
                <Mail size={15} />
                <span>Send via Email Client</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="mt-2 text-center text-[10px] text-zinc-400">
                Typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
