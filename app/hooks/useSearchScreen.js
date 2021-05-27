import { useState, useCallback } from 'react';
import tmdb from '../api/tmdb';
import { useDatabase } from '../context/DatabaseContext';

export default () => {
  const { API_KEY } = useDatabase();

  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchSearchedMovies = useCallback(async (textInput) => {
    try {
      const response = await tmdb.get(
        `search/movie?api_key=${API_KEY}&query=${textInput}`
      );
      setMovies(response.data.results);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  }, []);

  return { movies, setMovies, fetchSearchedMovies, errorMessage };
};
