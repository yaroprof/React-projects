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
  

export default App;
