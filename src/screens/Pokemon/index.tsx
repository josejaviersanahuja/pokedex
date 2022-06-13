import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import { PokemonDetailsType } from '../../utils/types';
import { POKEMON_TYPE_COLORS } from '../../utils/constants';

type Props = {
  route: RouteProp<{params: PokemonDetailsType}>;
};

const Pokemon = ({route}: Props) => {
  const {id, imageUrl, name, order, type} = route.params

  return (
    <SafeAreaView>
      <View style={{...styles.topBackGround, backgroundColor: POKEMON_TYPE_COLORS[type].bg}} >
        <Text style={{...styles.topTexts, left: 20, color: POKEMON_TYPE_COLORS[type].c}} >#{`${id}`.padStart(3,'0')}</Text>
        <Image source={{uri: imageUrl}} style={styles.topImage} />
        <Text style={{...styles.topTexts, right: 20, color: POKEMON_TYPE_COLORS[type].c}} >{order}</Text>
      </View>
      <View style={{...styles.topBottomBorder, backgroundColor: POKEMON_TYPE_COLORS[type].bg}} />
      <View style={styles.nameWrapper} >
        <Text style={{...styles.name, color: POKEMON_TYPE_COLORS[type].c}} >{name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  topBackGround: {
    position: 'relative',
    flex:0,
    height: 200,
    justifyContent: 'center',
  },
  topTexts: {
    position: 'absolute',
    fontWeight: '700',
    top: 50,
    fontSize: 20,
  },
  topImage: {
    width: 250,
    minHeight: 250,
    alignSelf: 'center',
  },
  topBottomBorder:{
    width: '100%',
    height: 200,
    borderBottomLeftRadius:200,
    borderBottomEndRadius: 200,
    transform: [{scaleX: 2}],
  },
  nameWrapper: {
    position: 'absolute',
    top: 200,
    flex: 0,
    width: '100%',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
  }
})