import { useTheme } from "@rneui/themed";
import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    description: {
      fontFamily:
        Platform.OS === "ios" ? "montserrat-regular" : "josefinSans-regular",
      color: theme.colors.primaryTextColor,
    },
  });

  return {
    styles,
  };
};
