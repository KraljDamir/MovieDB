import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import tmdb from '../api/tmdb';
import { useDatabase } from '../context/DatabaseContext';
import * as actions from '../redux/actions/action';
import {
  favoriteMoviesSelector,
  favoriteMovieIdSelector,
} from '../redux/selectors';

export default () => {
  const { API_KEY } = useDatabase();

  const favoritedMovies = useSelector(favoriteMoviesSelector);

  var isFavorited = false;

  const movieId = useSelector(favoriteMovieIdSelector);

  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const storeFavoriteMovie = useCallback(async () => {
    try {
      const response = await tmdb.get(`movie/${movieId}?api_key=${API_KEY}`);

      const isFavorite = favoritedMovies.includes(response.data);

      if (isFavorite) {
        isFavorited = false;
        dispatch(actions.removeFromFav(response.data));
      } else {
        isFavorited = true;
        dispatch(actions.addToFav(response.data));
        console.log('action dispatched');
      }
    } catch (err) {
      setErrorMessage('Something went wrong!');
      console.log(err);
    }
  }, [movieId]);

  return {
    isFavorited,
    storeFavoriteMovie,
    errorMessage,
  };
};
