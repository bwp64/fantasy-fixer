import { 
  Trophy, BarChart3, 
  ChevronDown, Menu, X
} from "lucide-react";
import rivalriesLogo from "@/assets/rivalries-brand.svg";
import fingerprintIcon from "@/assets/icons/fingerprint.svg";
import jerseyIcon from "@/assets/icons/jersey.svg";
import lineChartsIcon from "@/assets/icons/line-charts.svg";
import matchupsIcon from "@/assets/icons/matchups.svg";
import powerRankIcon from "@/assets/icons/power-rank.svg";
import liveScoringIcon from "@/assets/icons/live-scoring.svg";
import banknoteIcon from "@/assets/icons/banknote.svg";
import { useState, useEffect, type ComponentType } from "react";

type NavItem = {
  label: string;
  svgSrc?: string;
  lucideIcon?: ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { label: "Dashboard", lucideIcon: BarChart3 },
  { label: "Standings", lucideIcon: Trophy },
  { label: "Matchups", svgSrc: matchupsIcon },
  { label: "Rosters", svgSrc: jerseyIcon },
  { label: "Transactions", svgSrc: banknoteIcon },
  { label: "Power Rank", svgSrc: powerRankIcon },
  { label: "Live Scoring", svgSrc: liveScoringIcon },
  { label: "Player Stats", svgSrc: lineChartsIcon },
  { label: "Login", svgSrc: fingerprintIcon },
];

export function MobileHeader({ onToggle }: { onToggle: () => void }) {
  return (
    <header className="lg:hidden sticky top-0 z-40 bg-sidebar border-b border-border px-4 py-3 flex items-center justify-between">
      <img src={rivalriesLogo} alt="Rivalries" className="h-5" />
      <button
        onClick={onToggle}
        className="w-10 h-10 flex items-center justify-center text-sidebar-foreground"
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5" />
      </button>
    </header>
  );
}

export default function LeagueSidebar({ 
  isOpen, 
  onClose 
}: { 
  isOpen?: boolean; 
  onClose?: () => void;
}) {
  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (label: string) => {
    setActive(label);
    onClose?.();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-background/80"
          onClick={onClose}
        />
      )}

      <aside 
        className={`
          fixed lg:relative z-50 
          w-64 min-h-screen bg-sidebar flex flex-col shrink-0
          transition-transform duration-150 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          top-0 left-0 bottom-0
        `}
      >
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <img src={rivalriesLogo} alt="Rivalries" className="h-7 shrink-0" />
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-sidebar-muted"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mx-4 border-t border-sidebar-border mb-1" />

        <nav className="flex-1 p-3 space-y-px overflow-y-auto">
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                {item.svgSrc ? (
                  <img
                    src={item.svgSrc}
                    alt=""
                    className="w-[16px] h-[16px] shrink-0 opacity-60"
                    style={{ filter: "brightness(0) invert(0.55)" }}
                  />
                ) : item.lucideIcon ? (
                  <item.lucideIcon className="w-4 h-4 shrink-0" />
                ) : null}
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-4 pb-2">
          <a
            href="https://www44.myfantasyleague.com/2026/home/57893#0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-sidebar-muted hover:text-sidebar-primary transition-colors"
          >
            MyFantasyLeague →
          </a>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <button className="w-full flex items-center gap-3 text-left">
            <div className="w-7 h-7 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground text-[10px] font-bold">
              KC
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Chiefs</p>
              <p className="text-[11px] text-sidebar-muted">Defending Champs</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-sidebar-muted" />
          </button>
        </div>
      </aside>
    </>
  );
}