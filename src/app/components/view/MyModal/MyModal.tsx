import { View, Text } from "react-native";
import React from "react";
import { useStyles } from "./MyModal.styles";

const MyModal = () => {
  const { styles } = useStyles();

  return (
    <View>
      <Text>MyModal</Text>
    </View>
  );
};

export default MyModal;
