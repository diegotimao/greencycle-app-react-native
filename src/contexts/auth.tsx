import React, { createContext, useState, ReactNode } from "react";

// Defina a interface para o contexto
interface AuthContextType {
  name: string,
  stateId: string;
  setStateId: (id: string) => void;
  user: {
    name: string,
    cpf: string,
    email: string,
    password: string,
    state: string,
    city: string
  };
  setUser: (user: {
    name: string,
    cpf: string,
    email: string,
    password: string,
    state: string,
    city: string
  }) => void
}

// Crie o contexto com um valor padrão
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Crie o AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [stateId, setStateId] = useState<string>("");
  const [user, setUser] = useState({
    name: '',
    cpf: '',
    email: '',
    password: '',
    state: '',
    city: ''
  });

  return (
    <AuthContext.Provider value={{
      name: user.name,
      stateId, 
      setStateId,
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
