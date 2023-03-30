import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 40,
      padding: 10,
      width: Platform.OS === "ios" ? 290 : 320,
      borderRadius: 6,
      backgroundColor: "#fbf9fa",
    },
    icon: {
      position: "absolute",
      right: 10,
    },
  });

  return {
    styles,
  };
};
