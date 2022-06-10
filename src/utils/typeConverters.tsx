import {PokedexType, PokemonDetailsType} from './types';

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
        response.sprites && response.sprites.front_default
          ? response.sprites.front_default
          : 'noimage',
    };
    return pokDetail;
  }
  return null;
};
