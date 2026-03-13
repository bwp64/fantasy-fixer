import { Trophy } from "lucide-react";

export default function ChampionFooter() {
  return (
    <footer className="bg-card border-t border-border card-glow py-6 mt-6 mx-6 lg:mx-8 mb-6 rounded-lg">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-xs font-heading font-semibold uppercase tracking-wider">
            Defending League Champions
          </span>
          <Trophy className="w-4 h-4 text-accent" />
        </div>
        <img
          src="http://mfladdons.com/graphics/brent/KC24%20copy.png"
          alt="Chiefs - Defending Champions"
          className="h-[50px] w-[300px] object-contain"
        />
        <p className="text-xs text-muted-foreground">2025 Season Champions</p>
      </div>
    </footer>
  );
}
