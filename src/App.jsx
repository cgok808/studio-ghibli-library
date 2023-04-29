import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./components";

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
    </Router>
  );
}

export default App;
