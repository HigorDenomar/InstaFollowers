import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

import NotFollowing from '../../pages/NotFollowing';
import Followers from '../../pages/Followers';
import Following from '../../pages/Following';

export default function TopTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator initialRouteName="NotFollowing" tabBarOptions={{
      tabStyle: {
        backgroundColor: colors.card,
      },
      labelStyle: {
        fontSize: 11,
      },
      activeTintColor: colors.text,
    }}>
      <Tab.Screen
        name="NotFollowing"
        component={NotFollowing}
        options={{
          title: '27\nNão seguidores',
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          title: '344\nSeguidores'
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          title: '194\nSeguindo'
        }}
      />
    </Tab.Navigator>
  );
}