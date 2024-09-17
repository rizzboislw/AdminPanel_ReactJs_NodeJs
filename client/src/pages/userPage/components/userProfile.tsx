import { useNavigate, useParams } from "react-router-dom";
import { default as leftArrow } from "../../../assets/svg/arrow.svg";
import { useUserInfo } from "../hooks/useUserInfo";
import { useEffect } from "react";
import { default as personIcon } from "../../../assets/svg/person.svg";

function UserProfile() {
  const redirect = useNavigate();
  const { username } = useParams<{ username: string }>();
  const { userInfo, getUserInfo } = useUserInfo();

  useEffect(() => {
    if (username) {
      getUserInfo(username);
    }
  }, [username]);

  return (
    <div className="w-full flex flex-col font-Montserrat gap-8">
      <button
        className="flex gap-1 w-max hover:scale-105 duration-200"
        onClick={() => redirect("/")}
      >
        <img src={leftArrow} alt="arrow" />
        <p className="font-semibold text-[#055894]">Dashboard</p>
      </button>
      <div className="w-full flex flex-col gap-6 ">
        <div className="w-full flex justify-center sm:justify-start bg-[#055894] p-4 rounded-lg shadow-xl">
          <div className="w-max flex items-center gap-2 ">
            <img src={personIcon} alt="person" />
            <h1 className="w-max text-2xl font-bold sm:text-left  text-white  ">
              USER PROFILE
            </h1>
          </div>
        </div>

        {userInfo ? (
          <div className="flex flex-col gap-4 rounded-xl shadow-xl p-4 text-[#055894]">
            <p className="text-3xl font-bold">{userInfo.name}</p>
            <p className="text-lg font-bold">
              Username:
              <span className="font-medium"> {userInfo.username}</span>
            </p>
            <p className="text-lg font-bold">
              Nickname:{" "}
              <span className="font-medium"> {userInfo.nickname}</span>
            </p>
            <p className="text-lg font-bold">
              Age: <span className="font-medium"> {userInfo.age}</span>
            </p>
            <p className="text-lg font-bold">
              Gender: <span className="font-medium"> {userInfo.gender}</span>
            </p>
            <p className="text-lg font-bold">
              Nationality:{" "}
              <span className="font-medium"> {userInfo.nationality}</span>
            </p>
            <p className="text-lg font-bold">
              Hobby: <span className="font-medium"> {userInfo.hobby}</span>
            </p>
            <p className="text-lg font-bold">
              Email: <span className="font-medium"> {userInfo.email}</span>
            </p>
            <p className="text-lg font-bold">
              Address: <span className="font-medium"> {userInfo.address}</span>
            </p>
            <p className="text-lg font-bold">
              Register Date:{" "}
              <span className="font-medium"> {userInfo.registerDate}</span>
            </p>
          </div>
        ) : (
          <p className="text-lg">Loading user information...</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
