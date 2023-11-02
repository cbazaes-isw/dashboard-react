import AnalyseSection from "../(components)/AnalyseSection";
import NewUsersSection from "../(components)/NewUsersSection";
import RecentOrdersSection from "../(components)/RecentOrdersSection";

const AnalyticsPage = () => {
  return (
    <>
      <h1>Analytics</h1>

      <AnalyseSection />

      <NewUsersSection />

      <RecentOrdersSection />
    </>
  );
};

export default AnalyticsPage;
