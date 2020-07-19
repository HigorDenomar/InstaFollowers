import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../pages/Login';

import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={DarkTheme}>
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