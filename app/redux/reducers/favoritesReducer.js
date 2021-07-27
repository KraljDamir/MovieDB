import { combineReducers } from 'redux';
import * as actions from '../actions/actionTypes';

const favoriteMoviesIds = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TO_FAV:
      return [...state, action.payload];

    case actions.REMOVE_FROM_FAV:
      return state.filter((id) => id !== action.payload);

    default:
      return state;
  }
};

export const favoritesReducer = combineReducers({
  favoriteMoviesIds,
});
