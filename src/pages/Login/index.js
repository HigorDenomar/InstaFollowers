import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          navigation.navigate('Main');
        }}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}