import LeagueSidebar from "@/components/LeagueSidebar";
import QuickStatsBar from "@/components/QuickStatsBar";
import StandingsCard from "@/components/StandingsCard";
import MatchupsCard from "@/components/MatchupsCard";
import TopPerformersCard from "@/components/TopPerformersCard";
import RecentActivityCard from "@/components/RecentActivityCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <LeagueSidebar />
      <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold uppercase tracking-wide text-foreground">
            League Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back, Brent. Your team is looking strong this week.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <QuickStatsBar />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <MatchupsCard />
          <TopPerformersCard />
          <StandingsCard />
          <RecentActivityCard />
        </div>
      </main>
    </div>
  );
};

export default Index;
