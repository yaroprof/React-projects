import React, { useContext, useEffect, useReducer } from 'react';
import cartItems from './data';
import reducer from './reducer';

// create Context
const AppContext = React.createContext();

// ---> The initialState object is the initial state of the context that holds the default values for the cart state, loading state, total state, amount state and any other properties that you need to manage the state of the application.

// create initialState
const initialState = {
  cart: cartItems,
  loading: false,
  total: 0,
  amount: 0,
  // Add any other properties you need in the initial state
};

// ---> The AppProvider component wraps the entire application and provides the context values to all of its child components. It uses the useReducer hook to manage the state of the context by passing the initialState object and a reducer function. The reducer function handles the updates to the state based on the dispatched actions.

const AppProvider = ({ children }) => {
  // ---> In the provided code, useReducer is used to manage the state of the AppContext using the reducer function and the initialState object.
  const [state, dispatch] = useReducer(reducer, initialState);

  // ---> The clearCart, remove, increase and toggleAmount functions are defined within the AppProvider component and can be used by any of its child components that consume the context values via the useGlobalContext hook.

  // { type: 'CLEAR_CART', payload: id } -> action.payload in reducer.js
  const clearCart = (id) => {
    dispatch({ type: 'CLEAR_CART', payload: id });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id) =>{
    dispatch({ type: 'DECREASE', payload: id })
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  // ---> Finally, the value prop of the AppContext.Provider component is an object that contains all the values that are passed down to the child components of the provider. The spread operator is used to include all the properties of the state object along with the functions that can modify the state.
  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        clearCart,
        increase,
        decrease,
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

// ---> So, any component that needs to access the state or modify the state can simply import the useGlobalContext hook from this file, and then call the required properties or functions from the useGlobalContext() return value. This way, the component can access or modify the state, without having to pass props down the component tree.

// ---> he useReducer hook is a built-in hook provided by React that allows you to manage state with a reducer function.

// In the provided code, useReducer is used to manage the state of the AppContext using the reducer function and the initialState object.
// The useReducer hook takes two arguments:
// The reducer function: This function specifies how the state should be updated based on the actions that are dispatched to it. The reducer function takes two arguments: the state and the action. The state argument represents the current state of the application, and the action argument represents the action that is being dispatched to update the state.
// The initialState object: This object specifies the initial state of the application.
// The useReducer hook returns an array with two values:
// The state value: This is the current state of the application.
// The dispatch function: This function is used to dispatch actions to the reducer, which in turn updates the state.
