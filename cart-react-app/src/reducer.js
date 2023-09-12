// import CartItem from './components/CartItem';

const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  // if (action.type === 'INCREASE') {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem === action.payload) {
  //       return { ...cartItem, amount: cartItem.amount + 1 };
  //     }
  //     return cartItem;
  //   });
  //   return { ...state, cart: tempCart };
  // }

  // --- DECREASE

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  // --- TOTAL

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      },
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }


  if (action.type === 'LOADING') {
    return{ ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }

  // Total Amount

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1}
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  throw new Error('no matching action type')
};

export default reducer;

// ---> So, in summary, the payload property is used to carry some additional data with the action object that can be used by the reducer function to determine what kind of update to perform on the state.

// ---> In the provided code block from the reducer.js file, the if statement checks if the type property of the action object is equal to the string 'INCREASE'.

// If the condition is true, then a new array tempCart is created by mapping over the state.cart array using the map() method. For each element in the state.cart array, the map() method applies the function passed as its argument, which takes a cartItem object as its argument.

// If the current cartItem object in the iteration is equal to the payload property of the action object, then a new object is returned with the amount property incremented by one. The spread operator ... is used to create a new object with all the properties of the cartItem object, and the amount property is overridden with the updated value.

// If the current cartItem object in the iteration is not equal to the payload property of the action object, then the original cartItem object is returned.

// After the map() method finishes, the tempCart array is returned as the new cart property of the state, using the spread operator to create a new state object with all the properties of the original state object and the updated cart property.

// In summary, the code block updates the amount property of a specific cartItem object in the state.cart array by incrementing it by one if the type property of the action object is equal to 'INCREASE'. The new state object is returned with the updated cart property.

// ---> TOTAL

// This code is responsible for calculating the total amount of goods in the basket and their quantity.

// reduce is a built-in JavaScript array function that reduces an array to a single value. In this case, the array to be reduced is in the cart property of the state object. After executing the reduce function, the cartTotal value will contain the total amount and the number of items in the cart.

// During the execution of the reduce function, for each cartItem element in the cart array, the price and amount values are extracted. After that, the total amount is calculated by multiplying these values and written to the itemTotal variable.

// Next, the itemTotal values are added to the corresponding field of the cartTotal object (ie, total or amount, depending on which field is being processed).

// After the reduce function has processed all the elements contained in the cart array, the result is stored in the state object property with the names total and amount. Accordingly, after the function is executed, the value of the total amount, rounded to two decimal places, is recorded in the total variable.

// Finally, the state object is returned with the updated total and amount fields.
