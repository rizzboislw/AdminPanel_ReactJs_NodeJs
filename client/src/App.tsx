import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { Homepage } from "./pages/homepage";
import { AuthProvider } from "./contexts/authentication";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
