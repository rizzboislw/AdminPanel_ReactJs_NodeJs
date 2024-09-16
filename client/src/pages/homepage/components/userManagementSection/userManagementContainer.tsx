import { default as peopleIcon } from "../../../../assets/svg/poeple.svg";
import { UserDisplaySection, UserManagementFilter } from "../..";

function UserManagementContainer() {
  return (
    <div className=" font-Montserrat text-gray-600 w-full h-max">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-2 justify-center sm:justify-start bg-[#055894] rounded-lg px-4 py-3 shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),_0px_2px_4px_0px_rgba(0,0,0,0.1),_0px_0px_0px_1px_inset_rgba(255,255,255,0.05)]">
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
