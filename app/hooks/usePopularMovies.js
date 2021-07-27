import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tmdb from '../api/tmdb';
import { useDatabase } from '../context/DatabaseContext';
import * as actions from '../redux/actions/action';
import { popularMoviesSelector } from '../redux/selectors';

export default () => {
  const { API_KEY } = useDatabase();

  const popularMovies = useSelector(popularMoviesSelector);

  const [selectedMovie, setSelectedMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const [page, setPage] = useState(1);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const dispatch = useDispatch();

  const fetchPopularMovies = useCallback(async () => {
    try {
      const response = await tmdb.get(
        `movie/popular?api_key=${API_KEY}&page=${page}`
      );
      dispatch(actions.storePopularMovies(response.data.results));
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  }, [page]);

  useEffect(() => {
    fetchPopularMovies();
  }, [page]);

  const fetchMovieDetails = useCallback(
    async (movieId) => {
      try {
        const response = await tmdb.get(`movie/${movieId}?api_key=${API_KEY}`);
        setSelectedMovie(response.data);
        dispatch(actions.storeMovie(response.data));
      } catch (err) {
        setErrorMessage('Something went wrong!');
      }
    },
    [dispatch]
  );

  return {
    popularMovies,
    fetchPopularMovies,
    fetchNextPage,
    errorMessage,
    selectedMovie,
    fetchMovieDetails,
  };
};
