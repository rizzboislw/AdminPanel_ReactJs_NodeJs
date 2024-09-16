function DashboardHeader() {
  return (
    <div className="w-full h-max flex flex-col">
      <div className="flex flex-col font-Montserrat text-black justify-around items-center sm:items-start h-full gap-3 ">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#055894] h-max">
          DASHBOARD
        </h2>

        <h2 className="text-md sm:text-xl font-semibold text-gray-600">
          Good Afternoon, Admin
        </h2>
      </div>
    </div>
  );
}

export default DashboardHeader;
