import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 lg:py-28 border-b border-white/[0.06] bg-[#0c0f16]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-emerald-400 uppercase">
          <span>06 / CREDENTIALS & CERTIFICATIONS</span>
          <span className="h-px w-10 bg-emerald-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Verified industry &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                academic certifications.
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-300 max-w-xl">
              Completed professional training and academic certification programs through IBM and NPTEL.
            </p>
          </div>
          <span className="font-mono text-xs text-zinc-400">07 Verified Credentials</span>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-xl border border-white/10 bg-[#0e121a] p-5 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${
                      cert.issuer === "IBM"
                        ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                        : "bg-amber-500/15 text-amber-300 border border-amber-500/20"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                    <ShieldCheck size={13} />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-white leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06]">
                <p className="text-[11px] text-zinc-400 font-medium">
                  Domain: <span className="text-zinc-300">{cert.category}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
