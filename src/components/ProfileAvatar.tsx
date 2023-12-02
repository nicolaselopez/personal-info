import React from 'react';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { View, Text } from './StyledComponents';

export interface ProfileAvatarProps {
  email: string;
  onPress: () => void;
}

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
