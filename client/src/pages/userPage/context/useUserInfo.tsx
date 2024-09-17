import React, { ReactNode, useState } from "react";
import axios from "axios";

// Define the structure of user information received from the database
interface User {
  id: number;
  username: string;
  name: string;
  nickname: string;
  age: number;
  gender: string;
  nationality: string;
  hobby: string;
  email: string;
  address: string;
  registerDate: string;
}

//Define the types and method of user information state and data fetching function
interface UserInfoContextType {
  userInfo: User | null;
  getUserInfo: (username: string) => Promise<void>;
}

const UserInfoContext = React.createContext<UserInfoContextType | undefined>(
  undefined
);

const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const getUserInfo = async (username: string) => {
    try {
      const result = await axios.get(
        `http://localhost:4001/users/u/${username}` //Call an API with username fetched from the user page as query parameter
      );

      setUserInfo(result.data.user); // Get personal data for a specific user
    } catch (error) {
      console.error("Failed to fetch user infomation:", error);
    }
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, getUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = React.useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};

export { UserInfoProvider };
