import React, { useEffect, useState, ReactNode, useMemo } from "react";
import axios from "axios";
import { debounce } from "lodash";

interface CollectKeyword {
  keyword: string;
  order: string;
  gender: string;
  age: number[];
}

interface User {
  id: number;
  name: string;
  username: string;
  age: string;
  gender: string;
  email: string;
}

interface FilterContextType {
  keyword: string;
  order: string;
  gender: string;
  age: number[];
  handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderChange: (order: string) => void;
  handleGenderChange: (gender: string) => void;
  handleAgeChange: (age: number[]) => void;
  userData: User[];
}

const FilterContext = React.createContext<FilterContextType | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [sortType, setSortType] = useState<CollectKeyword>({
    keyword: "",
    order: "asc",
    gender: "all",
    age: [0, 100],
  });

  const [userData, setUserData] = useState<User[]>([]);

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortType((prev) => ({ ...prev, keyword: event.target.value }));
  };

  const handleOrderChange = (order: string) => {
    setSortType((prev) => ({ ...prev, order }));
  };

  const handleGenderChange = (gender: string) => {
    setSortType((prev) => ({ ...prev, gender }));
  };

  const handleAgeChange = (age: number[]) => {
    setSortType((prev) => ({ ...prev, age }));
  };

  const fetchData = async (
    keyword: string,
    order: string,
    gender: string,
    age: number[]
  ) => {
    try {
      const result = await axios.get<{ users: User[] }>(
        `http://localhost:4001/users/find?name=${keyword.trim()}&order=${order}&gender=${gender}&age=${age.join(
          ":"
        )}`
      );
      setUserData(result.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedFetchData = useMemo(() => debounce(fetchData, 500), []);

  useEffect(() => {
    if (sortType.keyword !== undefined) {
      debouncedFetchData(
        sortType.keyword,
        sortType.order,
        sortType.gender,
        sortType.age
      );
    }

    return () => {
      debouncedFetchData.cancel();
    };
  }, [sortType, debouncedFetchData]);

  return (
    <FilterContext.Provider
      value={{
        keyword: sortType.keyword,
        gender: sortType.gender,
        order: sortType.order,
        age: sortType.age,
        handleAgeChange,
        handleKeywordChange,
        handleOrderChange,
        handleGenderChange,
        userData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useNameFilter must be used within a NameFilterProvider");
  }
  return context;
};
