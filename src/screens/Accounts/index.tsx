import {SafeAreaView} from 'react-native';
import React from 'react';
import UserPanel from './UserPanel';
import Login from './Login';
import {useAuth} from '../../context/AuthContext';

type Props = {};

const Accounts = ({}: Props) => {
  const {auth} = useAuth();

  return (
    <SafeAreaView>{auth ? <UserPanel auth={auth} /> : <Login />}</SafeAreaView>
  );
};

export default Accounts;
