import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PokemonDetailsConverter} from '../../utils/typeConverters';
import {PokemonDetailsType} from '../../utils/types';
import {Image} from 'react-native';

type Props = {
  pok : PokemonDetailsType | null
};

const PokemonCard = ({pok}: Props) => {
  
  console.log(`pokemon ${pok?.id}`);
  if (!pok) return <View></View>
  return (
    <View style={styles.cardFrame}>
      <Text>#{`${pok.id}`.padStart(3,"0")}</Text>
      <Image
        source={{uri: pok.imageUrl}}
        style={styles.pokemonImage}
      />
      <Text> {pok.name}</Text>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  pokemonImage:{
    width:60,
    height:60,
  },
  cardFrame:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    margin: 20,
    padding:10,
    borderStyle: 'solid',
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 65,
  }
})