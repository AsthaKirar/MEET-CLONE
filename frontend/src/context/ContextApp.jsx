

import { createContext, useContext, useEffect, useState } from "react";

// ✅ Create Context
const AppContext = createContext();

// ✅ Custom Hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// ✅ Context Provider Component
export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [AppState, setAppState] = useState("null");

  useEffect(() => {
    // Simulating authentication state change
    const auth = { onAuthStateChanged: (callback) => callback(null) }; // Replace with actual auth logic
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setAppState("home");
      } else {
        setCurrentUser(null);
        setAppState("login");
      }
    });
  }, []);

  const value = { currentUser, AppState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ✅ Ensure you export both named exports
export default { AppContext };
