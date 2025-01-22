import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import LawyerPage from "./components/LawyerPage";
import AppointmentPage from "./components/AppointmentPage";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lawyers" element={<LawyerPage />} />
        <Route path="/lawyers/:id" element={<AppointmentPage />} />
      </Routes>
    </main>
  );
}

export default App;
