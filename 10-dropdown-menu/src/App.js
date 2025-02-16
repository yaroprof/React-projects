<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import Dropdown from './Dropdown';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const dropdownRef = useRef(null);
  
    const fetchMovies = async (page) => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_PARSE_HOST_URL}/classes/Movies?limit=1000&skip=${page * 1000}`,
          {
            method: 'GET',
            headers: {
              'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APP_ID,
              'X-Parse-JavaScript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
            },
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        if (data.results.length === 0) {
          setHasMore(false);
        } else {
          setMovies((prev) => [
            ...prev,
            ...data.results.map((movie) => ({
              id: movie.objectId,
              title: movie.title,
            })),
          ]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (hasMore) {
        fetchMovies(page);
      }
    }, [page]);
  
    return (
      <div>
        <h1>Movies List</h1>
        <Dropdown
          options={movies}
          onLoadMore={() => setPage((prev) => prev + 1)}
          hasMore={hasMore}
          loading={loading}
          onSelect={(movie) => console.log('Selected movie:', movie)}
          dropdownRef={dropdownRef}
        />
      </div>
    );
  };
  
=======
import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

const App = () => {
  // стан для збереження списку фільмів, статусу завантаження та іншого
  const [movies, setMovies] = useState([]); // масив фільмві
  const [loading, setLoading] = useState(false); // чи завантажується щось зараз
  const [hasMore, setHasMore] = useState(true); // чи є ще щось завантаджуватись
  const [page, setPage] = useState(0); // поточна стор-ка для завантаження

  // фун-я для отримання списку фільмів
  const fetchMovies = async (page) => {
    
    try {
      setLoading(true); // вмикаємо стан завантаження
      // формуємо запит до API
      const response = await fetch(
        `${process.env.REACT_APP_PARSE_HOST_URL}/classes/Movies?limit=1000&skip=${page * 1000}`,
        {
          method: 'GET',
          // заголовки для авторизації
          headers: {
            'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APP_ID,
            'X-Parse-JavaScript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
          },
        }
      );
// якщо відповідь не -ок, кидаємо помилку
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
// отримуємо результат у ф-ті json
      const { results } = await response.json();
      // якщо результатів немає, більше не треба завантажувати
      setHasMore(results.length > 0);
      // додаємо нові фільми до списку
      setMovies((prev) => [
        ...prev,
        ...results.map(({ objectId, title }) => ({ id: objectId, title })),
      ]);
    } catch (error) { // ловими-логуємо помилки
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false); // завершуємо завантаження 
    }
  };
// викликажємо fetchMovies, коли змінюється сторінка
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <div>
      <h1>Movies List</h1>
      {/* передаємо відповідні props на компонент Dropdown */}
      <Dropdown
        options={movies} // передаємо список фільмів у Dropdown
        onLoadMore={() => setPage((prev) => prev + 1)} // завант.ще сторінку
        hasMore={hasMore} // інф-я про додатковий фільм
        loading={loading} // статс завантаження
        onSelect={(movie) => console.log('Selected movie:', movie)}
      />
    </div>
  );
};
>>>>>>> origin/master

export default App;
