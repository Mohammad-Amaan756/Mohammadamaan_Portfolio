import { ArrowUp } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080a0e] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400">
            MA
          </div>
          <div>
            <p className="text-xs font-bold text-white">{profileData.name}</p>
            <p className="font-mono text-[10px] text-zinc-400">{profileData.title}</p>
          </div>
        </div>

        {/* Central status / copyright */}
        <div className="text-center sm:text-left">
          <p className="font-mono text-[11px] text-zinc-400">
            © {new Date().getFullYear()} {profileData.name} · Designed for AI & Software Engineering
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-emerald-500/40 hover:text-white"
        >
          <span>Back to top</span>
          <ArrowUp size={13} className="text-emerald-400" />
        </button>
      </div>
    </footer>
  );
}
