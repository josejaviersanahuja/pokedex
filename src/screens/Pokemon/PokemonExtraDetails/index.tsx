import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPokemonExtraDetails} from '../../../api/PokemonController';
import {PokemonExtraDetailConverter} from '../../../utils/typeConverters';
import {PokemonExtraDetailsType} from '../../../utils/types';
import PillTypes from './PillTypes';
import Stats from './Stats';

type Props = {
  id: number;
};

const PokemonExtraDetails = ({id}: Props) => {
  const [extraDetails, setExtraDetails] =
    useState<PokemonExtraDetailsType | null>(null);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    getPokemonExtraDetails(id).then(response => {
      setExtraDetails(PokemonExtraDetailConverter(response));
      setIsloading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!extraDetails) {
    return <>{isLoading && <ActivityIndicator size={60} style={styles.extraDetailWrapper}/>}</>;
  }
  return (
    <View style={styles.extraDetailWrapper}>
      <View style={styles.typesWrapper}>
        {extraDetails.types.map((e, i) => (
          <PillTypes type={e.name} key={e.name + i} />
        ))}
      </View>
      <Stats stats={extraDetails.stats} />
    </View>
  );
};

export default PokemonExtraDetails;

const styles = StyleSheet.create({
  extraDetailWrapper: {
    paddingHorizontal: 30,
    position: 'relative',
    top: 70,
  },
  typesWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
