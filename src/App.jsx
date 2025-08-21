import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import Accueil from "./pages/Accueil.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Mentionslegales from "./pages/mentionslegales.jsx";



import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionslegales" element={<Mentionslegales />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
