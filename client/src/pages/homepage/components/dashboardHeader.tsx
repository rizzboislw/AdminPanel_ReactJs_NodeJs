function DashboardHeader() {
  return (
    <div className="w-full h-[100px] bg-red-400">
      <div className="flex flex-col font-Montserrat text-black justify-around items-center h-full ">
        <h2 className="text-2xl font-semibold">Good Afternoon, Admin</h2>
        <h1 className="text-lg font-medium">User Management</h1>
      </div>
    </div>
  );
}

export default DashboardHeader;
