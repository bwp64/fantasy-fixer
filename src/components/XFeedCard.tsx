const tweets = [
  {
    handle: "@AdamSchefter",
    name: "Adam Schefter",
    avatar: "AS",
    verified: true,
    text: "Breaking: Christian McCaffrey has been traded to the Dynasty Chasers in a blockbuster deal involving 3 first-round picks. League sources confirm.",
    time: "2m",
    replies: 124,
    retweets: 891,
    likes: "3.2K",
  },
  {
    handle: "@RapSheet",
    name: "Ian Rapoport",
    avatar: "IR",
    verified: true,
    text: "Source: Patrick Mahomes expected to return to full practice Wednesday. Fantasy managers should have him locked in for Week 9. 🏈",
    time: "18m",
    replies: 47,
    retweets: 312,
    likes: "1.8K",
  },
  {
    handle: "@FieldYates",
    name: "Field Yates",
    avatar: "FY",
    verified: true,
    text: "Puka Nacua: 11 targets, 9 catches, 147 yards, 2 TDs. The rookie is a league winner. If he's still on your waiver wire, run.",
    time: "1h",
    replies: 89,
    retweets: 445,
    likes: "2.4K",
  },
  {
    handle: "@MattBerryTMR",
    name: "Matthew Berry",
    avatar: "MB",
    verified: true,
    text: "I've been saying it for weeks — Travis Kelce is back. Top-3 TE rest of season. Don't get cute, start your studs.",
    time: "2h",
    replies: 201,
    retweets: 178,
    likes: "1.1K",
  },
  {
    handle: "@PFF_Fantasy",
    name: "PFF Fantasy",
    avatar: "PF",
    verified: true,
    text: "Week 9 Start/Sit thread 🧵\n\nQB: Start Stroud, Sit Hurts\nRB: Start Achane, Sit Swift\nWR: Start Nacua, Sit DK\nTE: Start Kelce, Sit Pitts",
    time: "3h",
    replies: 334,
    retweets: 612,
    likes: "4.1K",
  },
];

export default function XFeedCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          𝕏 Feed
        </h3>
        <span className="text-[11px] font-medium text-muted-foreground">
          Latest
        </span>
      </div>

      <div className="divide-y divide-border">
        {tweets.map((tweet, i) => (
          <article
            key={i}
            className="px-4 py-3.5 cursor-pointer group hover:bg-secondary/40 transition-colors"
          >
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-heading text-xs font-bold text-muted-foreground">
                {tweet.avatar}
              </div>

              <div className="flex-1 min-w-0">
                {/* Name row */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-heading text-[13px] font-bold text-card-foreground leading-none">
                    {tweet.name}
                  </span>
                  {tweet.verified && (
                    <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67 2.88 13.43 2 12 2s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81C9.33 21.12 10.57 22 12 22s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91C21.12 14.67 22 13.43 22 12zm-11.07 4.83-3.54-3.54 1.41-1.41 2.13 2.12 4.24-4.24 1.41 1.41-5.65 5.66z" />
                    </svg>
                  )}
                  <span className="text-[12px] text-muted-foreground leading-none">
                    {tweet.handle}
                  </span>
                  <span className="text-[12px] text-muted-foreground leading-none">·</span>
                  <span className="text-[12px] text-muted-foreground leading-none">
                    {tweet.time}
                  </span>
                </div>

                {/* Tweet text */}
                <p className="text-[13px] text-card-foreground/90 leading-relaxed mt-1.5 whitespace-pre-line">
                  {tweet.text}
                </p>

                {/* Engagement row */}
                <div className="flex items-center gap-5 mt-2.5">
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground group-hover:text-accent/70 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M12 21a9 9 0 1 0-9-9c0 1.5.4 2.9 1 4.2L3 21l4.8-1c1.3.6 2.7 1 4.2 1z" />
                    </svg>
                    {tweet.replies}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground group-hover:text-success/70 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4" />
                    </svg>
                    {tweet.retweets}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground group-hover:text-destructive/70 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {tweet.likes}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
