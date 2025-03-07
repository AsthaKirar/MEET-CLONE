import AppContextProvider from "./context/ContextApp.jsx";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
)

// import "./index.css";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <AppContextProvider>
//     <App />
//   </AppContextProvider>,
//   document.getElementById("root")
// );
