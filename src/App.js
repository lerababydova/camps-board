import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import CampPage from "./components/CampPage/CampPage";
import Camps from "./components/Camps/Camps";
import LandingPage from "./components/LandingPage/LandingPage";
import LogInPage from "./components/LogInPage/LogInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <div>
      <header></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/camp/:slug" element={<CampPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
