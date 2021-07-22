import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './reducers/favoritesReducer';
import { moviesReducer } from './reducers/moviesReducer';

const reducer = combineReducers({
  favorites: favoritesReducer,
  favoritesId: favoritesReducer,
  popular: moviesReducer,
});

const store = configureStore({ reducer });

export default store;
