import {Button, FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {getPokemonDetail, getPokemons} from '../../api/PokemonController';
import {PokedexType, PokemonDetailsType} from '../../utils/types';
import {pokedexConverter} from '../../utils/typeConverters';
import PokemonCard from './PokemonCard';

type Props = {};

const Pokedex = ({}: Props) => {
  const [pokemons, setPokemons] = useState<(PokemonDetailsType | null)[]>([]);
  const isLoading = useRef(false)
  const [page, setPage] = useState(0);
  const [isError, setIsError] = useState(false);
  const pokedex = useRef<PokedexType>([])
  
  useEffect(() => {
    isLoading.current = true;
    getPokemons(page)
      .then(res => res.json())
      .then(response => {
        const newList : PokedexType = [...pokedex.current,...pokedexConverter(response.results)]
        pokedex.current = newList
        const allPromises = newList.map((value)=> getPokemonDetail(value.url))
        Promise.all(allPromises)
        .then( res => {
          console.log("loading...");
          res && setPokemons(res)
          isLoading.current = false;
        })
      })
      .catch(err => {
        console.error(err);
        isLoading.current = false;
        console.log(page);
        setIsError(true);
      });
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
        {isLoading.current && <Text>Loading...</Text>}
        
        <FlatList 
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(e, index) => e ? String(e.id) : String(index)}
        renderItem={(e) => <PokemonCard pok={e.item} />}
        onEndReached={()=> setPage(prev => prev + 1)}
        onEndReachedThreshold={0.4}
        refreshing={isLoading.current}
      />    
        {/* {page > 0 && (
          <Button
            title="Página anterior"
            onPress={() => setPage(prev => prev - 1)}

          />
        )}
        {page <= 60 && (
          <Button
            title="Siguiente Página"
            onPress={() => setPage(prev => prev + 1)}
          />
        )} */}
      </View>
    </SafeAreaView>
  );
};

export default Pokedex;

const styles = StyleSheet.create({
  main:{
    marginBottom:60,
    paddingHorizontal: 20,
  },
  botones:{
    marginHorizontal:20,
    margin:10,
  }
})