import React, {createContext, ReactElement, useState} from 'react';
import { User } from '../utils/types';

export const AuthContext = createContext<{user: User | undefined}>({
  user: undefined,
});

type Props = {
  children: ReactElement;
}

export function AuthProvider({children}: Props) {
  const [auth, setAuth] = useState<User | undefined>(undefined);

  const valueContext= {
    user: auth,
  }

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}