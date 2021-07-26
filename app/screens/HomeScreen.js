import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import usePopularMovies from '../hooks/usePopularMovies';
import MovieItem from '../components/MovieItem';
import colors from '../config/colors';

function HomeScreen({ navigation }) {
  const { popularMovies, fetchNextPage } = usePopularMovies();

  useEffect(() => {
    fetchNextPage();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchBar}>
          <MaterialCommunityIcons
            name="magnify"
            size={40}
            color={colors.primary}
            style={{ paddingHorizontal: 10 }}
          />
          <Text style={styles.text}> Search </Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.headline}>What&apos;s popular</Text>
      <FlatList
        data={popularMovies}
        keyExtractor={({ id }) => id}
        numColumns={3}
        onEndReached={fetchNextPage}
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
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    flex: 1,
    color: '#B2B2B2',
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.func,
};

export default HomeScreen;
