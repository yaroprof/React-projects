import React, { useEffect, useState } from 'react';
import Parse from 'parse';
import Dropdown from './Dropdown3';


const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_PARSE_HOST_URL}/classes/Movies`, {
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
        setMovies(data.results.map(movie => ({
          id: movie.objectId,
          title: movie.title,
        })));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <Dropdown options={movies} onSelect={(movie) => console.log("Selected movie:", movie)} />
    </div>
  );
};

export default App;