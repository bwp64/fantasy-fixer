import { useState } from "react";
import { playerImgUrl } from "@/lib/playerHeadshots";

const positions = ["MVP", "QB", "RB", "WR", "TE"] as const;
type Position = typeof positions[number];

type Player = {
  rank: number;
  firstName: string;
  lastName: string;
  pos: string;
  team: string;
  pts: number;
  playerId: string;
};

const topPlayers: Record<Position, Player[]> = {
  MVP: [
    { rank: 1, firstName: "Josh", lastName: "Allen", pos: "QB", team: "BUF", pts: 412.8, playerId: "13589" },
    { rank: 2, firstName: "Saquon", lastName: "Barkley", pos: "RB", team: "PHI", pts: 389.4, playerId: "13604" },
    { rank: 3, firstName: "Ja'Marr", lastName: "Chase", pos: "WR", team: "CIN", pts: 371.2, playerId: "15281" },
    { rank: 4, firstName: "Lamar", lastName: "Jackson", pos: "QB", team: "BAL", pts: 358.6, playerId: "13593" },
    { rank: 5, firstName: "Bijan", lastName: "Robinson", pos: "RB", team: "ATL", pts: 345.1, playerId: "16161" },
    { rank: 6, firstName: "CeeDee", lastName: "Lamb", pos: "WR", team: "DAL", pts: 332.7, playerId: "14832" },
    { rank: 7, firstName: "Jalen", lastName: "Hurts", pos: "QB", team: "PHI", pts: 324.9, playerId: "14783" },
    { rank: 8, firstName: "Breece", lastName: "Hall", pos: "RB", team: "NYJ", pts: 312.3, playerId: "15708" },
    { rank: 9, firstName: "Amon-Ra", lastName: "St. Brown", pos: "WR", team: "DET", pts: 298.5, playerId: "15287" },
    { rank: 10, firstName: "Sam", lastName: "LaPorta", pos: "TE", team: "DET", pts: 284.1, playerId: "16214" },
  ],
  QB: [
    { rank: 1, firstName: "Josh", lastName: "Allen", pos: "QB", team: "BUF", pts: 412.8, playerId: "13589" },
    { rank: 2, firstName: "Lamar", lastName: "Jackson", pos: "QB", team: "BAL", pts: 358.6, playerId: "13593" },
    { rank: 3, firstName: "Jalen", lastName: "Hurts", pos: "QB", team: "PHI", pts: 324.9, playerId: "14783" },
    { rank: 4, firstName: "Patrick", lastName: "Mahomes", pos: "QB", team: "KC", pts: 310.2, playerId: "13116" },
    { rank: 5, firstName: "Joe", lastName: "Burrow", pos: "QB", team: "CIN", pts: 298.7, playerId: "14777" },
    { rank: 6, firstName: "C.J.", lastName: "Stroud", pos: "QB", team: "HOU", pts: 287.3, playerId: "16150" },
    { rank: 7, firstName: "Jayden", lastName: "Daniels", pos: "QB", team: "WAS", pts: 276.4, playerId: "16581" },
    { rank: 8, firstName: "Caleb", lastName: "Williams", pos: "QB", team: "CHI", pts: 264.8, playerId: "16579" },
    { rank: 9, firstName: "Dak", lastName: "Prescott", pos: "QB", team: "DAL", pts: 253.1, playerId: "12620" },
    { rank: 10, firstName: "Jordan", lastName: "Love", pos: "QB", team: "GB", pts: 241.5, playerId: "14782" },
  ],
  RB: [
    { rank: 1, firstName: "Saquon", lastName: "Barkley", pos: "RB", team: "PHI", pts: 389.4, playerId: "13604" },
    { rank: 2, firstName: "Bijan", lastName: "Robinson", pos: "RB", team: "ATL", pts: 345.1, playerId: "16161" },
    { rank: 3, firstName: "Breece", lastName: "Hall", pos: "RB", team: "NYJ", pts: 312.3, playerId: "15708" },
    { rank: 4, firstName: "Jahmyr", lastName: "Gibbs", pos: "RB", team: "DET", pts: 296.8, playerId: "16162" },
    { rank: 5, firstName: "De'Von", lastName: "Achane", pos: "RB", team: "MIA", pts: 281.4, playerId: "16167" },
    { rank: 6, firstName: "Jonathan", lastName: "Taylor", pos: "RB", team: "IND", pts: 268.9, playerId: "14802" },
    { rank: 7, firstName: "Kyren", lastName: "Williams", pos: "RB", team: "LAR", pts: 254.2, playerId: "15710" },
    { rank: 8, firstName: "Derrick", lastName: "Henry", pos: "RB", team: "BAL", pts: 242.6, playerId: "12626" },
    { rank: 9, firstName: "Josh", lastName: "Jacobs", pos: "RB", team: "GB", pts: 231.3, playerId: "14073" },
    { rank: 10, firstName: "Isiah", lastName: "Pacheco", pos: "RB", team: "KC", pts: 218.7, playerId: "15749" },
  ],
  WR: [
    { rank: 1, firstName: "Ja'Marr", lastName: "Chase", pos: "WR", team: "CIN", pts: 371.2, playerId: "15281" },
    { rank: 2, firstName: "CeeDee", lastName: "Lamb", pos: "WR", team: "DAL", pts: 332.7, playerId: "14832" },
    { rank: 3, firstName: "Amon-Ra", lastName: "St. Brown", pos: "WR", team: "DET", pts: 298.5, playerId: "15287" },
    { rank: 4, firstName: "Tyreek", lastName: "Hill", pos: "WR", team: "MIA", pts: 287.3, playerId: "12801" },
    { rank: 5, firstName: "Marvin", lastName: "Harrison Jr.", pos: "WR", team: "AZ", pts: 274.6, playerId: "16614" },
    { rank: 6, firstName: "Malik", lastName: "Nabers", pos: "WR", team: "NYG", pts: 263.1, playerId: "16615" },
    { rank: 7, firstName: "Garrett", lastName: "Wilson", pos: "WR", team: "NYJ", pts: 251.8, playerId: "15753" },
    { rank: 8, firstName: "Drake", lastName: "London", pos: "WR", team: "ATL", pts: 241.4, playerId: "15751" },
    { rank: 9, firstName: "Justin", lastName: "Jefferson", pos: "WR", team: "MIN", pts: 234.7, playerId: "14836" },
    { rank: 10, firstName: "Puka", lastName: "Nacua", pos: "WR", team: "LAR", pts: 223.2, playerId: "16211" },
  ],
  TE: [
    { rank: 1, firstName: "Sam", lastName: "LaPorta", pos: "TE", team: "DET", pts: 284.1, playerId: "16214" },
    { rank: 2, firstName: "Trey", lastName: "McBride", pos: "TE", team: "AZ", pts: 248.6, playerId: "15794" },
    { rank: 3, firstName: "Travis", lastName: "Kelce", pos: "TE", team: "KC", pts: 231.4, playerId: "11244" },
    { rank: 4, firstName: "George", lastName: "Kittle", pos: "TE", team: "SF", pts: 218.9, playerId: "13299" },
    { rank: 5, firstName: "Mark", lastName: "Andrews", pos: "TE", team: "BAL", pts: 204.3, playerId: "13671" },
    { rank: 6, firstName: "Dalton", lastName: "Kincaid", pos: "TE", team: "BUF", pts: 192.7, playerId: "16213" },
    { rank: 7, firstName: "Kyle", lastName: "Pitts", pos: "TE", team: "ATL", pts: 181.2, playerId: "15329" },
    { rank: 8, firstName: "Brock", lastName: "Bowers", pos: "TE", team: "LV", pts: 174.6, playerId: "16641" },
    { rank: 9, firstName: "David", lastName: "Njoku", pos: "TE", team: "CLE", pts: 163.8, playerId: "13192" },
    { rank: 10, firstName: "Evan", lastName: "Engram", pos: "TE", team: "JAX", pts: 152.4, playerId: "13189" },
  ],
};

const posColorMap: Record<string, string> = {
  QB: "bg-pos-qb text-accent-foreground",
  RB: "bg-pos-rb text-success-foreground",
  WR: "bg-pos-wr text-primary-foreground",
  TE: "bg-pos-te text-accent-foreground",
};

const posBorderMap: Record<string, string> = {
  QB: "border-pos-qb",
  RB: "border-pos-rb",
  WR: "border-pos-wr",
  TE: "border-pos-te",
};



export default function TopPerformersCard() {
  const [activeTab, setActiveTab] = useState<Position>("MVP");

  return (
    <div className="bg-card rounded-lg border border-border card-glow">
      <div className="px-5 py-3.5">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          Top Performers
        </h3>
      </div>

      <div className="flex">
        {positions.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {topPlayers[activeTab].map((p) => (
          <a
            key={`${activeTab}-${p.playerId}`}
            href={`https://www44.myfantasyleague.com/2026/player?L=57893&P=${p.playerId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2.5 hover:bg-secondary/50 transition-colors group"
          >
            <span className="w-7 text-sm font-heading font-bold text-muted-foreground tabular-nums text-right mr-2">{p.rank}.</span>

            <div className="relative shrink-0 mr-3" style={{ width: 49, height: 49 }}>
              <img
                src={playerImgUrl(p.playerId)}
                alt={`${p.lastName} ${p.firstName}`}
                width={96}
                height={96}
                decoding="async"
                className="rounded-full object-cover border-2 border-accent bg-secondary"
                style={{ width: 45, height: 45 }}
                loading="lazy"
              />
            </div>

            <div className="flex-1 min-w-0">
              <span className="block text-sm font-heading font-bold uppercase tracking-wide text-card-foreground group-hover:text-accent transition-colors leading-tight">
                {p.lastName}
              </span>
              <span className="block text-[11px] text-muted-foreground uppercase tracking-wide leading-tight">
                {p.firstName}
              </span>
            </div>

            <div className="text-right mr-4">
              <span className="block text-xs font-heading font-bold uppercase text-accent">{p.pos}</span>
              <span className="block text-[11px] text-muted-foreground">{p.team}</span>
            </div>

            <span className="text-sm font-heading font-bold tabular-nums text-card-foreground w-12 text-right">
              {p.pts.toFixed(1)}
            </span>
          </a>
        ))}
      </div>

      <div className="px-5 py-3">
        <a
          href="https://www44.myfantasyleague.com/2026/top?L=57893"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:underline"
        >
          View All →
        </a>
      </div>
    </div>
  );
}