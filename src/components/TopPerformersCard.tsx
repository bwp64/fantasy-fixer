import { useState } from "react";
import { TrendingUp } from "lucide-react";

const positions = ["MVP", "QB's", "RB's", "WR's", "TE's"] as const;
type Position = typeof positions[number];

const topPlayers: Record<Position, Array<{ rank: number; name: string; pos: string; team: string; pts: number }>> = {
  "MVP": [
    { rank: 1, name: "Josh Allen", pos: "QB", team: "BUF", pts: 412.8 },
    { rank: 2, name: "Saquon Barkley", pos: "RB", team: "PHI", pts: 389.4 },
    { rank: 3, name: "Ja'Marr Chase", pos: "WR", team: "CIN", pts: 371.2 },
    { rank: 4, name: "Lamar Jackson", pos: "QB", team: "BAL", pts: 358.6 },
    { rank: 5, name: "Bijan Robinson", pos: "RB", team: "ATL", pts: 345.1 },
    { rank: 6, name: "CeeDee Lamb", pos: "WR", team: "DAL", pts: 332.7 },
    { rank: 7, name: "Jalen Hurts", pos: "QB", team: "PHI", pts: 324.9 },
    { rank: 8, name: "Breece Hall", pos: "RB", team: "NYJ", pts: 312.3 },
    { rank: 9, name: "Amon-Ra St. Brown", pos: "WR", team: "DET", pts: 298.5 },
    { rank: 10, name: "Sam LaPorta", pos: "TE", team: "DET", pts: 284.1 },
  ],
  "QB's": [
    { rank: 1, name: "Josh Allen", pos: "QB", team: "BUF", pts: 412.8 },
    { rank: 2, name: "Lamar Jackson", pos: "QB", team: "BAL", pts: 358.6 },
    { rank: 3, name: "Jalen Hurts", pos: "QB", team: "PHI", pts: 324.9 },
    { rank: 4, name: "Patrick Mahomes", pos: "QB", team: "KC", pts: 310.2 },
    { rank: 5, name: "Joe Burrow", pos: "QB", team: "CIN", pts: 298.7 },
    { rank: 6, name: "C.J. Stroud", pos: "QB", team: "HOU", pts: 287.3 },
    { rank: 7, name: "Jayden Daniels", pos: "QB", team: "WAS", pts: 276.4 },
    { rank: 8, name: "Caleb Williams", pos: "QB", team: "CHI", pts: 264.8 },
    { rank: 9, name: "Dak Prescott", pos: "QB", team: "DAL", pts: 253.1 },
    { rank: 10, name: "Jordan Love", pos: "QB", team: "GB", pts: 241.5 },
  ],
  "RB's": [
    { rank: 1, name: "Saquon Barkley", pos: "RB", team: "PHI", pts: 389.4 },
    { rank: 2, name: "Bijan Robinson", pos: "RB", team: "ATL", pts: 345.1 },
    { rank: 3, name: "Breece Hall", pos: "RB", team: "NYJ", pts: 312.3 },
    { rank: 4, name: "Jahmyr Gibbs", pos: "RB", team: "DET", pts: 296.8 },
    { rank: 5, name: "De'Von Achane", pos: "RB", team: "MIA", pts: 281.4 },
    { rank: 6, name: "Jonathan Taylor", pos: "RB", team: "IND", pts: 268.9 },
    { rank: 7, name: "Kyren Williams", pos: "RB", team: "LAR", pts: 254.2 },
    { rank: 8, name: "Derrick Henry", pos: "RB", team: "BAL", pts: 242.6 },
    { rank: 9, name: "Josh Jacobs", pos: "RB", team: "GB", pts: 231.3 },
    { rank: 10, name: "Isiah Pacheco", pos: "RB", team: "KC", pts: 218.7 },
  ],
  "WR's": [
    { rank: 1, name: "Ja'Marr Chase", pos: "WR", team: "CIN", pts: 371.2 },
    { rank: 2, name: "CeeDee Lamb", pos: "WR", team: "DAL", pts: 332.7 },
    { rank: 3, name: "Amon-Ra St. Brown", pos: "WR", team: "DET", pts: 298.5 },
    { rank: 4, name: "Tyreek Hill", pos: "WR", team: "MIA", pts: 287.3 },
    { rank: 5, name: "Marvin Harrison Jr.", pos: "WR", team: "AZ", pts: 274.6 },
    { rank: 6, name: "Malik Nabers", pos: "WR", team: "NYG", pts: 263.1 },
    { rank: 7, name: "Garrett Wilson", pos: "WR", team: "NYJ", pts: 251.8 },
    { rank: 8, name: "Drake London", pos: "WR", team: "ATL", pts: 241.4 },
    { rank: 9, name: "Justin Jefferson", pos: "WR", team: "MIN", pts: 234.7 },
    { rank: 10, name: "Puka Nacua", pos: "WR", team: "LAR", pts: 223.2 },
  ],
  "TE's": [
    { rank: 1, name: "Sam LaPorta", pos: "TE", team: "DET", pts: 284.1 },
    { rank: 2, name: "Trey McBride", pos: "TE", team: "AZ", pts: 248.6 },
    { rank: 3, name: "Travis Kelce", pos: "TE", team: "KC", pts: 231.4 },
    { rank: 4, name: "George Kittle", pos: "TE", team: "SF", pts: 218.9 },
    { rank: 5, name: "Mark Andrews", pos: "TE", team: "BAL", pts: 204.3 },
    { rank: 6, name: "Dalton Kincaid", pos: "TE", team: "BUF", pts: 192.7 },
    { rank: 7, name: "Kyle Pitts", pos: "TE", team: "ATL", pts: 181.2 },
    { rank: 8, name: "Brock Bowers", pos: "TE", team: "LV", pts: 174.6 },
    { rank: 9, name: "David Njoku", pos: "TE", team: "CLE", pts: 163.8 },
    { rank: 10, name: "Evan Engram", pos: "TE", team: "JAX", pts: 152.4 },
  ],
};

const posColors: Record<string, string> = {
  QB: "bg-accent/15 text-accent",
  RB: "bg-success/15 text-success",
  WR: "bg-amber-500/15 text-amber-600",
  TE: "bg-purple-500/15 text-purple-600",
};

export default function TopPerformersCard() {
  const [activeTab, setActiveTab] = useState<Position>("MVP");

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          Top 10 Players
        </h3>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {positions.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2.5 text-xs font-heading font-semibold uppercase tracking-wider transition-colors duration-75 ${
              activeTab === tab
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Player List */}
      <div className="divide-y divide-border">
        {topPlayers[activeTab].map((p, i) => (
          <div
            key={p.rank}
            className="flex items-center px-5 py-3 hover:bg-muted/50 transition-colors duration-75 animate-fade-in"
            style={{ animationDelay: `${i * 30}ms`, animationFillMode: "both" }}
          >
            <span className="w-6 text-sm font-heading font-bold text-muted-foreground">{p.rank}</span>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-semibold text-card-foreground">{p.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">{p.team}</span>
            </div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${posColors[p.pos] || "bg-muted text-muted-foreground"}`}>
              {p.pos}
            </span>
            <span className="ml-4 text-sm font-heading font-bold tabular-nums text-card-foreground w-14 text-right">
              {p.pts.toFixed(1)}
            </span>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-border">
        <a
          href="https://www44.myfantasyleague.com/2026/top?L=57893"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:underline"
        >
          View All Top Performers →
        </a>
      </div>
    </div>
  );
}
