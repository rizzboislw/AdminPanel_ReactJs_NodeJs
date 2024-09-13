import { LoginContainer } from "../index";
import { backgroundBlueGradient } from "../styles/theme";

function LoginPage() {
  return (
    <div
      style={backgroundBlueGradient}
      className="w-full h-screen bg-white flex justify-center  "
    >
      <div className="bg-blue h-full w-full max-w-[1200px]  px-4 flex justify-center items-center">
        <LoginContainer />
      </div>
    </div>
  );
}

export default LoginPage;
