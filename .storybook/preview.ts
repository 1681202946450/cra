import type { Preview } from "@storybook/react";
import "../src/global/theme-default.less";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // 侧边栏排序（待实现）
    // option: {
    //   storySort: {
    //     order: [
    //       '基础组件',
    //             ['Button 按钮'],
    //       '导航组件'
    //     ]
    //   }
    // }
  },
};

export default preview;
