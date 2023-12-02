import React from 'react';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { AuthProvider } from './src/providers/Auth';
import { MainRouter } from './src/navigation/MainRouter';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

export default function App() {
  const scheme = useColorScheme();

  const darkTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1A1A1A',
      accent: '#FAFAFA',
    },
  };

  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider theme={scheme === 'dark' ? darkTheme : undefined}>
          <MainRouter />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
