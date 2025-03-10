import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [appState, setAppState] = useState("empty");

  return (
    <div>
      <Header explain={appState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
