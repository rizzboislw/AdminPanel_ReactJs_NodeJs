import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";

//set pages accessible permission for user that is unauthenticated
function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default UnauthenticatedApp;
