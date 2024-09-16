import {
  Navbar,
  PageLayout,
  DashboardHeader,
  UserManagementContainer,
} from "../index";
import { FilterProvider } from "../hooks/useDataFetch";

function Homepage() {
  return (
    <FilterProvider>
      <div className="w-full bg-white flex flex-col justify-center items-center gap-8">
        <Navbar />
        <PageLayout>
          <div className="flex flex-col gap-6">
            <DashboardHeader />
            <UserManagementContainer />
          </div>
        </PageLayout>
      </div>
    </FilterProvider>
  );
}

export default Homepage;
