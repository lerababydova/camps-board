import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Camps from "./components/Camps/Camps";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <header></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/camps" element={<Camps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
