import { default as peopleIcon } from "../../../../assets/svg/poeple.svg";
import { UserDisplaySection, UserManagementFilter } from "../..";

function UserManagementContainer() {
  return (
    <div className=" font-Montserrat text-gray-600 w-full h-max  ">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-2 justify-center sm:justify-start bg-gray-500 rounded-lg px-4 py-3 shadow-lg ">
          <img src={peopleIcon} alt="people-icon" />
          <h1 className="text-xl font-semibold text-white ">User Management</h1>
        </div>

        <div className="w-full flex flex-col gap-4 ">
          <UserManagementFilter />
          <UserDisplaySection />
        </div>
      </div>
    </div>
  );
}

export default UserManagementContainer;
