import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Accounts from './src/screens/Accounts';
import Pokedex from './src/screens/Pokedex';
import Favorites from './src/screens/Favorites';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accounts" component={Accounts} />
        <Tab.Screen name="Pokedex" component={Pokedex} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
