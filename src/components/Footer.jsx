import { ArrowUp } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#d4a574]/15 bg-[#0f0f0f] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a574]/30 bg-[#d4a574]/10 font-mono text-xs font-semibold text-[#d4a574]">
            MA
          </div>
          <div>
            <p className="font-serif text-sm font-medium tracking-wide text-[#e8e4df]">{profileData.name}</p>
            <p className="font-mono text-[10px] text-[#9a9590]">{profileData.title}</p>
          </div>
        </div>

        {/* Central status / copyright */}
        <div className="text-left sm:text-center">
          <p className="font-mono text-[11px] text-[#9a9590]">
            © {new Date().getFullYear()} {profileData.name} · Dark Botanical Architectural Design
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-[#d4a574]/20 bg-white/[0.02] px-4 py-2 text-xs font-medium text-[#e8e4df] transition duration-200 hover:border-[#d4a574] hover:text-[#d4a574]"
        >
          <span>Return to top</span>
          <ArrowUp size={13} className="text-[#d4a574]" />
        </button>
      </div>
    </footer>
  );
}