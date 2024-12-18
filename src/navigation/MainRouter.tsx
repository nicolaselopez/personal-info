import React, { useContext, createContext } from 'react';
import { AuthContext } from '../providers/Auth';
import { SignIn } from '../pages/SignIn';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';

const Tab = createMaterialBottomTabNavigator();

// MainRouter component to handle the main navigation of the app
export const MainRouter = () => {
  // Use AuthContext to get the current user
  const { user } = useContext(AuthContext);

  // If user is not logged in, show the SignIn screen
  if (user === undefined) {
    return <SignIn />;
  }

  // If user is logged in, show the Home and Settings tabs
  return (
    <Tab.Navigator backBehavior='firstRoute'>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: 'cog',
        }}
      />
    </Tab.Navigator>
  );
};
