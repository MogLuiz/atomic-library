import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Footer, { TFooterArrayType } from "./Footer";

export default {
  component: Footer,
  title: "Organisms/Footer",
  decorators: [withDesign],
} as ComponentMeta<typeof Footer>;

const FooterLinks = [
  {
    title: "Menu 1",
    items: [{ title: "Home", url: "/" }],
  },
  {
    title: "Menu 2",
    items: [{ title: "About", url: "/" }],
  },
  {
    title: "Menu 3",
    items: [{ title: "Contact", url: "/" }],
  },
];


const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: FooterLinks,
};
