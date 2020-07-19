import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import ThemeContext from './src/context/ThemeContext';

import Routes from './src/routes';

export default function App() {
  const themeHook = useState('dark');
  return (
    <ThemeContext.Provider value={themeHook}>
      <StatusBar barStyle='light-content' />
      <Routes />
    </ThemeContext.Provider>
  );
}