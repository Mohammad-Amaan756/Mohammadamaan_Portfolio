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
  const [subject, setSubject] = useState("Summer Internship / AI Engineering");
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
    <section id="contact" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f] overflow-hidden">
      {/* Ambient Dark Botanical Glows */}
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-[#d4a574]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-[#c4856a]/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>08 / INQUIRIES & COLLABORATION</span>
          <span className="h-px w-10 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#e8e4df] leading-tight">
              Let’s cultivate <br />
              <span className="italic text-[#d4a574]">intelligent architectures.</span>
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-[#9a9590] max-w-md">
            Currently welcoming summer 2025/2026 internships, AI/ML engineering positions, applied data science roles, and academic research collaborations.
          </p>
        </div>

        {/* Contact Layout: Asymmetric 2-Column */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Direct Channels Column */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#d4a574]/15 bg-[#141312] p-7 sm:p-9 shadow-xl relative backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#d4a574] uppercase tracking-wider">
                  Direct Channels
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#9a9590]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4a574] animate-pulse" />
                  Fast Response (24h)
                </span>
              </div>

              {/* Email Card with Copy button */}
              <div className="mt-6 rounded-2xl border border-[#d4a574]/25 bg-[#d4a574]/[0.03] p-6 transition duration-300 hover:border-[#d4a574]/40">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#d4a574] tracking-wider uppercase">
                    Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 px-3 py-1 text-xs font-medium text-[#d4a574] hover:bg-[#d4a574]/20 transition"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-[#e8b4b8]" />
                        <span className="text-[#e8b4b8]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-3 font-mono text-base sm:text-lg font-semibold text-[#e8e4df] break-all">
                  {profileData.email}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#d4a574] px-4 py-1.5 text-xs font-semibold text-[#0f0f0f] hover:bg-[#c9b896] transition"
                  >
                    Open Mail Client <ArrowUpRight size={13} />
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      profileData.email
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a574]/20 bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-[#e8e4df] hover:border-[#d4a574]/40 hover:bg-[#d4a574]/5 transition"
                  >
                    Compose in Gmail <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Other info: Phone, Location */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${profileData.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-[#d4a574]/15 bg-[#0f0f0f]/60 p-4 transition duration-300 hover:border-[#d4a574]/40 group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9a9590]">
                    <Phone size={13} className="text-[#d4a574] group-hover:scale-110 transition-transform" />
                    <span>Direct Line</span>
                  </div>
                  <p className="mt-1 font-mono text-sm font-semibold text-[#e8e4df]">
                    {profileData.phone}
                  </p>
                </a>

                <div className="rounded-xl border border-[#d4a574]/15 bg-[#0f0f0f]/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9a9590]">
                    <MapPin size={13} className="text-[#c4856a]" />
                    <span>Location</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#e8e4df]">
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
                  className="flex flex-1 items-center justify-between rounded-xl border border-[#d4a574]/15 bg-[#0f0f0f]/60 p-4 transition duration-300 hover:border-[#d4a574]/40 group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={17} className="text-[#d4a574] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[#e8e4df]">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight size={14} className="text-[#9a9590] group-hover:text-[#d4a574] transition-colors" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-between rounded-xl border border-[#d4a574]/15 bg-[#0f0f0f]/60 p-4 transition duration-300 hover:border-[#d4a574]/40 group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={17} className="text-[#d4a574] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[#e8e4df]">GitHub Repositories</span>
                  </div>
                  <ArrowUpRight size={14} className="text-[#9a9590] group-hover:text-[#d4a574] transition-colors" />
                </a>
              </div>
            </div>

            {/* Resume Callout */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-[#d4a574]/20 bg-[#0f0f0f]/80 p-5">
              <div>
                <p className="text-xs font-serif text-[#e8e4df] font-semibold tracking-wide">Looking for a verified offline credential?</p>
                <p className="text-[11px] text-[#9a9590] mt-0.5">Comprehensive resume with academic, project & internship records</p>
              </div>
              <a
                href={profileData.resume}
                download="Mohammad_Amaan_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#d4a574]/10 border border-[#d4a574]/30 px-4 py-2 text-xs font-medium text-[#d4a574] hover:bg-[#d4a574] hover:text-[#0f0f0f] transition duration-200"
              >
                <Download size={13} />
                Download PDF
              </a>
            </div>
          </div>

          {/* Outreach / Message Composer Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#d4a574]/15 bg-[#141312] p-7 sm:p-9 shadow-xl relative backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-2">
                <MessageSquare size={17} className="text-[#d4a574]" />
                <h3 className="font-serif text-lg font-normal text-[#e8e4df]">Initiate an Inquiry</h3>
              </div>
              <p className="mt-1 text-xs text-[#9a9590]">
                Select a topic or compose a customized inquiry directly:
              </p>

              {/* Inquiry Type Selector */}
              <div className="mt-6 space-y-2">
                <label className="text-[11px] font-mono text-[#9a9590] uppercase tracking-wider">
                  Inquiry Purpose:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Summer Internship 2025/2026",
                    "AI/ML Engineering Role",
                    "Research Collaboration",
                    "Technical Discussion",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSubject(item)}
                      className={`rounded-full px-3 py-1.5 text-xs transition duration-200 ${
                        subject === item
                          ? "bg-[#d4a574] text-[#0f0f0f] font-semibold shadow-sm"
                          : "border border-[#d4a574]/20 bg-white/[0.02] text-[#9a9590] hover:text-[#e8e4df] hover:border-[#d4a574]/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Note Area */}
              <div className="mt-6 space-y-2">
                <label className="text-[11px] font-mono text-[#9a9590] uppercase tracking-wider">
                  Message Outline (Optional):
                </label>
                <textarea
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Hello Mohammad, we came across your work on Explainable AI / Healthcare Systems and would love to connect regarding..."
                  className="w-full rounded-xl border border-[#d4a574]/20 bg-[#0f0f0f] p-4 text-xs text-[#e8e4df] placeholder-[#9a9590]/50 focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574]/30 transition"
                />
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#d4a574]/15">
              <a
                href={mailtoLink}
                className="flex items-center justify-center gap-2 rounded-full bg-[#d4a574] py-3.5 text-xs font-semibold text-[#0f0f0f] transition duration-200 hover:bg-[#c9b896] shadow-md shadow-[#d4a574]/15"
              >
                <Mail size={15} />
                <span>Send via Default Email Client</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="mt-2.5 text-center font-mono text-[11px] text-[#9a9590]">
                Dispatches straight to <span className="text-[#d4a574]">{profileData.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}