import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather as Icon } from '@expo/vector-icons';

import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{
            headerTintColor: '#fff',
            headerRight: () => (
              <Icon
                name="menu"
                color='#fff'
                size={28}
                style={{ paddingRight: 16 }}
              />
            ),
            headerStyle: {
              backgroundColor: '#2D2B2B',
              borderBottomWidth: 0,
            },
            headerLeft: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {

  return (
    <Drawer.Navigator
      drawerPosition='right'
      drawerStyle={{
        backgroundColor: '#000',
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          )
        }}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}