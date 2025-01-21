import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";

function App() {
  const lawyers = useSelector((state) => state.lawyers);
  const appointment = useSelector((state) => state.appointment);

  console.log("lawyers", lawyers);
  console.log("appointment", appointment);

  return (
    <main className="relative h-[200vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/lawyers" element={<LawyerPage />} />
        <Route path="/lawyers/:id" element={<AppointmentPage />} /> */}
      </Routes>
    </main>
  );
}

export default App;
