import { Routes, Route } from "react-router-dom";
import { Homepage } from "./homepage";
import { UserPage } from "./userPage";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/u/:username" element={<UserPage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default AuthenticatedApp;
