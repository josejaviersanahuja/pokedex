import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  PokedexType,
  PokemonDetailsType,
  PokemonExtraDetailsType,
  Auth,
} from './types';

export const pokedexConverter = (result: any): PokedexType => {
  if (Array.isArray(result)) {
    const pokedex: PokedexType = result.map(e => {
      if (
        e.name &&
        e.url &&
        typeof e.name === 'string' &&
        typeof e.url === 'string'
      ) {
        return e;
      }
    });
    return pokedex;
  }
  return [];
};

export const PokemonDetailsConverter = (
  response: any,
): PokemonDetailsType | null => {
  if (response && response.id && response.order && response.name) {
    const pokDetail: PokemonDetailsType = {
      id: typeof response.id === 'number' ? response.id : 0,
      name: typeof response.name === 'string' ? response.name : 'noname',
      order: typeof response.order === 'number' ? response.order : 0,
      type: Array.isArray(response.types)
        ? response.types[0].type.name
        : 'notype',
      imageUrl:
        response?.sprites?.other.dream_world.front_default ||
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    };
    console.log(pokDetail.imageUrl);
    return pokDetail;
  }
  return null;
};

export const PokemonExtraDetailConverter = (
  response: any,
): PokemonExtraDetailsType => {
  const pokExtraDetails: PokemonExtraDetailsType = {
    types: [],
    stats: [],
  };
  if (response && response.types) {
    pokExtraDetails.types = Array.isArray(response.types)
      ? response.types.map((e: {type: {name: String; url: string}}) => e.type)
      : [];
  }
  if (response && response.stats && Array.isArray(response.stats)) {
    pokExtraDetails.stats = response.stats.map((e: any) => {
      return {base_stat: e.base_stat, name: e.stat.name};
    });
  }
  return pokExtraDetails;
};

export const FirebaseUserToAuthConverter = (
  user: FirebaseAuthTypes.User | null,
) => {
  if (!user) {
    return null;
  }
  const localUser: Auth = {
    email: user?.email ? user.email : '',
  };
  return localUser;
};

export const PokemonDetailsConverterFromDB = (
  response: any,
): PokemonDetailsType => {
  const pokDetail: PokemonDetailsType = {
    id: typeof response.id === 'number' ? response.id : 0,
    name: typeof response.name === 'string' ? response.name : 'noname',
    order: typeof response.order === 'number' ? response.order : 0,
    type: response.type || 'notype',
    imageUrl: response.imageUrl || 'noimage',
  };
  return pokDetail;
};
