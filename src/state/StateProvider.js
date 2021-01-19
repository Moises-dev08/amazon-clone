import React, { createContext, useContext, useReducer } from "react";

// Prepares DataLayer
export const StateContext = createContext();

// Wrap app and provide Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
