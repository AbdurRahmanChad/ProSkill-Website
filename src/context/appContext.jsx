import React, { createContext, useContext, useReducer } from "react";

// create context
export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

// create reducer
import appReducer from "./appReducer";

// create provider
export default function AppContextProvider({ children }) {
  const [apps, dispatch] = useReducer(appReducer, {
    backgroundColor: "black",
    textColor: "white",
    borderColor: "white",
  });

  return (
    <AppContext.Provider value={apps}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

// create custom hook
export const useApps = () => {
  return useContext(AppContext);
};
export const useAppsDispatch = () => {
  return useContext(AppDispatchContext);
};
