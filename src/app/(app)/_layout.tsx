import { Redirect, Stack } from 'expo-router';
import { useSession } from '@/contexts/authSession';
import { Text } from 'react-native';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/auth';
import { User } from '@/interfaces/User.interface';
import { jwtDecode } from 'jwt-decode';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext não foi fornecido corretamente.');
  }

  const { setUser, setToken } = authContext;

  useEffect(() => {
    if (session && typeof session === 'string') {
      const tokenDecoded = jwtDecode(session);
      setUser(tokenDecoded as User);
      setToken(session);
    }
  }, [session, setUser, setToken]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  };

  if (!session) {
    return <Redirect href="/sign-in" />;
  };

  return <Stack screenOptions={{ headerShown: false }} />;
}
