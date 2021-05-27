import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import MovieDetailsScreen from './app/screens/MovieDetailsScreen';
import colors from './app/config/colors';
import imageSrc from './app/images/tmdb.png';
import { DatabaseProvider } from './app/context/DatabaseContext';

const Stack = createStackNavigator();

const LogoTitle = () => (
  <Image style={{ width: 143, height: 35 }} source={imageSrc} />
);

const App = () => (
  <DatabaseProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
            height: 100,
          },
          headerTitle: <LogoTitle />,
          headerTruncatedBackTitle: '',
          headerBackTitle: '',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </DatabaseProvider>
);

export default App;
