import { Clock } from "lucide-react";

const matchups = [
  { home: "Chiefs", homeAbbr: "KC", away: "Saints", awayAbbr: "NO" },
  { home: "Bengals", homeAbbr: "CIN", away: "49ers", awayAbbr: "SF" },
  { home: "Dolphins", homeAbbr: "MIA", away: "Lions", awayAbbr: "DET" },
  { home: "Colts", homeAbbr: "IND", away: "Cardinals", awayAbbr: "AZ" },
  { home: "Ravens", homeAbbr: "BAL", away: "Vikings", awayAbbr: "MIN" },
  { home: "Texans", homeAbbr: "HOU", away: "Eagles", awayAbbr: "PHI" },
];

export default function MatchupsCard() {
  return (
    <div className="bg-card rounded-lg card-glow">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
          Matchups
        </h3>
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          Preseason
        </div>
      </div>
      <div className="divide-y divide-border">
        {matchups.map((m, i) => (
          <div key={i} className="px-3 md:px-5 py-3 md:py-4 hover:bg-muted/50 active:bg-muted/50 transition-colors duration-75">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-[10px] md:text-xs font-bold font-heading shrink-0">
                  {m.homeAbbr}
                </span>
                <span className="text-xs md:text-sm font-semibold text-card-foreground truncate">{m.home}</span>
              </div>
              <div className="flex items-center gap-3 mx-4">
                <span className="text-lg font-heading font-bold tabular-nums text-muted-foreground">0</span>
                <span className="text-xs text-muted-foreground font-medium">vs</span>
                <span className="text-lg font-heading font-bold tabular-nums text-muted-foreground">0</span>
              </div>
              <div className="flex items-center gap-2.5 flex-1 min-w-0 justify-end">
                <span className="text-sm font-semibold text-card-foreground">{m.away}</span>
                <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-heading shrink-0">
                  {m.awayAbbr}
                </span>
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              <span className="text-xs text-muted-foreground">Season not started</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
