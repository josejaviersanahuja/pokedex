import {Button, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPokemons} from '../../api/PokemonController';
import {PokedexType} from '../../utils/types';
import {pokedexConverter} from '../../utils/typeConverters';
import PokemonCard from './PokemonCard';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {};

const Pokedex = ({}: Props) => {
  const [pokemons, setPokemons] = useState<PokedexType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemons(page)
      .then(res => res.json())
      .then(response => {
        setPokemons(pokedexConverter(response.results));
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, [page]);

  if (isError) {
    return (
      <SafeAreaView>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {isLoading && <Text>Loading...</Text>}
        {pokemons.length > 0 &&
          pokemons.map((e, i) => (
            <PokemonCard key={e.name + i} name={e.name} url={e.url} />
          ))}
        {page > 0 && (
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pokedex;
