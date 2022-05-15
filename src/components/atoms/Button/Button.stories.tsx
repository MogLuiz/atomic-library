import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  component: Button,
  title: "Atoms/Button",
} as ComponentMeta<typeof Button>;


export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Default.args = {
 children: "Default text"
};
