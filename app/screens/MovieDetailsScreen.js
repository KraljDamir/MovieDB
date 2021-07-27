import React, { useEffect, useMemo, useCallback } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import usePopularMovies from '../hooks/usePopularMovies';
import useFavoriteMovies from '../hooks/useFavoriteMovies';

function MovieDetailsScreen({ route }) {
  const { movieTitle, moviePoster, imgApi, releaseDate, overview, movieId } =
    route.params;

  const { fetchMovieDetails, selectedMovie } = usePopularMovies();
  const { isFavorite, storeFavoriteMovie } = useFavoriteMovies(movieId);

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);

  const { genres = [] } = selectedMovie;
  const genresText = useMemo(
    () => genres.map(({ name }) => name).join(', '),
    [genres]
  );

  const movieHours = Math.floor(selectedMovie.runtime / 60);
  const movieMinutes = selectedMovie.runtime % 60;

  const releaseDateStyled = releaseDate.replace(/-/g, '/');

  const year = releaseDate.slice(0, -6);

  const handleFavoriteMovie = useCallback(() => {
    storeFavoriteMovie();
  }, [storeFavoriteMovie]);

  return (
    <View>
      <Image source={{ uri: `${imgApi}${moviePoster}` }} style={styles.image} />
      <View style={styles.imageSection}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.title}>{movieTitle}</Text>
          <Text style={styles.title}>{year}</Text>
        </View>
        <Text style={styles.date}>{releaseDateStyled}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.genres}>{genresText}</Text>
          <Text style={styles.runtime}>
            {movieHours}h {movieMinutes}m
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={handleFavoriteMovie}>
          <View style={styles.favButton}>
            <MaterialCommunityIcons
              name={isFavorite ? 'star' : 'star-outline'}
              size={20}
              color={colors.light}
              style={{ alignSelf: 'center' }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.textSection}>
        <Text
          style={{
            color: colors.primary,
            fontSize: 25,
            fontWeight: '600',
            paddingBottom: 10,
          }}
        >
          Overview
        </Text>
        <Text
          style={{
            color: colors.primary,
            fontSize: 15,
            fontWeight: '400',
            paddingBottom: 10,
          }}
        >
          {overview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  imageSection: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
    height: 300,
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    paddingRight: 5,
  },
  date: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  genres: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  runtime: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  textSection: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  favButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
});

MovieDetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: {
      movieTitle: PropTypes.string,
      moviePoster: PropTypes.string,
      imgApi: PropTypes.string,
      releaseDate: PropTypes.string,
    },
  }),
};

/* MovieDetailsScreen.defaultProps = {
  movieTitle: '',
}*/

export default MovieDetailsScreen;
