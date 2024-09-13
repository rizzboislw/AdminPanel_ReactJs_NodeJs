import React from "react";

interface InputTemplateProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  htmlfor: string;
  labelText: string;
  inputType: string;
  placeholderText: string;
  required?: boolean;
}

const InputTemplate: React.FC<InputTemplateProps> = ({
  name,
  value,
  onChange,
  htmlfor,
  labelText,
  inputType,
  placeholderText,
  required = false,
}) => {
  return (
    <label htmlFor={htmlfor} className="flex flex-col gap-2 font-Montserrat">
      <p className="px-2 font-semibold text-black">{labelText}</p>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        required={required}
        name={name}
        className="input input-bordered input-primary w-full bg-white text-black font-medium"
      ></input>
    </label>
  );
};

export default InputTemplate;
