export const favoritesSelector = (state) => state.favorites;

export const favoriteMoviesIdsSelector = (state) =>
  favoritesSelector(state).favoriteMoviesIds;

export const popularSelector = (state) => state.popular;

export const moviesSelector = (state) => popularSelector(state).movieStorage;

export const favoriteMovieListSelector = (state) => {
  const favoriteMovieIds = favoriteMoviesIdsSelector(state);
  const movies = moviesSelector(state);

  return favoriteMovieIds
    .filter((id) => Boolean(movies[id]))
    .map((id) => movies[id]);
};

export const popularMoviesSelector = (state) =>
  popularSelector(state).popularMoviesList.map(
    (id) => moviesSelector(state)[id]
  );
