import "@rneui/themed";
import {
  IThemeColors,
} from "./src/app/components/shared/ThemeProvider/types";

declare module "@rneui/themed" {
  export interface Theme {
    colors: IThemeColors;
  }

  export interface IComponentTheme<T> {
    (props: { colors: IThemeColors }): T;
  }
}
