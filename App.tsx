import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Accounts from './src/screens/Accounts';
import Pokedex from './src/screens/Pokedex';
import Favorites from './src/screens/Favorites';
import Heart from './src/icons/Heart';
import AccountIcon from './src/icons/AccountIcon';
import {Image, StyleSheet} from 'react-native';

const imgsource = require('./src/assets/pokeball.png');

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Accounts"
          component={Accounts}
          options={{
            tabBarLabel: 'Accounts',
            tabBarIcon: () => <AccountIcon color={'#000'} />,
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={imgsource} style={styles.pokeballIconStyle} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: () => <Heart color={'red'} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  pokeballIconStyle: {
    width: 72,
    height: 72,
    top: -17,
  },
});
