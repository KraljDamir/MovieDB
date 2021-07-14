import React, { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDatabase } from '../context/DatabaseContext';
import { PropTypes } from 'prop-types';

const MovieItem = memo(({ result, navigation }) => {
  const { IMG_API } = useDatabase();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            movieId: result.id,
            imgApi: IMG_API,
            movieTitle: result.title,
            moviePoster: result.poster_path,
            releaseDate: result.release_date,
            overview: result.overview,
          })
        }
      >
        <Image
          style={styles.movieImage}
          source={{
            uri: IMG_API + result.poster_path,
          }}
        />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingBottom: 40,
  },
  movieImage: {
    height: 150,
    width: '95%',
    borderRadius: 10,
  },
});

MovieItem.displayName = 'movie item';

MovieItem.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  navigation: PropTypes.func,
};

export default MovieItem;
