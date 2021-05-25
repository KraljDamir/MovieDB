import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

function MovieItem({ result, navigation }) {
  const IMG_API = 'https://image.tmdb.org/t/p/w500';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
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
}

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

export default MovieItem;
