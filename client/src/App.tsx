import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
