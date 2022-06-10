import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PokemonDetailsConverter} from '../../utils/typeConverters';
import {PokemonDetailsType} from '../../utils/types';
import {Image} from 'react-native';

type Props = {
  name: string;
  url: string;
};

const PokemonCard = ({name, url}: Props) => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailsType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(response => {
        setPokemonDetail(PokemonDetailsConverter(response));
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.cardFrame}>
      {isLoading ? <Text>Loading...</Text> : <Text>#{`${pokemonDetail?.id}`.padStart(3,"0")}</Text>}
      {pokemonDetail && (
        <Image
          source={{uri: pokemonDetail.imageUrl}}
          style={styles.pokemonImage}
        />
      )}
      {!isLoading && <Text> {name}</Text>}
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