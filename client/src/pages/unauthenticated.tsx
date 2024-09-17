import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default UnauthenticatedApp;
