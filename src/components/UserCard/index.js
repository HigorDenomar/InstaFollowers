import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';

export default function(props) {
  const { colors } = useTheme();

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imageProfile}
          source={{ uri: props.imageUrl }}
        />
        <View>
          <Text style={[styles.userName, { color: colors.text }]}>{props.username}</Text>
          <Text style={{ color: colors.placeholder }}>{props.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.buttonRemove, { borderColor: colors.text }]}>
        <Text style={[styles.buttonRemoveText, { color: colors.text }]}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}