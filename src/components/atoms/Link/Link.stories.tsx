import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Link from "./Link";

export default {
  component: Link,
  title: "Atoms/Link",
  decorators: [withDesign],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Link",
};
