import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  component: Button,
  title: "Atoms/Button",
} as ComponentMeta<typeof Button>;

const buttonAction = (e?: React.MouseEvent<HTMLButtonElement>) => {
  e?.preventDefault();
  alert("Hello");
};

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
Default.args = {
  children: "Default text",
};

export const FunctionButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
FunctionButton.args = {
  children: "Function button",
  onClick: buttonAction,
};
