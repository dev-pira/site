module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-themes",
    "@storybook/themes",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  docs: {
    autodocs: true,
  },
};
