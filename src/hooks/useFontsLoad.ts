import { useEffect, useState } from "react";
import * as Font from "expo-font";

const useFontsLoading = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      try {
        await Font.loadAsync({
          "montserrat-regular": require("../app/assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../app/assets/fonts/Montserrat-Bold.ttf"),
          "josefinSans-bold": require("../app/assets/fonts/JosefinSans-Bold.ttf"),
          "josefinSans-regular": require("../app/assets/fonts/JosefinSans-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadFontsAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
};

export default useFontsLoading;
