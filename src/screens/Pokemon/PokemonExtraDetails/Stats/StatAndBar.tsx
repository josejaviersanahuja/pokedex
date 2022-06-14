/* eslint-disable curly */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {capitalize} from 'lodash';

type Props = {
  name: string;
  base_stat: number;
  key: string;
};

const StatAndBar = ({name, base_stat}: Props) => {
  
  const innerStyle = paintingBarStyle(base_stat);

  return (
    <View style={styles.barWrapper}>
      <Text style={styles.texto}>
        {`${capitalize(name)}:`.padEnd(
          String(base_stat).length === 3 ? 15 : 16,
          ' ',
        )}{' '}
        {`${base_stat}`}
      </Text>
      <View style={styles.bar}>
        <View style={{...styles.filledBar, backgroundColor: innerStyle.bgc, width: innerStyle.width}} />
      </View>
    </View>
  );
};

export default StatAndBar;

const styles = StyleSheet.create({
  barWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  texto: {
    fontFamily: 'monospace',
  },
  bar: {
    position: 'relative',
    backgroundColor: '#aaa',
    width: 160,
    height: 5,
    alignSelf: 'center',
  },
  filledBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 5,
    width: 10,
  },
});

const paintingBarStyle = (num: number) => {
  let bgc = '#f00';
  if (num > 50) bgc = '#f80';
  if (num > 100) bgc = '#dd0';
  if (num > 130) bgc = '#00f';
  
  const width = 160 * num/150;

  return {width, bgc}
};