// Packages
import React, { ButtonHTMLAttributes } from "react";

type TButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  href?: string;
};

const Button: React.FC<TButtonProps> = ({ children, onClick, href }) => {
  if (!href) return <button onClick={onClick}>{children}</button>;
  return <a href={href}>{children}</a>;
};

export default Button;
