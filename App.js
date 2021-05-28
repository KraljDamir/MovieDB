import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import MovieDetailsScreen from './app/screens/MovieDetailsScreen';
import colors from './app/config/colors';
import { DatabaseProvider } from './app/context/DatabaseContext';
import LogoTitle from './app/components/LogoTitle';

const Stack = createStackNavigator();

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
