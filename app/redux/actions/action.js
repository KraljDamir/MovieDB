import * as actionTypes from './actionTypes';

export const storeFavoriteId = (movieId) => ({
  type: actionTypes.STORE_FAVORITE_ID,
  payload: {
    movieId,
  },
});

export const addToFav = (movieId) => ({
  type: actionTypes.ADD_TO_FAV,
  payload: movieId,
});

export const removeFromFav = (movieId) => ({
  type: actionTypes.REMOVE_FROM_FAV,
  payload: movieId,
});

export const storePopularMovies = (movies) => ({
  type: actionTypes.STORE_POPULAR_MOVIES,
  payload: {
    movies,
  },
});

export const storeMovie = (movie) => ({
  type: actionTypes.STORE_MOVIE,
  payload: movie,
});
