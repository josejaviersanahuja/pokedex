import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Accounts from '../../screens/Accounts';

const Stack = createStackNavigator();

type Props = {};

const AccountStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator initialRouteName="MyAccount">
      <Stack.Screen
        name="MyAccount"
        component={Accounts}
        options={{
          title: 'Mi Cuenta',
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigation;
