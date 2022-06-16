import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {OnAuthStateChange} from '../firebase/auth';
import {Auth, User} from '../utils/types';

const AuthContext = createContext<{auth: Auth | null}>({
  auth: null,
});

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactElement;
};

export function AuthProvider({children}: Props) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsuscribe = OnAuthStateChange(setAuth, setCurrentUser);

    return () => {
      unsuscribe();
    };
  }, []);

  console.log(currentUser);
  
  const valueContext = {
    auth,
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
