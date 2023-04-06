import React, { useContext, useReducer } from 'react';
import cartItems from './data';
import reducer from './reducer';

// create Context
const AppContext = React.createContext();

// create initialState
const initialState = {
  cart: cartItems,
  // Add any other properties you need in the initial state
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
