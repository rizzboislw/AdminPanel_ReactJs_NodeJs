import {
  Navbar,
  PageLayout,
  DashboardHeader,
  DashboardFilterSection,
  DashboardMainSection,
} from "../index";

function Homepage() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <Navbar />
      <PageLayout>
        <DashboardHeader />
        <DashboardFilterSection />
        <DashboardMainSection />
      </PageLayout>
    </div>
  );
}

export default Homepage;
