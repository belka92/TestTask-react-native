import React from "react";
import { Pressable } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme, useThemeMode } from "@rneui/themed";

import { useStyles } from "./MyButton.styles";

const MyButton = () => {
  const { styles } = useStyles();
  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();

  return (
    <Pressable
      style={styles.theme}
      onPress={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      <MaterialCommunityIcons
        name="theme-light-dark"
        size={24}
        color={theme.colors.themeIcon}
      />
    </Pressable>
  );
};

export default MyButton;
