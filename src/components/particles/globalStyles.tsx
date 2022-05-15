import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      body {
        background-color: ${theme.primary};
      }
    `}
`;

export default GlobalStyles;
