// Packages
import styled, { css } from "styled-components";

// Types
import { TButtonProps } from ".";

type TStyledProps = Pick<TButtonProps, "variantColor">;

export const StyledButton = styled.button<TStyledProps>`
  ${({ theme }) => css`
    display: inline-block;
    padding: 16px;

    background-color: ${theme.primary};
    border: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: white;
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
    outline: none;
    text-decoration: none;
    transition: all 0.15s ease;
    white-space: nowrap;
  `}
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;
