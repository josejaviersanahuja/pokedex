export type PokedexType = {
  name: string;
  url: string;
}[];

export type PokemonDetailsType = {
  id: number;
  name: string;
  type: string;
  order: number;
  imageUrl: string;
};

export type ScreenTag = {
  Pokemon: PokemonDetailsType | undefined;
};
