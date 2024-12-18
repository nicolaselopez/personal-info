import { useState } from 'react';
import { Switch } from 'react-native-paper';
import { Text, View, TextInput } from './StyledComponents';

// ProfileForm component to display form inputs for user profile
export const ProfileForm = () => {
  // State management for the switch
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View className='mt-5 mb-5'>
      <Text className='text-xl mb-2'>Example Form Inputs</Text>
      <TextInput className='mb-2' label='First Name' />
      <TextInput className='mb-2' label='Last Name' />
      <Switch value={isEnabled} onValueChange={() => setIsEnabled((prev) => !prev)} />
    </View>
  );
};
