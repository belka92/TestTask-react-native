import { useTheme } from "@rneui/themed";
import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      paddingHorizontal: 10,
      backgroundColor: theme.colors.bgHome,
    },
    header: {
      width: "100%",
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    title: {
      fontSize: 20,
      paddingVertical: 10,
      fontFamily:
        Platform.OS === "ios" ? "montserrat-bold" : "josefinSans-bold",
      color: theme.colors.primaryTitleColor,
    },
    content: {
      height: 165,
      borderRadius: 6,
      marginBottom: 15,
      flexDirection: "row",
      backgroundColor: theme.colors.bgSection,
    },
    image: {
      width: 70,
      margin: 10,
      height: 100,
      borderRadius: 6,
      resizeMode: "cover",
    },
  });

  return {
    styles,
  };
};
