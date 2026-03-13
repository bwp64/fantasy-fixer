import { ArrowRightLeft, Plus, Minus, Clock } from "lucide-react";

const activities = [
  { type: "trade", time: "2h ago", desc: "Thunder Hawks traded Davante Adams to Gridiron Kings for 2027 1st" },
  { type: "add", time: "5h ago", desc: "Blitz Brigade added Marvin Harrison Jr. from Waivers" },
  { type: "drop", time: "5h ago", desc: "Blitz Brigade dropped Jaxon Smith-Njigba" },
  { type: "trade", time: "1d ago", desc: "Steel Curtain traded Travis Kelce to Red Zone Rebels for Trey McBride + 2027 2nd" },
  { type: "add", time: "1d ago", desc: "Endzone Empire added Bo Nix from Free Agency" },
  { type: "drop", time: "2d ago", desc: "Fourth & Long dropped Sam LaPorta" },
];

const icons: Record<string, typeof ArrowRightLeft> = {
  trade: ArrowRightLeft,
  add: Plus,
  drop: Minus,
};

const iconStyles: Record<string, string> = {
  trade: "bg-accent/15 text-accent",
  add: "bg-success/15 text-success",
  drop: "bg-destructive/15 text-destructive",
};

export default function RecentActivityCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
          Recent Activity
        </h3>
      </div>
      <div className="divide-y divide-border">
        {activities.map((a, i) => {
          const Icon = icons[a.type] || Clock;
          return (
            <div key={i} className="px-5 py-3.5 flex items-start gap-3 hover:bg-muted/50 transition-colors duration-75">
              <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${iconStyles[a.type]}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground leading-snug">{a.desc}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
