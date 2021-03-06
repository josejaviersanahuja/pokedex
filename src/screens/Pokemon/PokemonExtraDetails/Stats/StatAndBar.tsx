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
      <View style={styles.textWrapper}>
        <Text style={styles.texto}>{`${capitalize(name)}:`}</Text>
        <Text style={styles.texto}>{`${base_stat}`}</Text>
      </View>
      <View style={styles.bar}>
        <View
          style={{
            ...styles.filledBar,
            backgroundColor: innerStyle.bgc,
            width: innerStyle.width,
          }}
        />
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
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texto: {
    paddingRight: 5,
    color: '#000'
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

  const width = (160 * num) / 150;

  return {width, bgc};
};
