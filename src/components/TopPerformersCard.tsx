import { useState } from "react";
import { TrendingUp } from "lucide-react";

const performers = {
  MVP: [
    { rank: 1, name: "Josh Allen", pos: "QB", team: "BUF", pts: 38.4 },
    { rank: 2, name: "Saquon Barkley", pos: "RB", team: "PHI", pts: 34.2 },
    { rank: 3, name: "Ja'Marr Chase", pos: "WR", team: "CIN", pts: 31.8 },
    { rank: 4, name: "Bijan Robinson", pos: "RB", team: "ATL", pts: 28.6 },
    { rank: 5, name: "CeeDee Lamb", pos: "WR", team: "DAL", pts: 26.4 },
  ],
  QBs: [
    { rank: 1, name: "Josh Allen", pos: "QB", team: "BUF", pts: 38.4 },
    { rank: 2, name: "Lamar Jackson", pos: "QB", team: "BAL", pts: 32.1 },
    { rank: 3, name: "Patrick Mahomes", pos: "QB", team: "KC", pts: 28.9 },
    { rank: 4, name: "Jalen Hurts", pos: "QB", team: "PHI", pts: 26.3 },
    { rank: 5, name: "Joe Burrow", pos: "QB", team: "CIN", pts: 24.7 },
  ],
  RBs: [
    { rank: 1, name: "Saquon Barkley", pos: "RB", team: "PHI", pts: 34.2 },
    { rank: 2, name: "Bijan Robinson", pos: "RB", team: "ATL", pts: 28.6 },
    { rank: 3, name: "Breece Hall", pos: "RB", team: "NYJ", pts: 24.1 },
    { rank: 4, name: "Jahmyr Gibbs", pos: "RB", team: "DET", pts: 22.8 },
    { rank: 5, name: "De'Von Achane", pos: "RB", team: "MIA", pts: 21.5 },
  ],
};

const tabs = ["MVP", "QBs", "RBs"] as const;

const posColors: Record<string, string> = {
  QB: "bg-accent/15 text-accent",
  RB: "bg-success/15 text-success",
  WR: "bg-amber-500/15 text-amber-600",
  TE: "bg-purple-500/15 text-purple-600",
};

export default function TopPerformersCard() {
  const [activeTab, setActiveTab] = useState<keyof typeof performers>("MVP");

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          Top Performers
        </h3>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2.5 text-xs font-heading font-semibold uppercase tracking-wider transition-colors duration-75 ${
              activeTab === tab
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="divide-y divide-border">
        {performers[activeTab].map((p) => (
          <div key={p.rank} className="flex items-center px-5 py-3 hover:bg-muted/50 transition-colors duration-75">
            <span className="w-6 text-sm font-medium text-muted-foreground">{p.rank}</span>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-semibold text-card-foreground">{p.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">{p.team}</span>
            </div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${posColors[p.pos] || "bg-muted text-muted-foreground"}`}>
              {p.pos}
            </span>
            <span className="ml-4 text-sm font-heading font-bold tabular-nums text-card-foreground w-12 text-right">
              {p.pts.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
