import React, { useState } from "react";
import Header from "./components/Header/";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";


const App = () => {
  const [appState, setAppState] = useState("empty");

  return (
    <div>
      <Header explain={appState} />
      <Home />
      <Login/>
    </div>
  );
};

export default App;
