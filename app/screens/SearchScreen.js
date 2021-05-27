import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import SearchBar from '../components/SearchBar';
import MovieItem from '../components/MovieItem';
import tmdb from '../api/tmdb';

function SearchScreen({ navigation }) {
  const API_KEY = '?api_key=4f0f5998660e83f5367c029bc3d7a701';

  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [textInput, setTextInput] = useState('');

  const fetchSearchedMovies = async (textInput) => {
    try {
      const response = await tmdb.get(
        'search/movie' + API_KEY + '&query=' + textInput
      );
      setMovies(response.data.results);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    textInput.length > 2 ? fetchSearchedMovies(textInput) : setMovies([]);
  }, [textInput]);

  return (
    <View style={styles.container}>
      <SearchBar navigation={navigation} setTextInput={setTextInput} />
      <Text style={styles.headline}>Showing {movies.length} results </Text>
      <FlatList
        data={movies}
        keyExtractor={(movies) => movies.id.toString()}
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
});

export default SearchScreen;
