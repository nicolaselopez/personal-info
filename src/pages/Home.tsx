import React, { useContext } from 'react';
import { Appbar, Snackbar } from 'react-native-paper';
import { AuthContext } from '../providers/Auth';
import { View, ScrollView } from '../components/StyledComponents';
import { ProfileAvatar } from '../components/ProfileAvatar';
import { ProfileForm } from '../components/ProfileForm';

// Home component to display the main screen of the app
export const Home = () => {
  // Use AuthContext to get the current user
  const { user } = useContext(AuthContext);

  // State management for the snackbar
  const [snackBarVisible, setSnackBarVisible] = React.useState(false);

  return (
    <View>
      <Appbar.Header mode='center-aligned'>
        <Appbar.Content title='PersonalInfo' />
      </Appbar.Header>
      <ScrollView>
        <View className='m-5'>
          <ProfileAvatar email={user?.email || ''} onPress={() => setSnackBarVisible(true)} />
          <ProfileForm />
        </View>
      </ScrollView>
      <Snackbar
        visible={snackBarVisible}
        onDismiss={() => setSnackBarVisible(false)}
        action={{
          label: 'Hide',
          onPress: () => setSnackBarVisible(false),
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};
