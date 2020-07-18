import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

export default function Login({ navigation }) {
  const [viewPassword, setViewPassword] = useState(false);

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appName} >InstaFollowers</Text>

      <View>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#bbb" />
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário..."
            placeholderTextColor="#999"
            autoCompleteType="username"
            returnKeyType="next"
            onSubmitEditing={() => this.password.focus()}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#bbb" />
          <TextInput
            style={styles.input}
            ref={(input) => this.password = input}
            placeholder="Senha..."
            placeholderTextColor="#999"
            autoCompleteType="password"
            returnKeyType="done"
            onSubmitEditing={navigateToHome}
            secureTextEntry={viewPassword ? false : true}
          />
          { viewPassword ?
            <Icon
              name="eye-off"
              size={20}
              color="#bbb"
              onPress={() => setViewPassword(!viewPassword)}
            />
            :
            <Icon
              name="eye"
              size={20}
              color="#bbb"
              onPress={() => setViewPassword(!viewPassword)}
            />
          }
        </View>
        
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={navigateToHome}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}