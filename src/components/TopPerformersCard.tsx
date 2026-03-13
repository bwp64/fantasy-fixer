import { TrendingUp } from "lucide-react";

export default function TopPerformersCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          Top Performers
        </h3>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {["MVP", "QB's", "RB's", "WR's", "TE's"].map((tab, i) => (
          <button
            key={tab}
            className={`flex-1 px-3 py-2.5 text-xs font-heading font-semibold uppercase tracking-wider transition-colors duration-75 ${
              i === 0
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-5 py-12 text-center">
        <p className="text-muted-foreground text-sm">No Top Performers To Report</p>
        <p className="text-xs text-muted-foreground mt-2">Stats will populate once the season begins</p>
        <a
          href="https://www44.myfantasyleague.com/2026/top?L=57893"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:underline mt-4 inline-block"
        >
          View All Top Performers →
        </a>
      </div>
    </div>
  );
}
