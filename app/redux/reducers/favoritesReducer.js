import * as actions from '../actions/actionTypes';

export const initialState = {
  favoriteMovies: [],
  favoriteMovieId: {},
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_FAVORITE_ID:
      return {
        favoriteMovieId: action.payload.movieId,
      };

    case actions.ADD_TO_FAV:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, ...action.payload.movie],
      };

    case actions.REMOVE_FROM_FAV:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie !== action.payload.favoriteMovies
        ),
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
