import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const matchups = [
  { home: "Chiefs", homeAbbr: "KC", away: "Saints", awayAbbr: "NO" },
  { home: "Bengals", homeAbbr: "CIN", away: "49ers", awayAbbr: "SF" },
  { home: "Dolphins", homeAbbr: "MIA", away: "Lions", awayAbbr: "DET" },
  { home: "Colts", homeAbbr: "IND", away: "Cardinals", awayAbbr: "AZ" },
  { home: "Ravens", homeAbbr: "BAL", away: "Vikings", awayAbbr: "MIN" },
  { home: "Texans", homeAbbr: "HOU", away: "Eagles", awayAbbr: "PHI" },
];

const TOTAL_WEEKS = 14;

export default function MatchupsCard() {
  const [week, setWeek] = useState(1);

  return (
    <div className="bg-card rounded-lg border border-border card-glow">
      <div className="px-5 py-3.5 flex items-center justify-between">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          Matchups
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setWeek((w) => Math.max(1, w - 1))}
            disabled={week === 1}
            className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-card-foreground disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-muted-foreground min-w-[52px] text-center">
            Week {week}
          </span>
          <button
            onClick={() => setWeek((w) => Math.min(TOTAL_WEEKS, w + 1))}
            disabled={week === TOTAL_WEEKS}
            className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-card-foreground disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div className="divide-y divide-border">
        {matchups.map((m, i) => (
          <div key={i} className="px-4 py-3 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-card-foreground text-[10px] font-bold font-heading shrink-0">
                  {m.homeAbbr}
                </span>
                <span className="text-sm font-medium text-card-foreground truncate">{m.home}</span>
              </div>
              <div className="flex items-center gap-3 mx-4">
                <span className="text-lg font-heading font-bold tabular-nums text-muted-foreground">0</span>
                <span className="text-[10px] text-muted-foreground font-medium">–</span>
                <span className="text-lg font-heading font-bold tabular-nums text-muted-foreground">0</span>
              </div>
              <div className="flex items-center gap-2.5 flex-1 min-w-0 justify-end">
                <span className="text-sm font-medium text-card-foreground truncate">{m.away}</span>
                <span className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-card-foreground text-[10px] font-bold font-heading shrink-0">
                  {m.awayAbbr}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}