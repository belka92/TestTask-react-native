import { IThemeColors } from "./types";

const lightColors: IThemeColors = {
  bgHome: "#7cbd1e",
  bgScreens: "#bceb3c",
  bgSection: "#fbf9fa",
  themeIcon: "#ffc93c",
  searchIcon: "#b3e55e",
  bgBook: "#e4f68f",
  bgWrapper: "#fbf9fa",
  primaryTitleColor: "#fbf9fa",
  primaryTextColor: "#000",
};

const darkColors: IThemeColors = {
  bgHome: "#233142",
  themeIcon: "#0b8457",
  searchIcon: "#0b8457",
  bgSection: "#29668b",
  bgScreens: "#233142",
  bgBook: "#233142",
  bgWrapper: "#29668b",
  primaryTextColor: "#fff",
  primaryTitleColor: "#fbf9fa",
};

export const lightTheme: IThemeColors = {
  ...lightColors,
};

export const darkTheme: IThemeColors = {
  ...darkColors,
};
