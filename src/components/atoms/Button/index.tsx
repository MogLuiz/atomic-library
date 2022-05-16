// Packages
import React from "react";

// Utils
import { renderIcon } from "./utils";

// Types
import { TVariantColor, TIcon } from "./types";

// Styles
import * as S from "./styles";

export type TButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  href?: string;
  variantColor?: TVariantColor;
  icon?: TIcon;
};

const Button: React.FC<TButtonProps> = ({
  children,
  onClick,
  href,
  variantColor = "primary",
  icon,
}) => {
  if (!href)
    return (
      <S.StyledButton onClick={onClick} variantColor={variantColor}>
        {icon && renderIcon(icon)}
        {children}
      </S.StyledButton>
    );
  return (
    <S.StyledLinkButton as="a" href={href} variantColor={variantColor}>
      {icon && renderIcon(icon)}
      {children}
    </S.StyledLinkButton>
  );
};

export default Button;
