module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.tsx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "storybook-addon-designs",
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
};
