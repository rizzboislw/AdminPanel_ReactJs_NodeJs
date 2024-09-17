import "./App.css";
import { useAuth } from "./contexts/authentication";
import AuthenticatedApp from "./pages/authenticated";
import UnauthenticatedApp from "./pages/unauthenticated";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
