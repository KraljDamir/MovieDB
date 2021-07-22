import * as actions from '../actions/actionTypes';

export const initialState = {
  popularMoviesStorage: {},
  movieStorage: {},
  popularMoviesList: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_POPULAR_MOVIES:
      return {
        ...state,
        popularMoviesList: [
          ...state.popularMoviesList,
          ...action.payload.movies,
        ],
      };

    default:
      return state;
  }
};

// if (
//   state.favoriteMovies
//     .map((m) => Object.keys(m)[0])
//     .includes(`${action.payload.id}`)
// ) {
//   return state;
// }

// if (state.favoriteMovies.find((id) => id === action.payload.id)) {
//   const updatedMovies = [...state.favoriteMovies];
//   updatedMovies.splice(action.payload.id);
//   return { ...state, favoriteMovies: updatedMovies };
// }

// return {
//   ...state,
//   favoriteMovies: [...state.favoriteMovies, action.payload.id],
// };
