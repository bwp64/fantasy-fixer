export default function ChampionFooter() {
  return (
    <footer className="border-t border-border py-5 mx-4 md:mx-6 lg:mx-8">
      <div className="flex flex-col items-center gap-2.5">
        <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-muted-foreground">
          Defending Champions
        </span>
        <img
          src="http://mfladdons.com/graphics/brent/KC24%20copy.png"
          alt="Chiefs"
          className="h-[44px] w-[260px] object-contain"
        />
        <span className="text-[11px] text-muted-foreground">2025 Season</span>
      </div>
    </footer>
  );
}