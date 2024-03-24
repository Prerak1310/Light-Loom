import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Education from "./pages/education";
import Navbar from "./components/navbar.js";
import Contact from "./components/contact.js";
import Top from "./components/up.js";
import Appointments from "./pages/appointments.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
      <Top />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
