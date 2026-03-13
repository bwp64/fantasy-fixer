export default function TransactionsCard() {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="px-5 py-3.5 border-b border-border">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground">
          Transactions
        </h3>
      </div>
      <div className="px-5 py-10 text-center">
        <p className="text-sm text-muted-foreground">No transactions yet</p>
        <a
          href="https://www44.myfantasyleague.com/2026/options?L=57893&O=03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:underline mt-3 inline-block"
        >
          View All →
        </a>
      </div>
    </div>
  );
}