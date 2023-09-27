import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//-- Create a new context, AppContext
//-- Use React.createContext() to create a new context
const AppContext = React.createContext();

// -- Create the AppProvider component for providing the context
// -- Accepts children for passing down the context
const AppProvider = ({ children }) => {
  //-- Initialize states using useState
  // set firstly state with useState
  // -- loading - loading indicator
  // -- searchTerm - search term (default 'a')
  // -- cocktails - cocktail data
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setcocktails] = useState([]);

  // create reauest function with Fetch
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      // -- Create the fetchDrinks function for making API requests using useCallback
      // use default searchTerm item - 'a'
      //-- Attempt to make an API request using the current searchTerm
      const response = await fetch(`${url}${searchTerm}`);
      // -- Handle the response and transform it into JSON format
      // reformat response to JSON format
      const data = await response.json();

      // -- Destructure the data from the response
      // destruction answers
      const { drinks } = data;
      if (drinks) {
        const newcocktails = drinks.map((item) => {
        // -- Transform the API data into a more convenient format and update the cocktails state
          // deconstruction API data to more usefull format
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        // update setcocktails with the new data - newcocktails
        setcocktails(newcocktails);
      } else {
        setcocktails([]);
      }
      // -- Set the loading indicator to "false"
      setLoading(false);
      // -- Handle errors and set the loading indicator to "false"
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  // -- Use useEffect to automatically call fetchDrinks when searchTerm changes
  // use useEffect for automatic request fetchDrinks after change searchTerm
  //-- Call the fetchDrinks function when searchTerm changes or when fetchDrinks function changes

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    // -- Pass the state values and functions through AppContext.Provider
    // path state value and functions through AppContext.Provider context
    // -- loading, cocktails, searchTerm, setSearchTerm are passed through the context's value
    <AppContext.Provider value={{ loading, cocktails, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// -- Create the useGlobalContext function for using the context in components
// create function that provide components use - context
export const useGlobalContext = () => {
  // -- Use useContext to get the context values from AppContext
  return useContext(AppContext);
};
// |-- Export AppContext and AppProvider for use in other parts of the application
export { AppContext, AppProvider };
