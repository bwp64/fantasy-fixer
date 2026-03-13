import { Trophy, TrendingUp, Users, Calendar } from "lucide-react";

const stats = [
  { label: "Record", value: "10-2", icon: Trophy, accent: "text-success" },
  { label: "Points For", value: "1,842.5", icon: TrendingUp, accent: "text-accent" },
  { label: "League Rank", value: "#1", icon: Users, accent: "text-accent" },
  { label: "Next Matchup", value: "vs Kings", icon: Calendar, accent: "text-card-foreground" },
];

export default function QuickStatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-lg border border-border px-5 py-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <s.icon className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wider">{s.label}</span>
          </div>
          <p className={`text-2xl font-heading font-bold ${s.accent}`}>{s.value}</p>
        </div>
      ))}
    </div>
  );
}
