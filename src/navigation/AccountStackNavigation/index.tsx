import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Accounts from '../../screens/Accounts';
import Exit from '../../icons/Exit';
import {StyleSheet} from 'react-native';
import {logout} from '../../firebase/auth';
import {useAuth} from '../../context/AuthContext';

const Stack = createStackNavigator();

type Props = {};

const AccountStackNavigation = ({}: Props) => {
  const {auth} = useAuth();
  return (
    <Stack.Navigator initialRouteName="MyAccount">
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

export default AccountStackNavigation;

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
});
