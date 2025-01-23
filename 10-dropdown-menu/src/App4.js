import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown4';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        let allMovies = [];
        let skip = page * 1000;

        while (true) {
          const response = await fetch(`${process.env.REACT_APP_PARSE_HOST_URL}/classes/Movies?limit=1000&skip=${skip}`, {
            method: 'GET',
            headers: {
              'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APP_ID,
              'X-Parse-JavaScript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          if (data.results.length === 0) {
            break; // Якщо більше немає даних, припиняємо запити
          }

          allMovies = [...allMovies, ...data.results.map((movie) => ({
            id: movie.objectId,
            title: movie.title,
          }))];

          console.log(`Fetched ${data.results.length} movies, total: ${allMovies.length}`);
          skip += 1000; // Переходимо до наступної сторінки
        }

        setMovies(allMovies);

        // Вивід усіх фільмів у консоль частинами
        console.log('All movies fetched. Total:', allMovies.length);
        allMovies.forEach((movie, index) => {
          console.log(`Movie ${index + 1}:`, movie);
        });
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div>
      <h1>Movies List</h1>
      {loading ? <p>Loading...</p> : <Dropdown options={movies} onSelect={(movie) => console.log('Selected movie:', movie)} />}
    </div>
  );
};

export default App;