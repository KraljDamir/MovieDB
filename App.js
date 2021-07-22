import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './app/redux/store';

import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import MovieDetailsScreen from './app/screens/MovieDetailsScreen';
import FavoritesScreen from './app/screens/FavoritesScreen';
import colors from './app/config/colors';
import { DatabaseProvider } from './app/context/DatabaseContext';
import LogoTitle from './app/components/LogoTitle';

const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeScreenStack = () => (
  <HomeStack.Navigator
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
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Search" component={SearchScreen} />
    <HomeStack.Screen name="Details" component={MovieDetailsScreen} />
  </HomeStack.Navigator>
);

const FavoritesScreenStack = () => (
  <FavoritesStack.Navigator
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
    <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
    <FavoritesStack.Screen name="Details" component={MovieDetailsScreen} />
  </FavoritesStack.Navigator>
);

const App = () => (
  <Provider store={store}>
    <DatabaseProvider>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreenStack} />
          <Tabs.Screen name="Favorites" component={FavoritesScreenStack} />
        </Tabs.Navigator>
      </NavigationContainer>
    </DatabaseProvider>
  </Provider>
);

export default App;

// STARA NAVIGACIJA BEZ BOTTOM TABOVA
//
// const App = () => (
//   <DatabaseProvider>
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: colors.primary,
//             height: 100,
//           },
//           headerTitle: <LogoTitle />,
//           headerTruncatedBackTitle: '',
//           headerBackTitle: '',
//         }}
//       >
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Search" component={SearchScreen} />
//         <Stack.Screen name="Details" component={MovieDetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </DatabaseProvider>
// );

// export default App;
