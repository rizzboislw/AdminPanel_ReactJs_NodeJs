import React, { useState } from "react";

//Define the structure and type for login inputs
interface InputData {
  username: string;
  password: string;
}

//Define structure for checkbox value
interface Checkbox {
  showPassword: boolean;
}

export function useForm() {
  const [inputData, setInputData] = useState<InputData>({
    // Initialize the login input state with emppty string
    username: "",
    password: "",
  });

  //collect the input from the login form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return { inputData, handleChange };
}

//A function for switching between "password" and "text" type, to show the password in login form
export function useCheckbox() {
  const [checkboxStatus, setcheckboxStatus] = useState<Checkbox>({
    showPassword: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcheckboxStatus({ showPassword: event.target.checked });
  };

  return { checkboxStatus, handleCheckboxChange };
}
