import React, { useContext, createContext } from 'react';
import { AuthContext } from '../providers/Auth';
import { SignIn } from '../pages/SignIn';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';

const Tab = createMaterialBottomTabNavigator();

export const MainRouter = () => {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return <SignIn />;
  }

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
