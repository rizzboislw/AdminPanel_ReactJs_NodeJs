import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
