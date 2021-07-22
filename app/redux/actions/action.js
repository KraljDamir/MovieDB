import * as actionTypes from './actionTypes';

export const storeFavoriteId = (movieId) => ({
  type: actionTypes.STORE_FAVORITE_ID,
  payload: {
    movieId,
  },
});

export const addToFav = (movie) => ({
  type: actionTypes.ADD_TO_FAV,
  payload: {
    movie,
  },
});

export const removeFromFav = (movie) => ({
  type: actionTypes.REMOVE_FROM_FAV,
  payload: {
    movie,
  },
});

export const storePopularMovies = (movies) => ({
  type: actionTypes.STORE_POPULAR_MOVIES,
  payload: {
    movies,
  },
});
