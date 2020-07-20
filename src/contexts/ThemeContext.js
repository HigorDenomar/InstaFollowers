import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const ThemeContext = createContext({theme: 'dark'});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [loadTheme, setLoadTheme] = useState(true);

  async function loadStorageData() {
    const storagedTheme = await AsyncStorage.getItem('@RNTheme:theme');
    
    if(storagedTheme) {
      setTheme(storagedTheme);
    } else {
      await AsyncStorage.setItem('@RNTheme:theme', theme);
    }
    setLoadTheme(false);
  }
  
  async function changeTheme() {
    await AsyncStorage.setItem('@RNTheme:theme', theme === "dark" ? "light" : "dark");
    
    loadStorageData();
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, loadTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeContext;