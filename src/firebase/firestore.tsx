import firestore from '@react-native-firebase/firestore';

const db = firestore();

export const PostNewUser = (email: string) => {
  return db.collection('users').doc(email).set({email, coleccion: []});
};
