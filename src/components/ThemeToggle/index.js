import React, { useContext } from "react";
import {
  View,
  Text,
  Switch,
} from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import ThemeContext from "../../contexts/ThemeContext";
import styles from './styles';

const ThemeToggler = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { colors } = useTheme();

  async function handleTheme() {
    await changeTheme();
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Icon name="moon" color={colors.text} size={28} />
        <Text style={[styles.title, { color: colors.text }]}>Modo escuro</Text>
      </View>

      <Switch
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        value={theme === "dark" ? true : false}
        onValueChange={handleTheme}
      />
    </View>
  );
}

export default ThemeToggler;