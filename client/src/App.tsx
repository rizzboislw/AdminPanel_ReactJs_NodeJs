import "./App.css";
import { useAuth } from "./contexts/authentication";
import AuthenticatedApp from "./pages/authenticated";
import UnauthenticatedApp from "./pages/unauthenticated";

//Check if the user is authenticated or not, and render proper component for them
function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
