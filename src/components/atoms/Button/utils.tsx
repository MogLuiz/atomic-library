// Assets
import {
  FiPlus,
  FiX,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

// Type
import { TIcon } from "./types";

const IconsOptions = {
  bag: FiShoppingBag,
  cart: FiShoppingCart,
  plus: FiPlus,
  user: FiUser,
  x: FiX,
};

export const renderIcon = (icon: TIcon) => {
  const Icon = IconsOptions[icon];
  return (
    <span className="button__icon">
      <Icon />
    </span>
  );
};
