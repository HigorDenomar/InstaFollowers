import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import User from '../../components/UserCard';

import styles from './styles';

export default function() {
  const users = [ // VALORES FALSOS PRA PREENCHER O FLATLIST
    {_id: "aa"},
    {_id: "ab"},
    {_id: "ac"},
    {_id: "ad"},
    {_id: 'ae'},
    {_id: 'af'},
    {_id: 'ag'},
    {_id: 'ah'},
  ];
  
  return (
    <FlatList
      style={styles.container}
      data={users}
      keyExtractor={user => String(user._id)}
      showsVerticalScrollIndicator={false}
      renderItem={(user) => (
        <User
          key={user._id}
          imageUrl="https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=597&q=80"
          username="cleitorasta"
          name="Cleito Rasta"
        />
      )}
    />
  )
}