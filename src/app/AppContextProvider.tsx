import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";

import {
  lightTheme,
  darkTheme,
} from "./components/shared/ThemeProvider/ThemeProvider";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const myTheme = createTheme({
    lightColors: lightTheme,
    darkColors: darkTheme,
  });

  return (
    <>
      <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
    </>
  );
};

export default AppContextProvider;
