import rivalriesLogo from "@/assets/rivalries-brand.svg";
import fingerprintIcon from "@/assets/icons/fingerprint.svg";
import jerseyIcon from "@/assets/icons/jersey.svg";
import lineChartsIcon from "@/assets/icons/line-charts.svg";
import matchupsIcon from "@/assets/icons/matchups.svg";
import powerRankIcon from "@/assets/icons/power-rank.svg";
import liveScoringIcon from "@/assets/icons/live-scoring.svg";
import banknoteIcon from "@/assets/icons/banknote.svg";
import homeIcon from "@/assets/icons/home.svg";
import standingsIcon from "@/assets/icons/standings.svg";

type NavItem = {
  label: string;
  svgSrc: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", svgSrc: homeIcon },
  { label: "Standings", svgSrc: standingsIcon },
  { label: "Matchups", svgSrc: matchupsIcon },
  { label: "Rosters", svgSrc: jerseyIcon },
  { label: "Transactions", svgSrc: banknoteIcon },
  { label: "Power Rank", svgSrc: powerRankIcon },
  { label: "Live Scoring", svgSrc: liveScoringIcon },
  { label: "Player Stats", svgSrc: lineChartsIcon },
  { label: "Login", svgSrc: fingerprintIcon },
];

export default function LeagueSidebar({
  active,
  onNavigate,
}: {
  active?: string;
  onNavigate?: (tab: string) => void;
}) {
  return (
    <header className="hidden lg:flex items-center gap-1 bg-sidebar border-b border-border px-5 py-2.5">
      {/* Brand logo — left side with padding */}
      <img src={rivalriesLogo} alt="Rivalries" className="h-5 shrink-0 mr-4" />

      {/* Nav icons in a horizontal row */}
      <nav className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate?.(item.label)}
              title={item.label}
              className={`relative flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-accent"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <img
                src={item.svgSrc}
                alt={item.label}
                className="w-[18px] h-[18px] icon-jitter"
                style={{
                  filter: isActive
                    ? "brightness(0) invert(0.85)"
                    : "brightness(0) invert(0.5)",
                }}
              />
            </button>
          );
        })}
      </nav>
    </header>
  );
}
