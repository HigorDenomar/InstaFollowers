import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

export default function Loading() {

  return (
    <SafeAreaView style={{
      backgroundColor: '#18191A',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size='large' color='#bbb' />
    </SafeAreaView>
  );
}