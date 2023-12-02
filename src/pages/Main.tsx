import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { AuthContext } from '../providers/Auth';
import { View, Text } from '../components/StyledComponents';
import { SignIn } from './SignIn';

export const Main = () => {
  const { user, logout, isLoading } = useContext(AuthContext);

  if (user === undefined) {
    return <SignIn />;
  }

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Button onPress={() => logout()} loading={isLoading}>
        Logout
      </Button>
      <Text>Main</Text>
      <Text>{user?.email}</Text>
    </View>
  );
};
