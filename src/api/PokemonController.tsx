import {API_URL} from '../utils/constants';
import {PokemonDetailsConverter} from '../utils/typeConverters';
import {PokemonDetailsType} from '../utils/types';

export const getPokemons = (page: number) => {
  const url = API_URL + `/pokemon?limit=20&offset=${page * 20}`;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return fetch(url, requestOptions);
};

export const getPokemonDetail = (
  url: string,
): Promise<PokemonDetailsType | null> => {
  return fetch(url)
    .then(res => res.json())
    .then(PokemonDetailsConverter);
};

export const getPokemonExtraDetails = (id: number): Promise<any> => {
  const url = API_URL + `pokemon/${id}`;

  return fetch(url).then(res => res.json());
};
