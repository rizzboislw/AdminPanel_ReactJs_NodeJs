import {
  Navbar,
  PageLayout,
  DashboardHeader,
  UserManagementContainer,
} from "../index";
import { NameFilterProvider } from "../hooks/useNameFilter";

function Homepage() {
  return (
    <NameFilterProvider>
      <div className="w-full bg-white flex flex-col justify-center items-center gap-8">
        <Navbar />
        <PageLayout>
          <div className="flex flex-col gap-6">
            <DashboardHeader />
            <UserManagementContainer />
          </div>
        </PageLayout>
      </div>
    </NameFilterProvider>
  );
}

export default Homepage;
