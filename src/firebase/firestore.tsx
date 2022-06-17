import firestore from '@react-native-firebase/firestore';
import {Dispatch} from 'react';
import {PokemonDetailsConverterFromDB} from '../utils/typeConverters';
import {PokemonDetailsType, User} from '../utils/types';

const db = firestore();

export const PostNewUser = (email: string) => {
  return db.collection('users').doc(email).set({email, coleccion: []});
};

export const SyncUser = (email: string, setUser: Dispatch<User | null>) => {
  return db
    .collection('users')
    .doc(email)
    .onSnapshot(value => {
      if (value.exists) {
        value.ref
          .collection('coleccion')
          .orderBy('id')
          .get()
          .then(querySnapShot => {
            const favoritos: PokemonDetailsType[] = [];
            querySnapShot.forEach(doc => {
              favoritos.push(PokemonDetailsConverterFromDB(doc.data()));
            });
            const user: User = {
              email: value.data()?.email || '',
              favoritos,
            };
            setUser(user);
          });
      } else {
        console.error('No data for this email');
      }
    });
};

export const addPokFav = (
  email: string | undefined,
  pok: PokemonDetailsType,
) => {
  if (email === undefined) {
    return;
  }

  const subCollectionRef = db
    .collection('users')
    .doc(email)
    .collection('coleccion');

  return subCollectionRef.doc(pok.name).set(pok);
};

export const removePokFav = (email: string | undefined, name: string) => {
  if (email === undefined) {
    return;
  }

  const subCollectionRef = db
    .collection('users')
    .doc(email)
    .collection('coleccion');

  return subCollectionRef.doc(name).delete();
};
