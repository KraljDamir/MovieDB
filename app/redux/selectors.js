export const favoritesSelector = (state) => state.favorites;

export const favoriteMoviesSelector = (state) =>
  favoritesSelector(state).favoriteMovies;

export const favoritesIdSelector = (state) => state.favoritesId;

export const favoriteMovieIdSelector = (state) =>
  favoritesIdSelector(state).favoriteMovieId;

export const popularSelector = (state) => state.popular;

export const popularMoviesSelector = (state) =>
  popularSelector(state).popularMoviesList;
