import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teams = [
  { name: "Chiefs", abbr: "KC" },
  { name: "Bengals", abbr: "CIN" },
  { name: "Dolphins", abbr: "MIA" },
  { name: "Colts", abbr: "IND" },
  { name: "Ravens", abbr: "BAL" },
  { name: "Texans", abbr: "HOU" },
  { name: "Saints", abbr: "NO" },
  { name: "49ers", abbr: "SF" },
  { name: "Lions", abbr: "DET" },
  { name: "Cardinals", abbr: "AZ" },
  { name: "Vikings", abbr: "MIN" },
  { name: "Eagles", abbr: "PHI" },
];

const TOTAL_WEEKS = 14;

// Mock schedule - each team gets a random opponent per week
function generateSchedule() {
  const schedule: Record<number, Array<{ home: string; away: string }>> = {};
  for (let week = 1; week <= TOTAL_WEEKS; week++) {
    const shuffled = [...teams].sort(() => Math.random() - 0.5);
    const games: Array<{ home: string; away: string }> = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      games.push({ home: shuffled[i].abbr, away: shuffled[i + 1].abbr });
    }
    schedule[week] = games;
  }
  return schedule;
}

// Static schedule so it doesn't regenerate on re-render
const schedule = generateSchedule();

const teamNameMap: Record<string, string> = {};
teams.forEach((t) => { teamNameMap[t.abbr] = t.name; });

export default function SchedulePage() {
  const [viewMode, setViewMode] = useState<"grid" | "week">("grid");
  const [selectedWeek, setSelectedWeek] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-card-foreground">
          Schedule
        </h2>
        <div className="flex items-center gap-1 bg-secondary rounded p-0.5">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider rounded transition-colors ${
              viewMode === "grid" ? "bg-card text-card-foreground" : "text-muted-foreground"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("week")}
            className={`px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider rounded transition-colors ${
              viewMode === "week" ? "bg-card text-card-foreground" : "text-muted-foreground"
            }`}
          >
            Week
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="bg-card rounded-lg border border-border card-glow overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="text-left px-4 py-2.5 font-medium sticky left-0 bg-card z-10">Team</th>
                {Array.from({ length: TOTAL_WEEKS }, (_, i) => (
                  <th key={i} className="px-3 py-2.5 font-medium text-center min-w-[48px]">
                    W{i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.abbr} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-2 sticky left-0 bg-card z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-card-foreground text-[9px] font-bold font-heading shrink-0">
                        {team.abbr}
                      </span>
                      <span className="font-medium text-card-foreground hidden sm:inline">{team.name}</span>
                    </div>
                  </td>
                  {Array.from({ length: TOTAL_WEEKS }, (_, weekIdx) => {
                    const weekNum = weekIdx + 1;
                    const games = schedule[weekNum];
                    const game = games.find(
                      (g) => g.home === team.abbr || g.away === team.abbr
                    );
                    const isHome = game?.home === team.abbr;
                    const opponent = isHome ? game?.away : game?.home;
                    return (
                      <td key={weekIdx} className="px-3 py-2 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-[9px] text-muted-foreground">{isHome ? "vs" : "@"}</span>
                          <span className="text-[11px] font-heading font-bold text-card-foreground">{opponent}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              onClick={() => setSelectedWeek((w) => Math.max(1, w - 1))}
              disabled={selectedWeek === 1}
              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-card-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-heading font-bold uppercase tracking-wider text-card-foreground min-w-[72px] text-center">
              Week {selectedWeek}
            </span>
            <button
              onClick={() => setSelectedWeek((w) => Math.min(TOTAL_WEEKS, w + 1))}
              disabled={selectedWeek === TOTAL_WEEKS}
              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-card-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-card rounded-lg border border-border card-glow">
            {schedule[selectedWeek].map((game, i) => (
              <div key={i} className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-card-foreground text-[10px] font-bold font-heading shrink-0">
                    {game.home}
                  </span>
                  <span className="text-sm font-medium text-card-foreground truncate">{teamNameMap[game.home]}</span>
                </div>
                <span className="text-[10px] text-muted-foreground font-medium mx-4">vs</span>
                <div className="flex items-center gap-2.5 flex-1 min-w-0 justify-end">
                  <span className="text-sm font-medium text-card-foreground truncate">{teamNameMap[game.away]}</span>
                  <span className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-card-foreground text-[10px] font-bold font-heading shrink-0">
                    {game.away}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}