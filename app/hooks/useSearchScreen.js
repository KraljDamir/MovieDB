import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tmdb from '../api/tmdb';
import { useDatabase } from '../context/DatabaseContext';
import * as actions from '../redux/actions/action';
import { popularMoviesSelector } from '../redux/selectors';

export default () => {
  const { API_KEY } = useDatabase();

  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const popularMovies = useSelector(popularMoviesSelector);

  const fetchSearchedMovies = useCallback(async (textInput) => {
    try {
      const response = await tmdb.get(
        `search/movie?api_key=${API_KEY}&query=${textInput}`
      );
      setMovies(response.data.results);

      if (popularMovies.includes(response.data.results)) {
        return;
      }

      dispatch(actions.storePopularMovies(response.data.results));
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  }, []);

  return { movies, setMovies, fetchSearchedMovies, errorMessage };
};
