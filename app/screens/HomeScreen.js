import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MovieItem from '../components/MovieItem';
import tmdb from '../api/tmdb';
import colors from '../config/colors';

function HomeScreen({ navigation }) {
  const API_KEY = '?api_key=4f0f5998660e83f5367c029bc3d7a701';

  const [database, setDatabase] = useState([]);

  const searchApi = async () => {
    const response = await tmdb.get('/popular' + API_KEY);
    setDatabase(response.data.results);
  };

  useEffect(() => {
    searchApi();
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
      <Text style={styles.headline}>What's popular</Text>
      <FlatList
        data={database}
        keyExtractor={(database) => database.id.toString()}
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

export default HomeScreen;
