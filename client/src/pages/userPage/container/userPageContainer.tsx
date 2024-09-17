import Navbar from "../../../components/navbar";
import PageLayout from "../../../components/pageLayout";
import { UserProfile } from "..";
import { UserInfoProvider } from "../context/useUserInfo";

function UserPage() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center gap-8">
      <UserInfoProvider>
        <Navbar />
        <PageLayout>
          <UserProfile />
        </PageLayout>
      </UserInfoProvider>
    </div>
  );
}

export default UserPage;
