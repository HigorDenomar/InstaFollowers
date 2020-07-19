import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import ThemeContext from '../context/ThemeContext';

import Login from '../pages/Login';
import DrawerNavigator from './DrawerNavigator';
import DarkTheme from '../themes/DarkTheme';
import LightTheme from '../themes/LightTheme';

const Stack = createStackNavigator();

export default function Routes() {
  const theme = useContext(ThemeContext)[0];
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      >
        <Stack.Screen
          component={Login}
          options={{
            headerShown: false,
          }}
          name="Login"
        />
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}