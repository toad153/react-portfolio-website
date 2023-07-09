// import logo from './logo.svg';
// import './App.css';
import React from "react";
import './index.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
// import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="https://github.com/toad153"/>
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
