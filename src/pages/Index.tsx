import { useState } from "react";
import LeagueSidebar, { MobileHeader } from "@/components/LeagueSidebar";
import StandingsCard from "@/components/StandingsCard";
import MatchupsCard from "@/components/MatchupsCard";
import TopPerformersCard from "@/components/TopPerformersCard";
import TransactionsCard from "@/components/TransactionsCard";
import XFeedCard from "@/components/XFeedCard";
import ChampionFooter from "@/components/ChampionFooter";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar (always visible on lg+) */}
      <div className="hidden lg:block">
        <LeagueSidebar />
      </div>

      {/* Mobile sidebar drawer */}
      <LeagueSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile header with hamburger */}
        <MobileHeader onToggle={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {/* Two-Rail Layout: stacks on mobile, side-by-side on xl */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-4 md:gap-6">
            {/* Left Rail */}
            <div className="space-y-4 md:space-y-6">
              <StandingsCard />
              <MatchupsCard />
            </div>

            {/* Right Rail */}
            <div className="space-y-4 md:space-y-6">
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
