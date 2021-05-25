import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function MovieDetailsScreen({ route, navigation }) {
  const { movieTitle, moviePoster, imgApi, releaseDate, overview } =
    route.params;

  let year = releaseDate.slice(0, -6);

  return (
    <View>
      <Image source={{ uri: imgApi + moviePoster }} style={styles.image} />
      <View style={styles.imageSection}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.title}>{movieTitle}</Text>
          <Text style={styles.title}>({year})</Text>
        </View>
        <Text style={styles.date}>{releaseDate}</Text>
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
    paddingBottom: 20,
  },
  textSection: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default MovieDetailsScreen;