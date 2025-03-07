import { Children, createContext, useContext } from "react";
const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};
const AppContextProvider = ({ children }) => {
  const value = { abc: "hello" };
  return (
    <AppContext.Provider value={{ value }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
