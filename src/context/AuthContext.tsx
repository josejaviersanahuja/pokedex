import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {OnAuthStateChange} from '../firebase/auth';
import {SyncUser} from '../firebase/firestore';
import {Auth, AuthContextType, User} from '../utils/types';

const AuthContext = createContext<AuthContextType>({
  auth: null,
  currentUser: null,
  setCurrentUser: () => {},
  setRefresh: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactElement;
};

export function AuthProvider({children}: Props) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [refresh, setRefresh] = useState<(v: boolean) => boolean>(() => false);

  useEffect(() => {
    const unsuscribe = OnAuthStateChange(setAuth);

    return () => {
      unsuscribe();
    };
  }, []);

  useEffect(() => {
    if (auth === null) {
      setCurrentUser(null);
      return;
    }
    const unsuscribe = SyncUser(auth.email, setCurrentUser);

    return () => {
      unsuscribe();
    };
  }, [auth, refresh]);

  const valueContext = {
    auth,
    currentUser,
    setCurrentUser,
    setRefresh,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
