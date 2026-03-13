import homeIcon from "@/assets/icons/home.svg";
import matchupsIcon from "@/assets/icons/matchups-2.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import jerseyIcon from "@/assets/icons/jersey-2.svg";
import { Trophy } from "lucide-react";

type Tab = {
  label: string;
  svgSrc?: string;
  lucideIcon?: React.ReactNode;
};

const tabs: Tab[] = [
  { label: "Home", svgSrc: homeIcon },
  { label: "Standings", lucideIcon: <Trophy className="w-5 h-5" /> },
  { label: "Matchups", svgSrc: matchupsIcon },
  { label: "Schedule", svgSrc: calendarIcon },
  { label: "Rosters", svgSrc: jerseyIcon },
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
              {tab.svgSrc ? (
                <img
                  src={tab.svgSrc}
                  alt=""
                  className="w-5 h-5"
                  style={{
                    filter: isActive
                      ? "brightness(0) invert(0.75) sepia(1) saturate(3) hue-rotate(180deg)"
                      : "brightness(0) invert(0.55)",
                  }}
                />
              ) : (
                tab.lucideIcon
              )}
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
