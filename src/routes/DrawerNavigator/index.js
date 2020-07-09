import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/Feather';

import Home from '../../pages/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return(
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerPosition="right"
      drawerType="slide"
      overlayColor="transparent"
      initialRouteName="Home"
      drawerStyle={{
        width: '65%',
        backgroundColor: '#121212',
      }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#eee",
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
      <DrawerItem
        label="Sair"
        icon={({color, size}) => (
          <Icon name="log-out" color={color} size={size} />
        )}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </DrawerContentScrollView>
  );
}