import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
