import { BarChart3, Trophy, CalendarDays, Users, Zap } from "lucide-react";
import matchupsIcon from "@/assets/icons/matchups.svg";

type Tab = {
  label: string;
  icon: React.ReactNode;
};

const tabs: Tab[] = [
  { label: "Home", icon: <BarChart3 className="w-5 h-5" /> },
  { label: "Standings", icon: <Trophy className="w-5 h-5" /> },
  { label: "Matchups", icon: <Zap className="w-5 h-5" /> },
  { label: "Schedule", icon: <CalendarDays className="w-5 h-5" /> },
  { label: "Rosters", icon: <Users className="w-5 h-5" /> },
];

export default function MobileBottomNav({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (tab: string) => void;
}) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-sidebar border-t border-border">
      <div className="flex items-stretch">
        {tabs.map((tab) => {
          const isActive = active === tab.label;
          return (
            <button
              key={tab.label}
              onClick={() => onNavigate(tab.label)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 transition-colors ${
                isActive
                  ? "text-accent"
                  : "text-sidebar-muted"
              }`}
            >
              {tab.icon}
              <span className="text-[9px] font-heading font-bold uppercase tracking-wider">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe area for iOS home indicator */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}