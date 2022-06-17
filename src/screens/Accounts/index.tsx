import {SafeAreaView} from 'react-native';
import React from 'react';
import UserPanel from './UserPanel';
import Login from './Login';
import {useAuth} from '../../context/AuthContext';

type Props = {};

const Accounts = ({}: Props) => {
  const {currentUser} = useAuth();

  return (
    <SafeAreaView>
      {currentUser ? <UserPanel currentUser={currentUser} /> : <Login />}
    </SafeAreaView>
  );
};

export default Accounts;
