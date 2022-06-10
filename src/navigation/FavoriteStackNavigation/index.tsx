import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../../screens/Favorites';

const Stack = createStackNavigator();

type Props = {};

const FavoriteStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyFavorites"
        component={Favorites}
        options={{
          title: 'Mis Favoritos',
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigation;
