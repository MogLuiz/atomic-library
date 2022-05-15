// Packages
import React, { ButtonHTMLAttributes } from "react";

type TButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
};

const Button: React.FC<TButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
