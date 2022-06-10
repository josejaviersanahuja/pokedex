import {View, Text} from 'react-native';
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
    <View>
      <Text>{name}</Text>
      {isLoading && <Text>Loading...</Text>}
      {pokemonDetail && (
        <Image
          source={{uri: pokemonDetail.imageUrl}}
          style={{width: 20, height: 20}}
        />
      )}
    </View>
  );
};

export default PokemonCard;
