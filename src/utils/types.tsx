import {Dispatch} from 'react';

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

export type PokemonExtraDetailsType = {
  types: {name: string; url: string}[];
  stats: {name: string; base_stat: number}[];
};

export type Auth = {
  email: string;
};

export type User = {
  email: string;
  favoritos: PokemonDetailsType[];
};

export type AuthContextType = {
  auth: Auth | null;
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null>;
  setRefresh: Dispatch<(v: boolean) => boolean>;
};
