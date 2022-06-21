import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Dispatch, useLayoutEffect, useRef, useState} from 'react';
import {isEqual} from 'lodash';
import {getPokemonDetail, getPokemons} from '../../api/PokemonController';
import {PokedexType, PokemonDetailsType} from '../../utils/types';
import {pokedexConverter} from '../../utils/typeConverters';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<(PokemonDetailsType | null)[]>([]);
  const [page, setPage] = useState(0);
  const [isThereNext, setIsThereNext] = useState(true);
  const pokedex = useRef<PokedexType>([]);

  useLayoutEffect(() => {
    isThereNext &&
      getPokemons(page)
        .then(res => res.json())
        .then(response => {
          !response.next && setIsThereNext(false);
          const newList: PokedexType = pokedexConverter(response.results);
          pokedex.current = newList;
          const allPromises = newList.map(value => getPokemonDetail(value.url));
          Promise.all(allPromises).then(res => {
            res && setPokemons([...pokemons, ...res]);
          });
        })
        .catch(err => {
          console.error(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!pokemons) {
    return (
      <SafeAreaView>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View style={styles.main}>
        {false && <Text>Loading...</Text>}
        <MemoizedMyFlatList
          page={page}
          pokemons={pokemons}
          setPage={setPage}
          isThereNext={isThereNext}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pokedex;

type Props = {
  pokemons: (PokemonDetailsType | null)[];
  setPage: Dispatch<number>;
  page: number;
  isThereNext: boolean;
};
const MyFlatList = ({page, pokemons, setPage, isThereNext}: Props) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(e, index) => (e ? String(e.id) : String(index))}
      renderItem={e => <PokemonCard pok={e.item} />}
      onEndReached={() => isThereNext && setPage(page + 1)}
      onEndReachedThreshold={0.4}
      maxToRenderPerBatch={60}
      initialNumToRender={20}
      getItemLayout={(data, index) => ({
        length: 170,
        offset: 170 * index,
        index,
      })}
      ListFooterComponent={isThereNext ? <ActivityIndicator size={60}/> : null}
    />
  );
};

const arePropsEqual = (prevProps: Props, newProps: Props) => {
  return isEqual(prevProps.pokemons, newProps.pokemons);
};

const MemoizedMyFlatList = React.memo(MyFlatList, arePropsEqual);

const styles = StyleSheet.create({
  main: {
    marginBottom: 40,
    paddingHorizontal: 10,
  },
});
