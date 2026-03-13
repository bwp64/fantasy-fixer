import { useState } from "react";
import LeagueSidebar from "@/components/LeagueSidebar";
import LeagueStatusBar from "@/components/LeagueStatusBar";
import MobileBottomNav from "@/components/MobileBottomNav";
import StandingsCard from "@/components/StandingsCard";
import MatchupsCard from "@/components/MatchupsCard";
import TopPerformersCard from "@/components/TopPerformersCard";
import TransactionsCard from "@/components/TransactionsCard";
import XFeedCard from "@/components/XFeedCard";
import ChampionFooter from "@/components/ChampionFooter";
import SchedulePage from "@/components/SchedulePage";
import rivalriesLogo from "@/assets/rivalries-brand.svg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Schedule":
        return <SchedulePage />;
      case "Standings":
        return <StandingsCard />;
      case "Matchups":
        return <MatchupsCard />;
      default:
        return (
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <StandingsCard />
              <MatchupsCard />
            </div>
            <div className="space-y-4 md:space-y-6">
              <TopPerformersCard />
              <TransactionsCard />
              <XFeedCard />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Desktop top nav bar */}
      <LeagueSidebar active={activeTab} onNavigate={setActiveTab} />

      {/* Mobile top bar — just logo */}
      <header className="lg:hidden sticky top-0 z-40 bg-sidebar border-b border-border px-4 py-3 flex items-center justify-center">
        <img src={rivalriesLogo} alt="Rivalries" className="h-5" />
      </header>

      <div className="flex-1 min-w-0 flex flex-col">

        <main className="flex-1 p-4 md:p-6 lg:p-8 pb-20 lg:pb-8 overflow-auto">
          <LeagueStatusBar />
          <div className="mt-3">
            {renderContent()}
          </div>
        </main>

        <div className="hidden lg:block">
          <ChampionFooter />
        </div>

        {/* Mobile bottom nav */}
        <MobileBottomNav active={activeTab} onNavigate={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;