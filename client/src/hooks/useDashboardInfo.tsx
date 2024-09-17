import { useState, useEffect } from "react";

interface DecodedUsername {
  username: string;
}

interface DecodedName {
  name: string;
}

export function useDashboardInfo() {
  const [currentName, setCurrentName] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const convertedName = localStorage.getItem("user");

    if (convertedName) {
      const user: DecodedName = JSON.parse(convertedName);
      setCurrentName(user.name);
    }

    const convertedUser = localStorage.getItem("user");
    if (convertedUser) {
      const user: DecodedUsername = JSON.parse(convertedUser);
      setUsername(user.username);
    }

    const currentHour = new Date().getHours();

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
