import React, { useState } from "react";

interface InputData {
  username: string;
  password: string;
}

interface Checkbox {
  showPassword: boolean;
}

export function useForm() {
  const [inputData, setInputData] = useState<InputData>({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return { inputData, handleChange, handleSubmit };
}

export function useCheckbox() {
  const [checkboxStatus, setcheckboxStatus] = useState<Checkbox>({
    showPassword: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcheckboxStatus({ showPassword: event.target.checked });
  };

  return { checkboxStatus, handleCheckboxChange };
}
