import { useTheme } from "@rneui/themed";
import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      paddingTop: 20,
      paddingBottom: 30,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.bgScreens,
    },
    book: {
      width: "100%",
      borderRadius: 6,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: theme.colors.bgWrapper,
    },
    image: {
      width: 70,
      margin: 10,
      height: 100,
      borderRadius: 6,
      resizeMode: "cover",
    },
    description: {
      width: Platform.OS === "ios" ? 260 : 300,
    },
  });

  return {
    styles,
  };
};
