import InputTemplate from "./inputTemplate";
import { useForm, useCheckbox } from "../hooks/useFormLogics";
import { useAuth } from "../../../contexts/authentication";

function LoginForm() {
  const { inputData, handleChange } = useForm();
  const { checkboxStatus, handleCheckboxChange } = useCheckbox();
  const { login, loading, error } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(inputData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <span className="text-md text-red-600 w-full text-center">
        {loading ? loading : error ? error : null}
      </span>
      <InputTemplate
        name="username"
        value={inputData.username}
        onChange={handleChange}
        htmlfor="username"
        labelText="Username"
        inputType="text"
        placeholderText="Enter Username"
        required={true}
        id="username"
        autoComplete="true"
      />
      <InputTemplate
        name="password"
        value={inputData.password}
        onChange={handleChange}
        htmlfor="password"
        labelText="Password"
        inputType={checkboxStatus.showPassword ? "text" : "password"}
        placeholderText="Enter Password"
        required={true}
        id="password"
      />
      <label className="px-2 font-Montserrat font-medium flex gap-2 items-center">
        <input
          type="checkbox"
          checked={checkboxStatus.showPassword}
          onChange={handleCheckboxChange}
          className="w-4 h-4 "
          id="show-password"
        />
        <p>Show Password</p>
      </label>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 rounded-lg text-white font-Montserrat text-lg font-semibold mt-2"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
