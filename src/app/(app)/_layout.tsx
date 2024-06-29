import { Redirect, Stack } from 'expo-router';
import { useSession } from '@/contexts/authSession';
import { Text } from 'react-native';
import { useStorageState } from '@/utils/useStorageState';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/auth';
import { User } from '@/interfaces/User.interface';
import { jwtDecode } from 'jwt-decode';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  const [state, setValue] = useStorageState('session');
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext não foi fornecido corretamente.');
  }

  const { setUser, setToken } = authContext;

  useEffect(() => {
    if (typeof state[1] === 'string') {
      const tokenDecoded = jwtDecode(state[1]);
      setUser(tokenDecoded as User);
      setToken(state[1]);
    }
  }, [state, setUser]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
