import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<{params: {id: number}}>;
};

const Pokemon = ({route}: Props) => {
  console.log(route);

  return (
    <View>
      <Text>Pokemon</Text>
    </View>
  );
};

export default Pokemon;
