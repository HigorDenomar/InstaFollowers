import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from '../contexts/auth';
import ThemeContext from '../contexts/ThemeContext';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import DarkTheme from '../themes/DarkTheme';
import LightTheme from '../themes/LightTheme';

import Loading from '../components/Loading';

export default function() {
  const { theme, loadTheme } = useContext(ThemeContext);
  const { signed, loading } = useContext(AuthContext);

  if(loading || loadTheme) {
    return <Loading />
  }

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      { signed ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}