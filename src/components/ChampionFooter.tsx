import trophyIcon from "@/assets/icons/trophy.svg";

export default function ChampionFooter() {
  return (
    <footer className="border-t border-border py-5 mx-4 md:mx-6 lg:mx-8">
      <div className="flex flex-col items-center gap-2.5">
        <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-muted-foreground">
          Defending Champions
        </span>
        <div className="flex items-center gap-3">
          <img
            src={trophyIcon}
            alt=""
            className="h-8 w-8 icon-jitter"
            style={{ filter: "brightness(0) invert(0.55)" }}
          />
          <span className="text-sm font-heading font-bold uppercase tracking-wide text-card-foreground">
            Kansas City Chiefs
          </span>
          <img
            src={trophyIcon}
            alt=""
            className="h-8 w-8 icon-jitter"
            style={{ filter: "brightness(0) invert(0.55)" }}
          />
        </div>
        <span className="text-[11px] text-muted-foreground">2025 Season</span>
      </div>
    </footer>
  );
}
