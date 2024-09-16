import { useFilter } from "../../hooks/useDataFetch";

function UserDisplaySection() {
  const { userData } = useFilter();

  console.log(userData);

  return (
    <div className="w-full h-max flex flex-col gap-4 ">
      <h1 className="text-2xl font-semibold">SHOWING: {userData.length}</h1>
      <div className="w-full flex flex-col gap-4">
        {userData.map((user, index) => (
          <div
            key={user.id}
            className="w-full h-max flex flex-col items-start rounded-xl shadow-lg p-4 bg-slate-100"
          >
            <p>{index + 1}</p>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDisplaySection;
