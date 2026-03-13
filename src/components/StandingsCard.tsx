import { useState } from "react";

type Division = "American" | "National";

const divisions: Record<Division, Array<{ name: string; abbr: string; record: string; pct: string; avgPF: string; avgPA: string; pwr: number }>> = {
  American: [
    { name: "Chiefs", abbr: "KC", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Bengals", abbr: "CIN", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Dolphins", abbr: "MIA", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Colts", abbr: "IND", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Ravens", abbr: "BAL", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Texans", abbr: "HOU", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
  ],
  National: [
    { name: "Saints", abbr: "NO", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "49ers", abbr: "SF", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Lions", abbr: "DET", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Cardinals", abbr: "AZ", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Vikings", abbr: "MIN", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
    { name: "Eagles", abbr: "PHI", record: "0-0-0", pct: ".000", avgPF: ".0", avgPA: ".0", pwr: 0 },
  ],
};

const divisionTabs: Division[] = ["American", "National"];

export default function StandingsCard() {
  const [activeDivision, setActiveDivision] = useState<Division>("American");

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          Standings
        </h3>
        <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Preseason</span>
      </div>

      <div className="flex border-b border-border">
        {divisionTabs.map((div) => (
          <button
            key={div}
            onClick={() => setActiveDivision(div)}
            className={`flex-1 px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
              activeDivision === div
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {div}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-muted-foreground">
              <th className="text-left px-5 py-2.5 font-medium">Team</th>
              <th className="text-right px-3 py-2.5 font-medium">W-L-T</th>
              <th className="text-right px-3 py-2.5 font-medium hidden sm:table-cell">%</th>
              <th className="text-right px-3 py-2.5 font-medium hidden sm:table-cell">PF</th>
              <th className="text-right px-3 py-2.5 font-medium hidden sm:table-cell">PA</th>
              <th className="text-right px-5 py-2.5 font-medium">PWR</th>
            </tr>
          </thead>
          <tbody>
            {divisions[activeDivision].map((team) => (
              <tr
                key={team.abbr}
                className="border-t border-border hover:bg-secondary/50 transition-colors"
              >
                <td className="px-5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-card-foreground text-[10px] font-bold font-heading shrink-0">
                      {team.abbr}
                    </span>
                    <span className="font-medium text-card-foreground text-sm">{team.name}</span>
                  </div>
                </td>
                <td className="text-right px-3 py-2.5 font-mono text-xs text-card-foreground">{team.record}</td>
                <td className="text-right px-3 py-2.5 font-mono text-xs text-muted-foreground hidden sm:table-cell">{team.pct}</td>
                <td className="text-right px-3 py-2.5 font-mono text-xs text-card-foreground hidden sm:table-cell">{team.avgPF}</td>
                <td className="text-right px-3 py-2.5 font-mono text-xs text-muted-foreground hidden sm:table-cell">{team.avgPA}</td>
                <td className="text-right px-5 py-2.5 font-mono text-xs text-muted-foreground">{team.pwr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}