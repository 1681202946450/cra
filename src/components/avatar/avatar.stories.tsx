import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Avatar from "./index";
const meta = {
  title: "基础组件/Avatar 头像",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatarMale: Story = {
  name: '默认头像-男',
  args: {
    fallback: 'male',
    style:{'--size':'40px'},
    src: '',
  },
};

export const DefaultAvatarFeMale: Story = {
  name: '默认头像-女',
  args: {
    fallback: 'female',
    src: '',
    style:{'--size':'40px'},
  },
};

export const DefaultAvatarLoaded: Story = {
  name: '头像-已上传',
  args: {
    fallback: 'female',
    src: 'http://investdev.fullgoal.com.cn:32288/workbench/assets/logo.png',
    style:{'--size':'40px'}
  },
};
