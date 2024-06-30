import React, { useContext } from 'react';
import { useStorageState } from '@/utils/useStorageState';
import { AuthContext as AuthContextUser } from './auth';
import { jwtDecode } from 'jwt-decode';
import { User } from '@/interfaces/User.interface';

const AuthContext = React.createContext<{
  signIn: (key: string, token: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: (key: string, token: string) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const authContext = useContext(AuthContextUser);

  if (!authContext) {
    throw new Error('AuthContext não foi fornecido corretamente.');
  };

  const { setToken, setConta, setUser } = authContext;

  return (
    <AuthContext.Provider
      value={{
        signIn: (key: string, token: string) => {
          setSession(token);
          setToken(token);
          const decodedUser = jwtDecode(token);
          setUser(decodedUser as User);
        },
        signOut: () => {
          setToken('');
          setUser(null);
          setConta(null);
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
