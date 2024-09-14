import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
