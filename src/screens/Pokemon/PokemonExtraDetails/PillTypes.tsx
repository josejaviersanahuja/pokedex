import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {capitalize} from 'lodash';
import {POKEMON_TYPE_COLORS} from '../../../utils/constants';

type Props = {
  type: string;
  key: string;
};

const PillTypes = ({type}: Props) => {
  return (
    <View
      style={{
        ...styles.pillShape,
        backgroundColor: POKEMON_TYPE_COLORS[type].bg,
      }}>
      <Text style={{...styles.texto, color: POKEMON_TYPE_COLORS[type].c}}>
        {capitalize(type)}
      </Text>
    </View>
  );
};

export default PillTypes;

const styles = StyleSheet.create({
  pillShape: {
    backgroundColor: '#aaa',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  texto: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
