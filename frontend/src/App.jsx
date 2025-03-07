import React, { useState } from "react";
import Header from "./components/Header/";
import Home from "./components/Home/Home";

const App = () => {
  const [appState, setAppState] = useState("empty");

  return (
    <div>
      <Header explain={appState} />
      <Home />
    </div>
  );
};

export default App;
