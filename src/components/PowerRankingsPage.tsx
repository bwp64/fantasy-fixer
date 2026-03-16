const rankings = [
  { rank: 1, prev: 1, name: "Chiefs", abbr: "KC", record: "0-0", pts: 0, trend: "same" as const },
  { rank: 2, prev: 3, name: "Bengals", abbr: "CIN", record: "0-0", pts: 0, trend: "up" as const },
  { rank: 3, prev: 2, name: "Dolphins", abbr: "MIA", record: "0-0", pts: 0, trend: "down" as const },
  { rank: 4, prev: 4, name: "Colts", abbr: "IND", record: "0-0", pts: 0, trend: "same" as const },
  { rank: 5, prev: 7, name: "Ravens", abbr: "BAL", record: "0-0", pts: 0, trend: "up" as const },
  { rank: 6, prev: 5, name: "Texans", abbr: "HOU", record: "0-0", pts: 0, trend: "down" as const },
  { rank: 7, prev: 6, name: "Saints", abbr: "NO", record: "0-0", pts: 0, trend: "down" as const },
  { rank: 8, prev: 8, name: "49ers", abbr: "SF", record: "0-0", pts: 0, trend: "same" as const },
  { rank: 9, prev: 11, name: "Lions", abbr: "DET", record: "0-0", pts: 0, trend: "up" as const },
  { rank: 10, prev: 9, name: "Cardinals", abbr: "AZ", record: "0-0", pts: 0, trend: "down" as const },
  { rank: 11, prev: 10, name: "Vikings", abbr: "MIN", record: "0-0", pts: 0, trend: "down" as const },
  { rank: 12, prev: 12, name: "Eagles", abbr: "PHI", record: "0-0", pts: 0, trend: "same" as const },
];

function TrendIcon({ trend }: { trend: "up" | "down" | "same" }) {
  if (trend === "up")
    return (
      <svg className="w-3.5 h-3.5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path d="M12 19V5m0 0l-5 5m5-5l5 5" />
      </svg>
    );
  if (trend === "down")
    return (
      <svg className="w-3.5 h-3.5 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path d="M12 5v14m0 0l5-5m-5 5l-5-5" />
      </svg>
    );
  return (
    <span className="w-3.5 h-3.5 flex items-center justify-center text-muted-foreground text-[10px]">—</span>
  );
}

export default function PowerRankingsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-card-foreground">
          Power Rankings
        </h2>
        <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Preseason</span>
      </div>

      <div className="bg-card rounded-lg border border-border card-glow">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="text-left px-5 py-3 font-medium w-12">#</th>
                <th className="text-left py-3 font-medium">Team</th>
                <th className="text-center px-3 py-3 font-medium w-16">Trend</th>
                <th className="text-right px-3 py-3 font-medium hidden sm:table-cell">Record</th>
                <th className="text-right px-5 py-3 font-medium">Prev</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((team) => {
                const diff = team.prev - team.rank;
                return (
                  <tr key={team.abbr} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-5 py-3">
                      <span className={`font-heading text-lg font-bold tabular-nums ${
                        team.rank <= 3 ? "text-accent" : "text-card-foreground"
                      }`}>
                        {team.rank}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-card-foreground text-[10px] font-bold font-heading shrink-0">
                          {team.abbr}
                        </span>
                        <span className="font-heading font-bold text-card-foreground">{team.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center justify-center gap-1">
                        <TrendIcon trend={team.trend} />
                        {diff !== 0 && (
                          <span className={`text-[11px] font-heading font-bold ${
                            diff > 0 ? "text-success" : "text-destructive"
                          }`}>
                            {Math.abs(diff)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="text-right px-3 py-3 font-mono text-xs text-muted-foreground hidden sm:table-cell">
                      {team.record}
                    </td>
                    <td className="text-right px-5 py-3 font-mono text-xs text-muted-foreground">
                      {team.prev}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
