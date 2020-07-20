import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const ThemeContext = createContext({theme: 'dark'});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    async function loadStorageData() {
      const storagedTheme = await AsyncStorage.getItem('@RNTheme:theme');

      
      if(storagedTheme) {
        setTheme(storagedTheme);
      } else {
        await AsyncStorage.setItem('@RNTheme:theme', theme);
      }
      console.log('Storage: ' + storagedTheme);
    }

    loadStorageData();
  }, []);

  async function changeTheme() {
    await AsyncStorage.setItem('@RNTheme:theme', theme).then(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeContext;