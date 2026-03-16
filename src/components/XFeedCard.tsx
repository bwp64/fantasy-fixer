const tweets = [
  {
    handle: "@FantasyPts",
    name: "Fantasy Points",
    avatar: "FP",
    verified: true,
    text: "Dynasty Trade Alert 🚨 Bijan Robinson's value just hit an all-time high. If you're rebuilding, now is the time to sell for a king's ransom.",
    time: "5m",
    replies: 87,
    retweets: 312,
    likes: "1.9K",
  },
  {
    handle: "@FantasyPros",
    name: "FantasyPros",
    avatar: "FP",
    verified: true,
    text: "Consensus dynasty rankings update 📊\n\nRising: Marvin Harrison Jr, Malik Nabers\nFalling: Davante Adams, Derrick Henry\n\n200+ experts weighed in.",
    time: "12m",
    replies: 134,
    retweets: 478,
    likes: "2.7K",
  },
  {
    handle: "@PFF_Fantasy",
    name: "PFF Fantasy",
    avatar: "PF",
    verified: true,
    text: "Rookie Draft Big Board 🏈\n\n1. Shedeur Sanders\n2. Cam Ward\n3. Travis Hunter\n4. Tetairoa McMillan\n5. Luther Burden III\n\nFull board → link in bio",
    time: "28m",
    replies: 201,
    retweets: 567,
    likes: "3.4K",
  },
  {
    handle: "@ESPNNFL",
    name: "NFL on ESPN",
    avatar: "EN",
    verified: true,
    text: "BREAKING: The Seahawks have agreed to a 4-year extension with their franchise QB. Dynasty managers rejoice — the stack is locked in. 🔒",
    time: "45m",
    replies: 312,
    retweets: 891,
    likes: "5.1K",
  },
  {
    handle: "@AdamSchefter",
    name: "Adam Schefter",
    avatar: "AS",
    verified: true,
    text: "Source: Christian McCaffrey expected to be fully healthy for Week 1. Fantasy managers should keep him as a top-3 dynasty RB.",
    time: "1h",
    replies: 124,
    retweets: 445,
    likes: "3.2K",
  },
  {
    handle: "@NFLPA",
    name: "NFLPA",
    avatar: "NP",
    verified: true,
    text: "One Player Makes an Impact — 2,000 Make a Movement. Proud of our players heading into the offseason. 💪",
    time: "1h",
    replies: 56,
    retweets: 189,
    likes: "1.2K",
  },
  {
    handle: "@PFF",
    name: "PFF",
    avatar: "PF",
    verified: true,
    text: "Highest-graded WRs under 25:\n\n1. Ja'Marr Chase — 92.4\n2. Puka Nacua — 91.1\n3. Malik Nabers — 88.7\n4. Marvin Harrison Jr — 87.3\n\nDynasty gold. 🏆",
    time: "2h",
    replies: 178,
    retweets: 623,
    likes: "4.5K",
  },
  {
    handle: "@DLFootball",
    name: "DLF",
    avatar: "DL",
    verified: true,
    text: "There is no off-season. Helping you beat your friends since 2006. 🎯\n\nOur updated dynasty ADP is live — 1,200+ players ranked.",
    time: "2h",
    replies: 67,
    retweets: 234,
    likes: "1.5K",
  },
  {
    handle: "@NFLonFOX",
    name: "FOX Sports: NFL",
    avatar: "FX",
    verified: true,
    text: "The NFL is now streaming on FOX One. All your favorites. All in one app. 📺 #WeLiveForLive",
    time: "3h",
    replies: 43,
    retweets: 156,
    likes: "980",
  },
  {
    handle: "@MyFantasyLeague",
    name: "MyFantasyLeague.com",
    avatar: "ML",
    verified: false,
    text: "Offseason dynasty leagues are filling up fast. Slow drafts, taxi squads, and full customization — the way fantasy was meant to be played.",
    time: "3h",
    replies: 29,
    retweets: 87,
    likes: "456",
  },
  {
    handle: "@RyanMc23",
    name: "Ryan McDowell",
    avatar: "RM",
    verified: true,
    text: "Dynasty rookie mock draft 3.0 is live on @DLFPodcast 🎙️\n\nSome surprises in the back half of Round 1. Never not on the clock.",
    time: "4h",
    replies: 91,
    retweets: 198,
    likes: "1.1K",
  },
  {
    handle: "@NFL",
    name: "NFL",
    avatar: "NF",
    verified: true,
    text: "freeagencymaxxing 😤\n\nThe biggest moves of the offseason so far → NFL.com",
    time: "5h",
    replies: 445,
    retweets: 1203,
    likes: "8.9K",
  },
  {
    handle: "@nflnetwork",
    name: "NFL Network",
    avatar: "NN",
    verified: true,
    text: "THE SEAHAWKS ARE SUPER BOWL CHAMPS ONCE AGAIN! 🏆🏆",
    time: "6h",
    replies: 892,
    retweets: 3412,
    likes: "12K",
  },
];

export default function XFeedCard() {
  return (
    <div className="bg-card rounded-lg border border-border card-glow">
      <div className="px-5 py-3.5 flex items-center justify-between">
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
