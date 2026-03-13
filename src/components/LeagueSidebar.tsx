import { 
  Trophy, Users, Swords, ArrowRightLeft, BarChart3, 
  FileText, Settings, ChevronDown, ListOrdered, Newspaper
} from "lucide-react";
import rivalriesLogo from "@/assets/rivalries-brand.svg";
import fingerprintIcon from "@/assets/icons/fingerprint.svg";
import jerseyIcon from "@/assets/icons/jersey.svg";
import lineChartsIcon from "@/assets/icons/line-charts.svg";
import { useState, type ComponentType } from "react";

type NavItem = {
  label: string;
  svgSrc?: string;
  lucideIcon?: ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { label: "Dashboard", lucideIcon: BarChart3 },
  { label: "Standings", lucideIcon: Trophy },
  { label: "Matchups", lucideIcon: Swords },
  { label: "Rosters", svgSrc: jerseyIcon },
  { label: "Add/Drop", lucideIcon: ArrowRightLeft },
  { label: "Power Rank", svgSrc: lineChartsIcon },
  { label: "Draft Results", lucideIcon: FileText },
  { label: "Player Stats", lucideIcon: Newspaper },
  { label: "Login", svgSrc: fingerprintIcon },
];

export default function LeagueSidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col shrink-0">
      {/* League Header */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <img src={rivalriesLogo} alt="Rivalries" className="h-8 shrink-0" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
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
                  className="w-[18px] h-[18px] shrink-0 opacity-70"
                  style={{ filter: "brightness(0) invert(0.6)" }}
                />
              ) : item.lucideIcon ? (
                <item.lucideIcon className="w-[18px] h-[18px] shrink-0" />
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
