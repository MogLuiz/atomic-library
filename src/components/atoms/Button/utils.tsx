// Assets
import {
  FiPlus,
  FiX,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

export const IconsOptions = {
  bag: FiShoppingBag,
  cart: FiShoppingCart,
  plus: FiPlus,
  user: FiUser,
  x: FiX,
};

export const renderIcon = (icon: keyof typeof IconsOptions) => {
  const Icon = IconsOptions[icon];
  return (
    <span className="button__icon">
      <Icon />
    </span>
  );
};
