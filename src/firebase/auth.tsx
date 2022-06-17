import auth from '@react-native-firebase/auth';
import {Dispatch} from 'react';
import {FirebaseUserToAuthConverter} from '../utils/typeConverters';
import {Auth} from '../utils/types';

export const signup = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const OnAuthStateChange = (setAuth: Dispatch<Auth | null>) => {
  return auth().onAuthStateChanged(user => {
    setAuth(FirebaseUserToAuthConverter(user));
  });
};

export const logout = () => {
  return auth().signOut();
};

export const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};
