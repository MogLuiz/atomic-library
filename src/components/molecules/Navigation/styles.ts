import styled, { css } from "styled-components";
import { TNavigationProps } from "./Navigation";

type TWrapperProps = Pick<TNavigationProps, "direction">;

const NavigationModifiers = {
  horizontal: () => css`
    a + a {
      margin-left: 24px;
    }
  `,
  vertical: () => css`
    flex-direction: column;
    a + a {
      margin-top: 24px;
    }
  `,
};

export const Wrapper = styled.nav<TWrapperProps>`
  ${({ direction }) => css`
    display: flex;
    ${!!direction && NavigationModifiers[direction]}
  `}
`;
