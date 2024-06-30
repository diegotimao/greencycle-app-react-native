import React, { createContext, useState, ReactNode, useRef, useEffect } from "react";
import { User } from '@/interfaces/User.interface';
import { useStorageState } from "@/utils/useStorageState";
import { jwtDecode } from "jwt-decode"; // Corrigido para importar corretamente

interface Conta {
  points: number;
  quilos: number;
}

interface AuthContextType {
  stateId: string;
  setStateId: (id: string) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  conta: Conta | null | undefined;
  setConta: (conta: Conta | null | undefined) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [stateId, setStateId] = useState<string>("");
  const [[isLoading, token], setToken] = useStorageState('session'); // Usando useStorageState para gerenciar o token
  const [user, setUser] = useState<User | null>(null);
  const [conta, setConta] = useState<Conta | null | undefined>(undefined);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (token) {
      try {
        const decodedUser = jwtDecode<User>(token);
        setUser(decodedUser);
      } catch (error) {
        console.error('Invalid token');
        setToken(null);
      }
    }
  }, [token, setToken]);

  useEffect(() => {
    if (user && token) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://192.168.1.111:8080/user/points/${user.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, // Certifique-se de que o token seja uma string
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setConta(prevData => (JSON.stringify(prevData) !== JSON.stringify(data) ? data : prevData));
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };

      fetchData();
      intervalRef.current = setInterval(fetchData, 50000);
      console.log('Interval set up to fetch data every 50000ms');
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log('Interval cleared');
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log('Cleanup on unmount or dependency change');
      }
    };
  }, [user, token]);

  return (
    <AuthContext.Provider value={{
      stateId, 
      setStateId,
      user,
      setUser,
      token,
      setToken,
      conta,
      setConta,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
