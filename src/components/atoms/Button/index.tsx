// Packages
import React from "react";

// Types
import { TVariantColor } from "./types";

// Styles
import * as S from "./styles";

export type TButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  href?: string;
  variantColor?: TVariantColor;
};

const Button: React.FC<TButtonProps> = ({
  children,
  onClick,
  href,
  variantColor = "primary",
}) => {
  if (!href)
    return (
      <S.StyledButton onClick={onClick} variantColor={variantColor}>
        {children}
      </S.StyledButton>
    );
  return (
    <S.StyledLinkButton as="a" href={href} variantColor={variantColor}>
      {children}
    </S.StyledLinkButton>
  );
};

export default Button;
