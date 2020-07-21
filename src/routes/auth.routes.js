import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../pages/Login';

const AuthStack = createStackNavigator();

export default function Routes() {

  return (
    <AuthStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}
    >
      <AuthStack.Screen
        component={Login}
        options={{
          headerShown: false,
        }}
        name="Login"
      />
    </AuthStack.Navigator>
  );
}