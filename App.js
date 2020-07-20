import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StatusBar barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}