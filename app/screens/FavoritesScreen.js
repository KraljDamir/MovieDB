import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { favoriteMovieListSelector } from '../redux/selectors';
import { useSelector } from 'react-redux';

import colors from '../config/colors';
import MovieItem from '../components/MovieItem';

function FavoritesScreen({ navigation }) {
  const favoriteMovies = useSelector(favoriteMovieListSelector);

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Favorites</Text>
      <FlatList
        data={favoriteMovies}
        keyExtractor={({ id }) => id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <MovieItem result={item} navigation={navigation} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  headline: {
    paddingVertical: 20,
    color: colors.primary,
    fontSize: 20,
    fontWeight: '600',
  },
});

FavoritesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default FavoritesScreen;
