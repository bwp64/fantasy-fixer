import { 
  Trophy, Users, Swords, ArrowRightLeft, BarChart3, 
  FileText, Settings, ChevronDown, Zap, ListOrdered, Newspaper
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Trophy, label: "Standings" },
  { icon: Swords, label: "Matchups" },
  { icon: Users, label: "Rosters" },
  { icon: ArrowRightLeft, label: "Add/Drop" },
  { icon: ListOrdered, label: "Power Rank" },
  { icon: FileText, label: "Draft Results" },
  { icon: Newspaper, label: "Player Stats" },
  { icon: Settings, label: "League Rules" },
];

export default function LeagueSidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col shrink-0">
      {/* League Header */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sidebar-accent flex items-center justify-center">
            <Trophy className="w-5 h-5 text-sidebar-primary" />
          </div>
          <div className="min-w-0">
            <h2 className="font-heading text-sm font-semibold text-sidebar-foreground uppercase tracking-wide truncate">
              Copy of NFL 24
            </h2>
            <p className="text-xs text-sidebar-muted">2026 Season · 12 Teams</p>
          </div>
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
              <item.icon className="w-4 h-4 shrink-0" />
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
