import axios from "axios";
import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

//Define structure of data dacoded from jwt Token
interface DecodedUser {
  id: number;
  username: string;
  name: string;
}
//Define the structure of authentication state
interface UserStatus {
  loading: string | null;
  error: string | null;
}

//Define the authentication context
interface AuthContextType {
  login: (data: {}) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: string | null;
  error: string | null;
}

//Create context with AuthContextType interface, default by undefined
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// main function that cover the authentication hooks
const AuthProvider = ({ children }: { children: ReactNode }) => {
  // declare children as props so that react components are able to be rendered inside
  const [userState, setUserState] = useState<UserStatus>({
    // states are null by default
    loading: null,
    error: null,
  });

  const navigate = useNavigate();

  //Logic for loggin in which include
  //1. Send user's credential to the server to precess the authentication
  //2. Save token in user local storage to keep user logged in
  //3. catching and handling any possible error ( invalid username or password )
  const login = async (data: {}) => {
    try {
      setUserState({ ...userState, loading: "logging in...", error: null });
      const result = await axios.post("http://localhost:4001/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userData: DecodedUser = jwtDecode(token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUserState({ ...userState, loading: null });
      navigate("/");
    } catch (error: any) {
      if (error.message === "Request failed with status code 404") {
        const errorMessage = "Invalid username or password";
        setUserState({ ...userState, loading: null, error: errorMessage });
      } else {
        const errorMessage = "Unexpected error occured. Please try again later";
        setUserState({ ...userState, loading: null, error: errorMessage });
      }
    }
  };

  // logging out logic
  // Remove token and user data from local storage, then reload the page
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  // Check if the user is authenticated by looking for the token stored in user's local storage
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{
        login,
        loading: userState.loading,
        error: userState.error,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook for authContext, with an error catching in case that {children} isn't wrapped inside AuthProvider
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider };
