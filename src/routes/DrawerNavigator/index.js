import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';

import Home from '../../pages/Home';
import ThemeToggle from '../../components/ThemeToggle';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { colors } = useTheme();
  return(
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerPosition="right"
      drawerType="slide"
      overlayColor="transparent"
      initialRouteName="Home"
      drawerStyle={{
        width: '65%',
        backgroundColor: colors.drawer,
      }}
      drawerContentOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: colors.placeholder,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawer(props, { navigation }) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <ThemeToggle />

      <DrawerItem
        label="Sair"
        icon={({color, size}) => (
          <Icon name="log-out" color={color} size={size} />
        )}
        onPress={() => {
        //  navigation.navigate('Login');
        }}
      />
    </DrawerContentScrollView>
  );
}