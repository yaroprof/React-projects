import React, { useContext, useEffect, useReducer } from 'react';
import cartItems from './data';
import reducer from './reducer';

// create Context
const AppContext = React.createContext();

// create initialState
const initialState = {
  cart: cartItems,
  loading: false,
  total: 0,
  amount: 0,
  // Add any other properties you need in the initial state
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = (id) => {
    dispatch({ type: 'CLEAR_CART', payload: id });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };


  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        clearCart,
        increase,
        toggleAmount,

        //  decrease
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
