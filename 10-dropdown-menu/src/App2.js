import React, { useEffect } from 'react';
import Parse from 'parse';

// Ініціалізація Parse
Parse.initialize(process.env.REACT_APP_PARSE_APP_ID, process.env.REACT_APP_PARSE_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_PARSE_HOST_URL;

const App = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_PARSE_HOST_URL}/classes/Movies`;
        console.log("Testing URL:", url);

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APP_ID,
            'X-Parse-JavaScript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Movies data:", data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []); // Виконується лише один раз після завантаження компонента

  return (
    <div>
      <h1>Movies List</h1>
      <p>Перевіряємо підключення до Parse Server...</p>
    </div>
  );
};

export default App;
