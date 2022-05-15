// Packages
import React from "react";

type TButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<TButtonProps> = ({ children }) => (
  <button>{children}</button>
);

export default Button;
