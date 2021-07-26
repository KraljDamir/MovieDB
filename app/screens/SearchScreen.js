import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

import SearchBar from '../components/SearchBar';
import MovieItem from '../components/MovieItem';
import useSearchScreen from '../hooks/useSearchScreen';

const DEBOUNCE_WAIT = 500;

function SearchScreen({ navigation }) {
  const [value, setValue] = useState('');
  const { movies, setMovies, fetchSearchedMovies } = useSearchScreen();

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  const search = useCallback(
    (searchValue) => {
      if (searchValue.length > 2) {
        fetchSearchedMovies(searchValue);
      } else {
        setMovies([]);
      }
    },
    [fetchSearchedMovies]
  );

  const debouncedSearch = useCallback(debounce(search, DEBOUNCE_WAIT), [
    search,
  ]);

  useEffect(() => {
    debouncedSearch(value);
  }, [debouncedSearch, value]);

  return (
    <View style={styles.container}>
      <SearchBar
        navigation={navigation}
        onChange={setValue}
        onClear={handleClear}
        value={value}
      />
      <Text style={styles.headline}>Showing {movies.length} results</Text>
      <FlatList
        data={movies}
        keyExtractor={({ id }) => id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieItem result={item} navigation={navigation} />
        )}
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
});

SearchScreen.propTypes = {
  navigation: PropTypes.func,
};

export default SearchScreen;
