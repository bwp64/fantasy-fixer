import { useState } from "react";

type Division = "American" | "National";

const divisions: Record<Division, Array<{ name: string; abbr: string; record: string; pct: string; avgPF: string; avgPA: string; pwr: number; bbidSpent: string; bbidBal: string }>> = {
  American: [
    { name: "Chiefs", abbr: "KC", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Bengals", abbr: "CIN", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Dolphins", abbr: "MIA", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Colts", abbr: "IND", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Ravens", abbr: "BAL", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Texans", abbr: "HOU", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
  ],
  National: [
    { name: "Saints", abbr: "NO", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "49ers", abbr: "SF", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Lions", abbr: "DET", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Cardinals", abbr: "AZ", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Vikings", abbr: "MIN", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
    { name: "Eagles", abbr: "PHI", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0, bbidSpent: "$0.00", bbidBal: "$0.00" },
  ],
};

const divisionTabs: Division[] = ["American", "National"];

export default function StandingsCard() {
  const [activeDivision, setActiveDivision] = useState<Division>("American");

  return (
    <div className="bg-card rounded-lg card-glow">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
          Standings
        </h3>
        <span className="text-xs font-medium text-muted-foreground">Preseason</span>
      </div>

      {/* Division Tabs */}
      <div className="flex border-b border-border">
        {divisionTabs.map((div) => (
          <button
            key={div}
            onClick={() => setActiveDivision(div)}
            className={`flex-1 px-4 py-2.5 text-xs font-heading font-semibold uppercase tracking-wider transition-colors duration-75 ${
              activeDivision === div
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {div}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto -mx-px">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-muted-foreground">
              <th className="text-left px-5 py-3 font-medium">Team</th>
              <th className="text-right px-3 py-3 font-medium">W-L-T</th>
              <th className="text-right px-3 py-3 font-medium">%</th>
              <th className="text-right px-3 py-3 font-medium">Avg PF</th>
              <th className="text-right px-3 py-3 font-medium">Avg PA</th>
              <th className="text-right px-5 py-3 font-medium">PWR</th>
            </tr>
          </thead>
          <tbody>
            {divisions[activeDivision].map((team) => (
              <tr
                key={team.abbr}
                className="border-t border-border hover:bg-muted/50 transition-colors duration-75"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-heading shrink-0">
                      {team.abbr}
                    </span>
                    <span className="font-semibold text-card-foreground">{team.name}</span>
                  </div>
                </td>
                <td className="text-right px-3 py-3 font-mono text-card-foreground">{team.record}</td>
                <td className="text-right px-3 py-3 font-mono text-muted-foreground">{team.pct}</td>
                <td className="text-right px-3 py-3 font-mono text-card-foreground">{team.avgPF}</td>
                <td className="text-right px-3 py-3 font-mono text-muted-foreground">{team.avgPA}</td>
                <td className="text-right px-5 py-3 font-mono text-muted-foreground">{team.pwr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
