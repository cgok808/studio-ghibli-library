import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Nav } from "./components";
import { Home } from "./pages";
import { books } from "./data";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
