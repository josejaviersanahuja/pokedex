import {View, Text} from 'react-native';
import React from 'react';
import {Auth} from '../../utils/types';

type Props = {
  auth: Auth;
};

const UserPanel = ({auth}: Props) => {
  return (
    <View>
      <Text>Hola, {auth.email.split('@')[0]}</Text>
    </View>
  );
};

export default UserPanel;
