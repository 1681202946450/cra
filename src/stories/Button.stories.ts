import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "./Button";

const meta = {
  title: "基础组件/Button 按钮",
  // name:'按钮',
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
// export const Primary = {
  args: {
    color: "primary",
    children: "强按钮",
    size: "large",
  },
};
