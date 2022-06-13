import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {capitalize} from 'lodash';
import {PokemonDetailsType, ScreenTag} from '../../utils/types';
import {Image} from 'react-native';
import {POKEMON_TYPE_COLORS} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  pok: PokemonDetailsType | null;
};

const PokemonCard = ({pok}: Props) => {
  const navigation = useNavigation<StackNavigationProp<ScreenTag>>();

  const handlePress = () => {
    navigation.navigate('Pokemon', pok ? pok : undefined);
  };

  if (!pok) {
    return <View />;
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          ...styles.cardFrame,
          backgroundColor: POKEMON_TYPE_COLORS[pok.type].bg,
        }}>
        <Text
          style={{
            ...styles.pokemontText,
            color: POKEMON_TYPE_COLORS[pok.type].c,
          }}>
          #{`${pok.id}`.padStart(3, '0')}
        </Text>
        <Image source={{uri: pok.imageUrl}} style={styles.pokemonImage} />
        <Text
          style={{
            ...styles.pokemontText,
            color: POKEMON_TYPE_COLORS[pok.type].c,
          }}>
          {' '}
          {capitalize(pok.name)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  pokemonImage: {
    position: 'absolute',
    width: 90,
    height: 90,
    right: 0,
  },
  pokemontText: {
    alignSelf: 'flex-start',
    fontWeight: '700',
    marginVertical: 25,
  },
  cardFrame: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 150,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
  },
});
