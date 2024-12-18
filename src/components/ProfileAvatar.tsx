import React from 'react';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { View, Text } from './StyledComponents';

// Interface for the props of the ProfileAvatar component
export interface ProfileAvatarProps {
  email: string; // Email of the user
  onPress: () => void; // Function to handle press event
}

// ProfileAvatar component to display user's avatar and email
export const ProfileAvatar = ({ email, onPress }: ProfileAvatarProps) => {
  return (
    <TouchableRipple onPress={onPress}>
      <View className='flex flex-row'>
        <Avatar.Icon size={48} icon='account' />
        <View className='ml-2 flex justify-center'>
          <Text className='text-lg'>User email</Text>
          <Text>{email}</Text>
        </View>
      </View>
    </TouchableRipple>
  );
};
