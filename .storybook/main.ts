import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-themes",
    "@storybook/themes",
    "@chromatic-com/storybook",
  ],
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};

export default config;
