import firestore from '@react-native-firebase/firestore';
import { Dispatch } from 'react';
import { FirestoreUserToUser } from '../utils/typeConverters';
import { User } from '../utils/types';

const db = firestore();

export const PostNewUser = (email: string) => {
  return db.collection('users').doc(email).set({email, coleccion: []});
};

export const GetUser = (email: string | null, setCurrentUser: Dispatch<User | null>) => {
  if (!email) return null
  return db.collection('users').doc(email).get()
    .then((doc) => {
      if (doc.exists) {
          setCurrentUser(FirestoreUserToUser(doc))
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    })
}