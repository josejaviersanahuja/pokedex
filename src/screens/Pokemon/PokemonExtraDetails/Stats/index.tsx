import {View, StyleSheet} from 'react-native';
import React from 'react';
import StatAndBar from './StatAndBar';

type Props = {
  stats: {name: string; base_stat: number}[];
};

const Stats = ({stats}: Props) => {
  return (
    <View style={styles.statsWrapper}>
      {stats.map((e, i) => (
        <StatAndBar key={e.name + i} name={e.name} base_stat={e.base_stat} />
      ))}
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  statsWrapper: {
    marginTop: 20,
  },
});
