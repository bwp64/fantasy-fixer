import LeagueSidebar from "@/components/LeagueSidebar";
import StandingsCard from "@/components/StandingsCard";
import MatchupsCard from "@/components/MatchupsCard";
import TopPerformersCard from "@/components/TopPerformersCard";
import NewsCard from "@/components/NewsCard";
import TransactionsCard from "@/components/TransactionsCard";
import XFeedCard from "@/components/XFeedCard";
import ChampionFooter from "@/components/ChampionFooter";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <LeagueSidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Two-Rail Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-6">
            {/* Left Rail */}
            <div className="space-y-6">
              <StandingsCard />
              <MatchupsCard />
            </div>

            {/* Right Rail */}
            <div className="space-y-6">
              <TopPerformersCard />
              <TransactionsCard />
              <XFeedCard />
            </div>
          </div>
        </main>

        {/* Footer */}
        <ChampionFooter />
      </div>
    </div>
  );
};

export default Index;
