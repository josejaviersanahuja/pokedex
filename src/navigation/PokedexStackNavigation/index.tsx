import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Pokedex from '../../screens/Pokedex';
import Pokemon from '../../screens/Pokemon';

const Stack = createStackNavigator();

type Props = {};

const PokedexStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPokedex"
        component={Pokedex}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default PokedexStackNavigation;
