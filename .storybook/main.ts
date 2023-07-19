import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/components/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        less: {
          // Require your Less preprocessor here
          implementation: require('less'),
        },
      },
    },
    {
      name:"@storybook/preset-create-react-app",
      options:{
        craOverrides:{
          fileLoaderExcludes:["less"]
        }
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
