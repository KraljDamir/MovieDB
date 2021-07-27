import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const movieStorage = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.STORE_MOVIE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case actionTypes.STORE_POPULAR_MOVIES: {
      const newState = {
        ...state,
      };

      action.payload.movies.forEach((movie) => {
        newState[movie.id] = movie;
      });

      return newState;
    }

    default:
      return state;
  }
};

const popularMoviesList = (state = [], action) => {
  switch (action.type) {
    case actionTypes.STORE_POPULAR_MOVIES:
      return [...state, ...action.payload.movies.map((movie) => movie.id)];
    default:
      return state;
  }
};

export const moviesReducer = combineReducers({
  movieStorage,
  popularMoviesList,
});
