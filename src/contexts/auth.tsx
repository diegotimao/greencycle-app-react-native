import React, { createContext, useState, ReactNode } from "react";
import { User } from '@/interfaces/User.interface';

// Defina a interface para o contexto
interface AuthContextType {
  stateId: string;
  setStateId: (id: string) => void;
  token: string,
  setToken: (token: string) => void,
  user: User | null,
  setUser: (user: User | null) => void,
}

// Crie o contexto com um valor padrão
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Crie o AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [stateId, setStateId] = useState<string>("");
  const [token, setToken] = useState('');

  const [user, setUser] = useState<User | null>(null); // Permitir User ou null

  return (
    <AuthContext.Provider value={{
      stateId, 
      setStateId,
      user,
      setUser,
      token,
      setToken
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
