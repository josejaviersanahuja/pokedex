import {SafeAreaView} from 'react-native';
import React from 'react';
import UserPanel from './UserPanel';
import Login from './Login';

type Props = {};

const Accounts = ({}: Props) => {
  const auth = null;

  return (
    <SafeAreaView>{auth ? <UserPanel auth={auth} /> : <Login />}</SafeAreaView>
  );
};

export default Accounts;
