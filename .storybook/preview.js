import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';
import { theme } from "../styles/theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      // Provide your custom themes here
      light: theme,
      // dark: darkTheme,
    },
    defaultTheme: "light",
  }),
];
