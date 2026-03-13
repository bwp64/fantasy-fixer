import { useEffect, useRef } from "react";

const TWITTER_SOURCE = "MyFantasyLeague";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
        createTimeline: (
          source: Record<string, string>,
          el: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export default function XFeedCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    const loadWidget = () => {
      if (!containerRef.current || !window.twttr) return;
      containerRef.current.innerHTML = "";
      window.twttr.widgets.createTimeline(
        { sourceType: "profile", screenName: TWITTER_SOURCE },
        containerRef.current,
        {
          theme: "dark",
          chrome: "noheader nofooter noborders transparent",
          height: 400,
          width: "100%",
          dnt: true,
        }
      );
    };

    if (window.twttr) {
      loadWidget();
      return;
    }

    if (!scriptLoaded.current) {
      scriptLoaded.current = true;
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadWidget;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          Feed
        </h3>
        <a
          href={`https://x.com/${TWITTER_SOURCE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          @{TWITTER_SOURCE}
        </a>
      </div>
      <div ref={containerRef} className="min-h-[200px] flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}