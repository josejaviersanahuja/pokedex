import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  auth: any;
};

const UserPanel = ({auth}: Props) => {
  console.log(auth);

  return (
    <View>
      <Text>UserPanel</Text>
    </View>
  );
};

export default UserPanel;
