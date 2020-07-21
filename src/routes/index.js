import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthContext } from '../contexts/auth';
import { useThemeContext } from '../contexts/ThemeContext';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import DarkTheme from '../themes/DarkTheme';
import LightTheme from '../themes/LightTheme';

import Loading from '../components/Loading';

export default function() {
  const { theme, loadTheme } = useThemeContext();
  const { signed, loading } = useAuthContext();

  if(loading || loadTheme) {
    return <Loading />
  }

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      { signed ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}