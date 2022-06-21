import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import PokemonCard from '../Pokedex/PokemonCard';
import {useAuth} from '../../context/AuthContext';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const Favorites = ({navigation}: Props) => {
  const {currentUser} = useAuth();
  const pokemons = currentUser?.favoritos;

  useEffect(() => {
    currentUser === null && navigation.navigate('Accounts');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pokemons) {
    navigation.navigate('Accounts');
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.texto}>
          Debes estar registrado para tener pokemones favoritos
        </Text>
        <Button
          title="Iniciar Sesión"
          onPress={() => navigation.navigate('Accounts')}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <FlatList
          data={pokemons}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(e, index) => (e ? String(e.id) : String(index))}
          renderItem={e => <PokemonCard pok={e.item} />}
          maxToRenderPerBatch={60}
          initialNumToRender={20}
          getItemLayout={(data, index) => ({
            length: 170,
            offset: 170 * index,
            index,
          })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  main: {
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  texto: {
    padding: 20,
    marginVertical: 10,
  },
});
