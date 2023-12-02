import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/providers/Auth';
import { Main } from './src/pages/Main';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </AuthProvider>
  );
}
