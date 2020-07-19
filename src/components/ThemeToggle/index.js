import React, { useContext } from "react";
import {
  View,
  Text,
  Switch,
} from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import ThemeContext from "../../context/ThemeContext";
import styles from './styles';

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const { colors } = useTheme();

  function handleTheme() {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  return (
    <View
      style={ styles.container }
      onPress={handleTheme}
    >
      <View style={styles.titleContainer}>
        <Icon name="moon" color={ colors.text } size={28} />
        <Text style={[ styles.title, { color: colors.text }]}>Modo escuro</Text>
      </View>

      <Switch
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
        value={themeMode === "dark" ? true : false}
        onValueChange={handleTheme}
      />
    </View>
  );
}

export default ThemeToggler;