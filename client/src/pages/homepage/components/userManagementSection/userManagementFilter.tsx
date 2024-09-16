import {
  FilterByName,
  FilterByAges,
  FilterOrder,
  FilterByGender,
} from "../../";

function UserManagementFilter() {
  return (
    <div className="w-full flex flex-col gap-2 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 bg-white rounded-lg overflow-hidden">
      <h2 className="text-lg font-medium w-max h-min text-[#055894]">Filter</h2>
      <div className="font-Montserrat text-gray-600  w-full h-max flex flex-col justify-start gap-4 sm:gap-4 sm:flex-row  ">
        <FilterByName />
        <div className="w-full flex gap-2 items-center">
          <h3 className="text-sm sm:text-md font-semibold w-max text-nowrap text-[#055894]">
            Sort By:
          </h3>
          <FilterOrder />
          <FilterByAges />
          <FilterByGender />
        </div>
      </div>
    </div>
  );
}

export default UserManagementFilter;
