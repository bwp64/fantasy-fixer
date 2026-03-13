import { Newspaper } from "lucide-react";

const articles = [
  { headline: "S Juanyeh Thomas: Signs with Indy", time: "22 min ago" },
  { headline: "WR Simi Fehoko: Returns to Arizona", time: "24 min ago" },
  { headline: "CB Ja'Quan McMillian: Signs RFA tender", time: "28 min ago" },
  { headline: "WR Van Jefferson: Joining Commanders", time: "31 min ago" },
  { headline: "WR Dyami Brown: Links back up with Commanders", time: "33 min ago" },
  { headline: "S Jonathan Owens: Signs with Indy", time: "34 min ago" },
  { headline: "TE Drew Ogletree: Re-ups with Colts for one year", time: "56 min ago" },
  { headline: "QB Michael Penix: GM confirms QB battle with Tua", time: "59 min ago" },
];

function posFromHeadline(headline: string): string {
  const match = headline.match(/^(QB|RB|WR|TE|CB|S|LB|DE|DT|K|P)\s/);
  return match ? match[1] : "";
}

const posColors: Record<string, string> = {
  QB: "bg-accent/15 text-accent",
  RB: "bg-success/15 text-success",
  WR: "bg-amber-500/15 text-amber-600",
  TE: "bg-purple-500/15 text-purple-600",
  CB: "bg-muted text-muted-foreground",
  S: "bg-muted text-muted-foreground",
  LB: "bg-muted text-muted-foreground",
  DE: "bg-muted text-muted-foreground",
  DT: "bg-muted text-muted-foreground",
};

export default function NewsCard() {
  return (
    <div className="bg-card rounded-lg card-glow">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-accent" />
          Latest News
        </h3>
      </div>
      <div className="divide-y divide-border">
        {articles.map((a, i) => {
          const pos = posFromHeadline(a.headline);
          return (
            <div key={i} className="px-5 py-3.5 flex items-start gap-3 hover:bg-muted/50 transition-colors duration-75">
              {pos && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded mt-0.5 shrink-0 ${posColors[pos] || "bg-muted text-muted-foreground"}`}>
                  {pos}
                </span>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground leading-snug">{a.headline}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-5 py-3 border-t border-border">
        <a
          href="https://www44.myfantasyleague.com/2026/news_articles?L=57893&PLAYERS=A"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:underline"
        >
          View All News Articles →
        </a>
      </div>
    </div>
  );
}
