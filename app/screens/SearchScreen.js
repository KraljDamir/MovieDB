import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from '../components/SearchBar';

function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBar navigation={navigation} />
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
