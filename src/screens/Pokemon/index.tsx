/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {PokemonDetailsType} from '../../utils/types';
import {IsThisPokFav, POKEMON_TYPE_COLORS} from '../../utils/constants';
import PokemonExtraDetails from './PokemonExtraDetails';
import {SvgUri} from 'react-native-svg';
import {capitalize} from 'lodash';
import Heart from '../../icons/Heart';
import BackIcon from '../../icons/BackIcon';
import {useAuth} from '../../context/AuthContext';
import {addPokFav, removePokFav} from '../../firebase/firestore';

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<{params: PokemonDetailsType}>;
};

const Pokemon = ({route, navigation}: Props) => {
  const {id, imageUrl, name, order, type} = route.params;
  const {auth, currentUser, setRefresh} = useAuth();
  const isFav = IsThisPokFav(id, currentUser?.favoritos);
  const AddPokemonToFav = () => {
    addPokFav(auth?.email, {id, imageUrl, name, order, type});
    setRefresh((prev: boolean) => {
      return !prev;
    });
  };
  const RemovePokemonToFav = () => {
    removePokFav(auth?.email, name);
    setRefresh((prev: boolean) => {
      return !prev;
    });
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        isFav
          ? auth && (
              <Heart
                style={styles.headerStyleHeart}
                height={45}
                width={45}
                strokeWidth={1}
                fill="#fff"
                onPress={RemovePokemonToFav}
              />
            )
          : auth && (
              <Heart
                style={styles.headerStyleHeart}
                height={45}
                width={45}
                strokeWidth={1}
                onPress={AddPokemonToFav}
              />
            ),
      headerLeft: () => (
        <BackIcon
          onPress={navigation.goBack}
          style={styles.headerStyleBackBtn}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, route, isFav]);

  return (
    <SafeAreaView>
      <View
        style={{
          ...styles.topBackGround,
          backgroundColor: POKEMON_TYPE_COLORS[type].bg,
        }}>
        <Text
          style={{
            ...styles.topTexts,
            left: 20,
            color: POKEMON_TYPE_COLORS[type].c,
          }}>
          #{`${id}`.padStart(3, '0')}
        </Text>
        <View style={styles.topImage}>
          <SvgUri uri={imageUrl} height={300} width={300} />
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{capitalize(name)}</Text>
          </View>
        </View>
        <Text
          style={{
            ...styles.topTexts,
            right: 20,
            color: POKEMON_TYPE_COLORS[type].c,
          }}>
          {order}
        </Text>
      </View>
      <View
        style={{
          ...styles.topBottomBorder,
          backgroundColor: POKEMON_TYPE_COLORS[type].bg,
        }}
      />

      <PokemonExtraDetails id={id} />
    </SafeAreaView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  headerStyleBackBtn: {
    marginLeft: 20,
    color: '#000',
  },
  headerStyleHeart: {
    marginRight: 45,
    color: '#f00',
  },
  topBackGround: {
    position: 'relative',
    flex: 0,
    height: 100,
    justifyContent: 'center',
  },
  topTexts: {
    position: 'absolute',
    fontWeight: '700',
    top: 50,
    fontSize: 20,
  },
  topImage: {
    position: 'absolute',
    top: 15,
    width: '100%',
    zIndex: -1,

    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBottomBorder: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 200,
    borderBottomEndRadius: 200,
    transform: [{scaleX: 2}],
    zIndex: -1,
  },
  nameWrapper: {
    flex: 0,
    width: '100%',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
  },
});
