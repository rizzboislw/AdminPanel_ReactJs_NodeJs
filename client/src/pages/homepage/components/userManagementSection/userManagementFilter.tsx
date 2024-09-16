import {
  FilterByName,
  FilterByAges,
  FilterOrder,
  FilterByGender,
} from "../../";

function UserManagementFilter() {
  return (
    <div className="w-full flex flex-col gap-2 shadow-xl p-4 bg-gray-400 rounded-lg ">
      <h2 className="text-lg font-medium w-max h-min text-white">Filter</h2>
      <div className="font-Montserrat text-gray-600  w-full h-max flex flex-col justify-start gap-4 sm:gap-4 sm:flex-row  ">
        <FilterByName />
        <div className="w-full flex gap-2 items-center">
          <h3 className="text-sm sm:text-md font-semibold w-max text-nowrap text-white">
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
