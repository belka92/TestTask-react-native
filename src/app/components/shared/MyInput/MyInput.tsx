import React, { useState } from "react";
import { View, TextInput } from "react-native";

import { useStyles } from "./MyInput.styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";

const MyInput = () => {
  const { styles } = useStyles();
  const [text, setText] = useState("");
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Search books..."
      />
      <Ionicons
        name="md-search-circle"
        size={35}
        color={theme.colors.searchIcon}
        style={styles.icon}
      />
    </View>
  );
};

export default MyInput;
