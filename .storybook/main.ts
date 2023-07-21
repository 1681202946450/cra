import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
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
  webpackFinal:async (config:any) =>{
    config.module.rules.push({
      test:/\.(js|jsx|ts|tsx)$/,
      enforce:'pre',
      use:['source-map-loader']
    })
    return config
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName:'文档'
  },
  staticDirs: ["../public"],
};
export default config;
