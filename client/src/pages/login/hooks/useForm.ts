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

  const [checkboxStatus, setcheckboxStatus] = useState<Checkbox>({
    showPassword: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcheckboxStatus({ showPassword: event.target.checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return {
    inputData,
    checkboxStatus,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
}
