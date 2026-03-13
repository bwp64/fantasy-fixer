import { Zap } from "lucide-react";

const matchups = [
  { home: "Thunder Hawks", homeScore: 142.8, away: "Gridiron Kings", awayScore: 128.4, live: true },
  { home: "Steel Curtain", homeScore: 98.2, away: "Blitz Brigade", awayScore: 112.5, live: true },
  { home: "Red Zone Rebels", homeScore: 105.6, away: "Endzone Empire", awayScore: 89.3, live: false },
  { home: "Pigskin Posse", homeScore: 76.1, away: "Fourth & Long", awayScore: 82.9, live: false },
];

export default function MatchupsCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
          Live Matchups
        </h3>
        <div className="flex items-center gap-1.5 text-xs font-medium text-success">
          <Zap className="w-3.5 h-3.5" />
          Week 12
        </div>
      </div>
      <div className="divide-y divide-border">
        {matchups.map((m, i) => {
          const homeWinning = m.homeScore > m.awayScore;
          return (
            <div key={i} className="px-5 py-4 hover:bg-muted/50 transition-colors duration-75">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-semibold ${homeWinning ? "text-card-foreground" : "text-muted-foreground"}`}>
                    {m.home}
                  </span>
                </div>
                <div className="flex items-center gap-3 mx-4">
                  <span className={`text-lg font-heading font-bold tabular-nums ${homeWinning ? "text-card-foreground" : "text-muted-foreground"}`}>
                    {m.homeScore.toFixed(1)}
                  </span>
                  <span className="text-xs text-muted-foreground">vs</span>
                  <span className={`text-lg font-heading font-bold tabular-nums ${!homeWinning ? "text-card-foreground" : "text-muted-foreground"}`}>
                    {m.awayScore.toFixed(1)}
                  </span>
                </div>
                <div className="flex-1 min-w-0 text-right">
                  <span className={`text-sm font-semibold ${!homeWinning ? "text-card-foreground" : "text-muted-foreground"}`}>
                    {m.away}
                  </span>
                </div>
              </div>
              {m.live && (
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Live
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
