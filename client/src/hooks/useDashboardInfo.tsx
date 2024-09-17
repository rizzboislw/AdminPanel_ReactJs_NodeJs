import { useState, useEffect } from "react";

//Define structure and type for name and username
interface DecodedUsername {
  username: string;
}

interface DecodedName {
  name: string;
}

export function useDashboardInfo() {
  //Initialize state with default type for username, name, and current time
  const [currentName, setCurrentName] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const convertedName = localStorage.getItem("user"); // access user object that stored in the local storage

    if (convertedName) {
      const user: DecodedName = JSON.parse(convertedName); // Parsing data back to JS object
      setCurrentName(user.name);
    }

    // same process as name, but getting username instead
    const convertedUser = localStorage.getItem("user");
    if (convertedUser) {
      const user: DecodedUsername = JSON.parse(convertedUser);
      setUsername(user.username);
    }

    const currentHour = new Date().getHours(); //get current hour of the current date

    // set the greeting message based on current time
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return { currentName, greeting, username };
}
