const teams = [
  { rank: 1, name: "Thunder Hawks", owner: "Brent P.", wins: 10, losses: 2, pf: 1842.5, pa: 1456.2 },
  { rank: 2, name: "Gridiron Kings", owner: "Mike R.", wins: 9, losses: 3, pf: 1798.3, pa: 1502.1 },
  { rank: 3, name: "Steel Curtain", owner: "Jake L.", wins: 8, losses: 4, pf: 1756.8, pa: 1589.4 },
  { rank: 4, name: "Blitz Brigade", owner: "Sarah K.", wins: 7, losses: 5, pf: 1701.2, pa: 1634.7 },
  { rank: 5, name: "Red Zone Rebels", owner: "Chris D.", wins: 6, losses: 6, pf: 1654.9, pa: 1678.3 },
  { rank: 6, name: "Endzone Empire", owner: "Alex T.", wins: 5, losses: 7, pf: 1598.4, pa: 1712.5 },
  { rank: 7, name: "Pigskin Posse", owner: "Dan W.", wins: 4, losses: 8, pf: 1523.7, pa: 1745.6 },
  { rank: 8, name: "Fourth & Long", owner: "Lisa M.", wins: 2, losses: 10, pf: 1402.1, pa: 1801.9 },
];

export default function StandingsCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
          Standings
        </h3>
        <span className="text-xs font-medium text-muted-foreground">Week 12</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-muted-foreground">
              <th className="text-left px-5 py-3 font-medium">#</th>
              <th className="text-left px-5 py-3 font-medium">Team</th>
              <th className="text-right px-5 py-3 font-medium">W</th>
              <th className="text-right px-5 py-3 font-medium">L</th>
              <th className="text-right px-5 py-3 font-medium">PF</th>
              <th className="text-right px-5 py-3 font-medium">PA</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr
                key={team.rank}
                className="border-t border-border hover:bg-muted/50 transition-colors duration-75"
              >
                <td className="px-5 py-3 font-medium text-muted-foreground">{team.rank}</td>
                <td className="px-5 py-3">
                  <div>
                    <span className="font-semibold text-card-foreground">{team.name}</span>
                    <span className="block text-xs text-muted-foreground">{team.owner}</span>
                  </div>
                </td>
                <td className="text-right px-5 py-3 font-semibold text-success">{team.wins}</td>
                <td className="text-right px-5 py-3 font-semibold text-destructive">{team.losses}</td>
                <td className="text-right px-5 py-3 font-mono text-card-foreground">{team.pf.toFixed(1)}</td>
                <td className="text-right px-5 py-3 font-mono text-muted-foreground">{team.pa.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
