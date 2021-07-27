import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../redux/actions/action';
import { favoriteMoviesIdsSelector } from '../redux/selectors';

export default (movieId) => {
  const favoriteMovies = useSelector(favoriteMoviesIdsSelector);

  const dispatch = useDispatch();

  const isFavorite = favoriteMovies.includes(movieId);

  const storeFavoriteMovie = useCallback(async () => {
    if (isFavorite) {
      dispatch(actions.removeFromFav(movieId));
    } else {
      dispatch(actions.addToFav(movieId));
    }
  }, [dispatch, isFavorite]);

  return {
    storeFavoriteMovie,
    isFavorite,
  };
};
