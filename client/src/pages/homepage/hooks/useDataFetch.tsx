import React, { useEffect, useState, ReactNode, useMemo } from "react";
import axios from "axios";
import { debounce } from "lodash";

//Define the structure and types of keyword collected for name filtering
interface CollectKeyword {
  keyword: string;
  order: string;
  gender: string;
  age: number[];
}

//Define structure of User state fetched from the database
interface User {
  id: number;
  name: string;
  username: string;
  age: string;
  gender: string;
  email: string;
}

//Define the structure and types of states and hooks of filter context
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
//Create context with undefind as default type and value
const FilterContext = React.createContext<FilterContextType | undefined>(
  undefined
);

// Initiate function to store hooks to be distributed to other pages
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [sortType, setSortType] = useState<CollectKeyword>({
    keyword: "",
    order: "asc",
    gender: "all",
    age: [0, 100],
  });

  // Initialize state with the type of array
  const [userData, setUserData] = useState<User[]>([]);

  //handle word change from name filtering input
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortType((prev) => ({ ...prev, keyword: event.target.value }));
  };

  //handle value change from alphabetical order change
  const handleOrderChange = (order: string) => {
    setSortType((prev) => ({ ...prev, order }));
  };

  //handle value change from gender filtering
  const handleGenderChange = (gender: string) => {
    setSortType((prev) => ({ ...prev, gender }));
  };

  //handle value change from age filtering
  const handleAgeChange = (age: number[]) => {
    setSortType((prev) => ({ ...prev, age }));
  };

  // create a hook with filtering parameter collected from homepage
  const fetchData = async (
    keyword: string,
    order: string,
    gender: string,
    age: number[]
  ) => {
    try {
      const result = await axios.get<{ users: User[] }>( //call API with collected or null parameters
        `http://localhost:4001/users/find?name=${keyword.trim()}&order=${order}&gender=${gender}&age=${age.join(
          // join age with [min]:[max] as it's a proper format for this API
          ":"
        )}`
      );
      setUserData(result.data.users);
    } catch (error) {
      console.error("Error fetching data:", error); // catch any possible error
    }
  };

  //debouce the input to prevent unnecessary API calls,and useMemo is used to prevent the debounce function to recreated everytime the value changed
  const debouncedFetchData = useMemo(() => debounce(fetchData, 500), []);

  useEffect(() => {
    //validate the filter values
    const isValidSortType =
      sortType.keyword !== undefined &&
      sortType.order !== undefined &&
      sortType.gender !== undefined &&
      sortType.age !== undefined;

    // use the debounce function on every changes made from filtering section
    if (isValidSortType) {
      debouncedFetchData(
        sortType.keyword,
        sortType.order,
        sortType.gender,
        sortType.age
      );
    }
    // clear out old debounce timer after get executed, or new debounce function get called to prevent the unnecessary unrelevant debounce function get executed
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

// custom hook for useFilter, with an error catching in case that {children} isn't wrapped inside FilterContext
export const useFilter = () => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useNameFilter must be used within a NameFilterProvider");
  }
  return context;
};
