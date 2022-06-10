import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Heart from '../icons/Heart';
import AccountIcon from '../icons/AccountIcon';
import {Image, StyleSheet} from 'react-native';
import AccountStackNavigation from './AccountStackNavigation';
import FavoriteStackNavigation from './FavoriteStackNavigation';
import PokedexStackNavigation from './PokedexStackNavigation';

const imgsource = require('../assets/pokeball.png');

const Tab = createBottomTabNavigator();
type Props = {};

const TabNavigation = ({}: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Accounts"
        component={AccountStackNavigation}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: () => <AccountIcon color={'#000'} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexStackNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={imgsource} style={styles.pokeballIconStyle} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStackNavigation}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: () => <Heart color={'red'} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  pokeballIconStyle: {
    width: 72,
    height: 72,
    top: -17,
  },
});
