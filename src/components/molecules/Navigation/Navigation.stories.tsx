import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Navigation, { TLinkType } from "./Navigation";

export default {
  component: Navigation,
  title: "Molecules/Navigation",
  decorators: [withDesign],
} as ComponentMeta<typeof Navigation>;

const navigationLinks: TLinkType[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const horizontalNavigation = Template.bind({});
horizontalNavigation.args = {
  direction: "horizontal",
  links: navigationLinks,
};

export const verticalNavigation = Template.bind({});
verticalNavigation.args = {
  direction: "vertical",
  links: navigationLinks,
};
