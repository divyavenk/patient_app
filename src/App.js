
import "./App.css";
import LoginForm from "./LoginForm"; // Adjust the path as necessary
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default App;
