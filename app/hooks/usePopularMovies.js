import { useEffect, useState, useCallback } from 'react';
import tmdb from '../api/tmdb';
import { useDatabase } from '../context/DatabaseContext';

export default () => {
  const { API_KEY } = useDatabase();

  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(0);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    fetchPopularMovies();
  }, [page]);

  const fetchPopularMovies = useCallback(async () => {
    if (page === 0) {
      return;
    }
    try {
      const response = await tmdb.get(
        `/movie/popular?api_key=${API_KEY}&page=${page}`
      );
      setPopularMovies((prev) => [...prev, ...response.data.results]);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  }, [page]);

  const fetchMovieDetails = useCallback(async (movieId) => {
    try {
      const response = await tmdb.get(`/movie/${movieId}?api_key=${API_KEY}`);
      setSelectedMovie(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  }, []);

  return {
    popularMovies,
    fetchPopularMovies,
    fetchNextPage,
    errorMessage,
    selectedMovie,
    fetchMovieDetails,
  };
};
