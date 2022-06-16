import auth from '@react-native-firebase/auth';
import {Dispatch} from 'react';
import {FirebaseUserToAuthConverter} from '../utils/typeConverters';
import {Auth, User} from '../utils/types';
import { GetUser } from './firestore';

export const signup = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const OnAuthStateChange = (setAuth: Dispatch<Auth | null>, setCurrentUser: Dispatch<User | null>) => {
  return auth().onAuthStateChanged(user => {
    setAuth(FirebaseUserToAuthConverter(user));
    GetUser(user?.email === undefined ? null: user?.email, setCurrentUser)
  });
};

export const logout = () => {
  return auth().signOut();
};

export const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};
