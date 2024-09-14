import { LoginContainer } from "../index";
import { backgroundBlueGradient } from "../styles/theme";
import PageLayout from "../../../components/pageLayout";

function LoginPage() {
  return (
    <div
      style={backgroundBlueGradient}
      className="w-full h-screen bg-white flex justify-center"
    >
      <PageLayout innerDivCustomStyle="flex justify-center items-center">
        <LoginContainer />
      </PageLayout>
    </div>
  );
}

export default LoginPage;
