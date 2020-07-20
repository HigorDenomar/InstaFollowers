import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

const AuthContext = createContext({ signed: true });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');

      if(storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.setItem('@RNAuth:user', '');
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;