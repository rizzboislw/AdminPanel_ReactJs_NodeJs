import axios from "axios";
import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface DecodedUser {
  id: number;
  username: string;
  name: string;
}
interface UserStatus {
  loading: string | null;
  error: string | null;
  user: DecodedUser | null;
}
interface AuthContextType {
  login: (data: {}) => Promise<void>;
  user: DecodedUser | null;
  loading: string | null;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userState, setUserState] = useState<UserStatus>({
    loading: null,
    error: null,
    user: null,
  });

  const navigate = useNavigate();

  const login = async (data: {}) => {
    try {
      setUserState({ ...userState, loading: "loading", error: null });
      const result = await axios.post("http://localhost:4001/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userData: DecodedUser = jwtDecode(token);
      setUserState({ ...userState, user: userData, loading: null });
      navigate("/");
    } catch (error) {
      setUserState({ ...userState, loading: null, error: "Login failed" });
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, user: userState.user, loading: userState.loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider };
