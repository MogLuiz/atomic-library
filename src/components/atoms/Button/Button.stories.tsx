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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default text",
};

export const FunctionButton = Template.bind({});
FunctionButton.args = {
  children: "Function button",
  onClick: buttonAction,
  variantColor: "secondary",
};

export const LinkedButton = Template.bind({});
LinkedButton.args = {
  children: "Linked Button",
  href: "/route",
  variantColor: "tertiary",
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: "Icon Button",
  icon: "user",
};
