import React, { useContext } from 'react';
import { View, Text } from '../components/StyledComponents';
import { AuthContext } from '../providers/Auth';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const Settings = () => {
  const { user, logout, isLoading } = useContext(AuthContext);
  const navigation = useNavigation(); // Initialize the navigation object
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title='Settings' />
        <Appbar.Action icon={isLoading ? 'loading' : 'logout'} onPress={logout} />
      </Appbar.Header>
      <View className='m-5'>
        <Text>User email:</Text>
        <Text>{user?.email}</Text>
      </View>
    </View>
  );
};
