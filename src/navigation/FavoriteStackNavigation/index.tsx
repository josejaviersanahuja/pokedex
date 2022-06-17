import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../../screens/Favorites';
import Pokemon from '../../screens/Pokemon';
import {logout} from '../../firebase/auth';
import Exit from '../../icons/Exit';
import {StyleSheet} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import Accounts from '../../screens/Accounts';

const Stack = createStackNavigator();

type Props = {};

const FavoriteStackNavigation = ({}: Props) => {
  const {auth} = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyFavorites"
        component={Favorites}
        options={{
          title: 'Mis Favoritos',
          headerRight: () =>
            auth && <Exit style={styles.logoutBtnStyle} onPress={logout} />,
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
      <Stack.Screen
        name="MyAccount"
        component={Accounts}
        options={{
          title: 'Mi Cuenta',
          headerRight: () =>
            auth && <Exit style={styles.logoutBtnStyle} onPress={logout} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigation;

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
});
