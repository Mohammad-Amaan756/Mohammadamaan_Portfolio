import { ShieldCheck, Award } from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32 border-b border-[#d4a574]/15 bg-[#0f0f0f]">
      {/* Background glow circle */}
      <div
        className="glow-gold pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 opacity-30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-widest text-[#d4a574] uppercase">
          <span>06 / CREDENTIALS & CERTIFICATIONS</span>
          <span className="h-px w-12 bg-[#d4a574]/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e8e4df] leading-tight">
              Verified industry &{" "}
              <span className="font-serif italic font-normal text-[#d4a574]">
                academic certifications.
              </span>
            </h2>
            <p className="mt-2 text-sm text-[#9a9590] max-w-xl">
              Completed professional training and academic certification programs through IBM and NPTEL / IIT.
            </p>
          </div>
          <span className="font-mono text-xs text-[#d4a574] tracking-wider uppercase">
            07 Verified Credentials
          </span>
        </div>

        {/* Certifications Grid (Asymmetric responsive grid) */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="botanical-card botanical-card-hover flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#141312] p-6 shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-0.5 font-mono text-[10px] font-bold ${
                      cert.issuer === "IBM"
                        ? "bg-[#d4a574]/15 text-[#d4a574] border border-[#d4a574]/30"
                        : "bg-[#c4856a]/15 text-[#c4856a] border border-[#c4856a]/30"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-[#d4a574] font-mono">
                    <ShieldCheck size={13} />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold text-[#e8e4df] leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-6 pt-3.5 border-t border-white/[0.06]">
                <p className="text-[11px] font-mono text-[#9a9590]">
                  Domain: <span className="text-[#e8e4df]">{cert.category}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
