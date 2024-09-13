import { LoginForm } from "../index";
import { loginBoxShadow, loginPageFontgradient } from "../styles/theme";

function LoginContainer() {
  return (
    <div
      style={loginBoxShadow}
      className="w-full max-w-[400px] h-max bg-white text-black flex flex-col items-center px-8 py-8 gap-8 rounded-2xl"
    >
      <div className="font-Montserrat flex flex-col justify-center items-center gap-4">
        <h1
          className="text-3xl font-extrabold login-gradient tracking-[0.15px]"
          style={loginPageFontgradient}
        >
          Welcome!
        </h1>
        <h2 className="text-xl font-medium text-gray-700 ">Login</h2>
      </div>
      <div className="w-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginContainer;
