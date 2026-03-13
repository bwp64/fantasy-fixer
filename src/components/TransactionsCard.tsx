import { ArrowRightLeft } from "lucide-react";

export default function TransactionsCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-accent" />
          Recent Transactions
        </h3>
      </div>
      <div className="px-5 py-12 text-center">
        <p className="text-muted-foreground text-sm">No transactions yet</p>
        <p className="text-xs text-muted-foreground mt-2">Trades, adds, and drops will appear here</p>
        <a
          href="https://www44.myfantasyleague.com/2026/options?L=57893&O=03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:underline mt-4 inline-block"
        >
          View All Transactions →
        </a>
      </div>
    </div>
  );
}
