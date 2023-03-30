import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    theme: {
      width: 40,
      height: 40,
      padding: 10,
      backgroundColor: "#fbf9fa",
      borderRadius: 6,
    },
  });

  return {
    styles,
  };
};
