import { useTheme } from "@rneui/themed";
import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontFamily:
        Platform.OS === "ios" ? "montserrat-regular" : "josefinSans-regular",
      fontSize: 12,
      color: theme.colors.primaryTextColor,
    },
  });

  return {
    styles,
  };
};
