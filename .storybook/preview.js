import { ThemeProvider, createGlobalStyle, css } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const defaultTheme = {
  primary: "rebeccapurple",
};

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      body {
        background-color: ${theme.primary};
      }
    `}
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
