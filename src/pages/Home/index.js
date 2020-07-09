import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>username</Text>
        <Icon
          name="menu"
          color='#fff'
          size={28}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>
      </View>
    </View>
  );
}