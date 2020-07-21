import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';

const AppStack = createStackNavigator();

export default function Routes() {
  
  return (
    <AppStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}
    >
      <AppStack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}