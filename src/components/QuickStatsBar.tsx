import { Trophy, Users, Calendar, Shield } from "lucide-react";

const stats = [
  { label: "Teams", value: "12", icon: Users, accent: "text-accent" },
  { label: "Divisions", value: "2", icon: Shield, accent: "text-card-foreground" },
  { label: "Season", value: "2026", icon: Calendar, accent: "text-card-foreground" },
  { label: "Defending Champ", value: "Chiefs", icon: Trophy, accent: "text-success" },
];

export default function QuickStatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-lg card-glow px-5 py-4">
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
