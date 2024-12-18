import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { View, Text } from '../components/StyledComponents';
import { AuthContext } from '../providers/Auth';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Settings component to display the settings screen of the app
export const Settings = () => {
  // Use AuthContext to get the current user and handle authentication
  const { user, logout, isLoading } = useContext(AuthContext);
  
  // Initialize the navigation object
  const navigation = useNavigation(); 
  
  return (
    <View>
      <Appbar.Header>
        {Platform.OS === 'ios' && (
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
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
