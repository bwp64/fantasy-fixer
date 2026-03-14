const articles = [
  {
    source: "Rivalries",
    headline: "McCaffrey Drops 42 in a Blowout Win Over the Ravens",
    initials: "CM",
    accentColor: "hsl(var(--pos-rb))",
    featured: true,
  },
  {
    source: "League Wire",
    headline: "Trade Alert: Mahomes Shipped to Dynasty Chasers for 3 Picks",
    initials: "PM",
    accentColor: "hsl(var(--pos-qb))",
  },
  {
    source: "Waiver Watch",
    headline: "Puka Nacua Emerges as Must-Start After Week 8 Explosion",
    initials: "PN",
    accentColor: "hsl(var(--pos-wr))",
  },
  {
    source: "Power Rankings",
    headline: "Kelce Owner Climbs to #1 After Back-to-Back Weeks",
    initials: "TK",
    accentColor: "hsl(var(--pos-te))",
  },
];

export default function XFeedCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          Feed
        </h3>
        <span className="text-[11px] font-medium text-muted-foreground">
          Latest
        </span>
      </div>

      <div className="p-3 space-y-2.5">
        {articles.map((article, i) => (
          <article
            key={i}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            style={{ minHeight: article.featured ? 160 : 88 }}
          >
            {/* Dark base */}
            <div className="absolute inset-0 bg-secondary" />

            {/* Gradient: transparent top → solid dark bottom */}
            <div
              className="absolute inset-0"
              style={{
                background: article.featured
                  ? "linear-gradient(to bottom, hsl(var(--secondary) / 0.3) 0%, hsl(var(--secondary)) 65%)"
                  : "linear-gradient(to right, hsl(var(--secondary)) 55%, hsl(var(--secondary) / 0.4) 100%)",
              }}
            />

            {/* Content layer */}
            <div className={`relative z-10 h-full flex ${article.featured ? "flex-col justify-end p-4" : "items-center p-3.5 gap-3"}`}>
              {!article.featured && (
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: article.accentColor }}
                  >
                    {article.source}
                  </span>
                  <h4 className="font-heading text-[13px] font-bold leading-snug text-card-foreground mt-0.5 line-clamp-2 group-hover:text-accent transition-colors">
                    {article.headline}
                  </h4>
                </div>
              )}

              {/* Headshot circle tucked into gradient */}
              <div
                className={`flex-shrink-0 rounded-full flex items-center justify-center font-heading font-bold text-card-foreground ${
                  article.featured ? "absolute top-3 right-3 w-11 h-11 text-sm" : "w-12 h-12 text-sm"
                }`}
                style={{
                  background: `linear-gradient(135deg, ${article.accentColor}, hsl(var(--secondary)))`,
                  boxShadow: `0 4px 12px ${article.accentColor}33`,
                }}
              >
                {article.initials}
              </div>

              {article.featured && (
                <div className="mt-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: article.accentColor }}
                  >
                    {article.source}
                  </span>
                  <h4 className="font-heading text-base font-bold leading-snug text-card-foreground mt-1 group-hover:text-accent transition-colors">
                    {article.headline}
                  </h4>
                </div>
              )}
            </div>

            {/* Three-dot menu */}
            <div className="absolute bottom-2.5 right-3 z-10 text-muted-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              •••
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
