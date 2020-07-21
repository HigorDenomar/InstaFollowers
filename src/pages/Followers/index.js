import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';

export default function Followers() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Seguidores</Text>
    </View>
  );
}