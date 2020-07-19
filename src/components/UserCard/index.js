import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function(props) {

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imageProfile}
          source={{ uri: props.imageUrl }}
        />
        <View>
          <Text style={styles.userName}>{props.username}</Text>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonRemove}>
        <Text style={styles.buttonRemoveText}>Remover</Text>
      </TouchableOpacity>
    </View>
  )
}