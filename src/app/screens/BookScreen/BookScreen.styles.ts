import { useTheme } from "@rneui/themed";
import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      paddingHorizontal: 10,
      backgroundColor: theme.colors.bgBook,
    },
    title: {
      fontFamily:
        Platform.OS === "ios" ? "montserrat-bold" : "josefinSans-bold",
      fontSize: 20,
      paddingVertical: 15,
      color: theme.colors.primaryTextColor,
    },
    description: {
      width: "100%",
    },
    image: {
      borderRadius: 6,
      alignItems: "center",
    },
    author: {
      fontFamily:
        Platform.OS === "ios" ? "montserrat-bold" : "josefinSans-bold",
      fontSize: 14,
      paddingTop: 10,
      color: theme.colors.primaryTextColor,
    },
    genre: {
      fontFamily:
        Platform.OS === "ios" ? "montserrat-regular" : "josefinSans-regular",
      fontSize: 16,
      color: theme.colors.primaryTextColor,
    },
  });

  return {
    styles,
  };
};
