import LeagueSidebar from "@/components/LeagueSidebar";
import QuickStatsBar from "@/components/QuickStatsBar";
import StandingsCard from "@/components/StandingsCard";
import MatchupsCard from "@/components/MatchupsCard";
import TopPerformersCard from "@/components/TopPerformersCard";
import NewsCard from "@/components/NewsCard";
import TransactionsCard from "@/components/TransactionsCard";
import XFeedCard from "@/components/XFeedCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <LeagueSidebar />
      <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide text-foreground">
            Copy of NFL 24
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            2026 Season · Preseason · Defending Champions: Chiefs
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <QuickStatsBar />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <StandingsCard />
          <MatchupsCard />
          <TopPerformersCard />
          <NewsCard />
          <TransactionsCard />
          <XFeedCard />
        </div>
      </main>
    </div>
  );
};

export default Index;
