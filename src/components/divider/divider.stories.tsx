import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./index";
import React from "react";

const meta = {
  title: "基础组件/Divider 分割线",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal : Story = {
    name:'横线',
    args: {
        direction:'horizontal'
    },
};

export const Vertical : Story = {
    name:'竖线',
    args: {
        direction:'vertical'
    },
};

export const Text : Story = {
    name:'文字信息',
    args: {
        direction:'horizontal',
        children:'文字信息',
        style:{color:'#4c76cf', textDecoration:'underline'}
    },
};
