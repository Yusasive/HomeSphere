import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pushing from "./pages/Pushing";
import Who from "./pages/Who";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<Who />} />
        <Route path="/pushing-chefs" element={<Pushing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  );
};

export default App;
