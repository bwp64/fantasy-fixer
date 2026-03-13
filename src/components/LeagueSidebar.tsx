import { 
  Trophy, ArrowRightLeft, BarChart3, 
  ChevronDown
} from "lucide-react";
import rivalriesLogo from "@/assets/rivalries-brand.svg";
import fingerprintIcon from "@/assets/icons/fingerprint.svg";
import jerseyIcon from "@/assets/icons/jersey.svg";
import lineChartsIcon from "@/assets/icons/line-charts.svg";
import matchupsIcon from "@/assets/icons/matchups.svg";
import powerRankIcon from "@/assets/icons/power-rank.svg";
import liveScoringIcon from "@/assets/icons/live-scoring.svg";
import banknoteIcon from "@/assets/icons/banknote.svg";
import { useState, type ComponentType } from "react";

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

export default function LeagueSidebar() {
  const [active, setActive] = useState("Dashboard");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col shrink-0">
      {/* Brand Logo */}
      <div className="px-5 pt-5 pb-3">
        <img src={rivalriesLogo} alt="Rivalries" className="h-8 shrink-0" />
      </div>

      {/* Gap / Divider */}
      <div className="mx-4 border-t border-sidebar-border mb-2" />

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = active === item.label;
          const isHovered = hoveredItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-100 ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              {item.svgSrc ? (
                <img
                  src={item.svgSrc}
                  alt=""
                  className={`w-[18px] h-[18px] shrink-0 opacity-70 ${isHovered ? "animate-jitter" : ""}`}
                  style={{ filter: "brightness(0) invert(0.6)" }}
                />
              ) : item.lucideIcon ? (
                <item.lucideIcon className={`w-[18px] h-[18px] shrink-0 ${isHovered ? "animate-jitter" : ""}`} />
              ) : null}
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* MFL Link */}
      <div className="px-4 pb-2">
        <a
          href="https://www44.myfantasyleague.com/2026/home/57893#0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-sidebar-muted hover:text-sidebar-primary transition-colors"
        >
          View on MyFantasyLeague →
        </a>
      </div>

      {/* User */}
      <div className="p-4 border-t border-sidebar-border">
        <button className="w-full flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground text-xs font-bold">
            KC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Chiefs</p>
            <p className="text-xs text-sidebar-muted">Defending Champs</p>
          </div>
          <ChevronDown className="w-4 h-4 text-sidebar-muted" />
        </button>
      </div>
    </aside>
  );
}
