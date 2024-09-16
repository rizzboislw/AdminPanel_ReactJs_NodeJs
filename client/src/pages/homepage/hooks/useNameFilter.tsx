import React, { useEffect, useState, ReactNode, useMemo } from "react";
import axios from "axios";
import { debounce } from "lodash";

interface CollectKeyword {
  keyword: string;
}

interface User {
  id: number;
  name: string;
  username: string;
}

interface NameFilterContextType {
  nameKeyword: string;
  handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userData: User[];
}

const NameFilterContext = React.createContext<
  NameFilterContextType | undefined
>(undefined);

export const NameFilterProvider = ({ children }: { children: ReactNode }) => {
  const [nameKeyword, setKeyword] = useState<CollectKeyword>({ keyword: "" });
  const [userData, setUserData] = useState<User[]>([]);

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword({ keyword: event.target.value });
  };

  const fetchData = async (keyword: string) => {
    try {
      const endpoint = keyword.trim()
        ? `http://localhost:4001/users/find?name=${keyword.trim()}`
        : `http://localhost:4001/users`;

      const result = await axios.get<{ users: User[] }>(endpoint);
      setUserData(result.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedFetchData = useMemo(() => debounce(fetchData, 500), []);

  useEffect(() => {
    if (nameKeyword.keyword !== undefined) {
      debouncedFetchData(nameKeyword.keyword);
    }

    return () => {
      debouncedFetchData.cancel();
    };
  }, [nameKeyword.keyword, debouncedFetchData]);

  return (
    <NameFilterContext.Provider
      value={{
        nameKeyword: nameKeyword.keyword,
        handleKeywordChange,
        userData,
      }}
    >
      {children}
    </NameFilterContext.Provider>
  );
};

export const useNameFilter = () => {
  const context = React.useContext(NameFilterContext);
  if (context === undefined) {
    throw new Error("useNameFilter must be used within a NameFilterProvider");
  }
  return context;
};
