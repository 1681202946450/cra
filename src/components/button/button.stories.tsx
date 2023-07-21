import type { Meta, StoryObj } from "@storybook/react";
import  Button  from "./index";
import { AddOutline } from "antd-mobile-icons";
import React from "react";
const meta = {
  title: "基础组件/Button 按钮",
  component: Button,
  tags: ["autodocs"],
  argTypes: { },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Strong: Story = {
    name:'强按钮',
    args: {
        children: "按钮",
        color:'strong',
        size:'max'
    },
};

export const Weak: Story = {
  name:'弱按钮',
  args: {
    children: "按钮",
    color:'weak',
  },
};

export const Secondary: Story = {
  name:'次按钮',
  args: {
    children: "按钮",
    color:'secondary',
  }
};

export const IconButton: Story = {
  name:'图标按钮',
  args: {
    children: <div><AddOutline /> 添加</div>,
    color:'strong',
    size:'max'
  },
};

export const GradientButton: Story = {
  name:'渐变按钮',
  args: {
    children: "按钮",
    color:'gradient',
  },
};


export const WhiteButton: Story = {
  name:'白色按钮',
  args: {
    children: "白色按钮",
    color:'white',
  },
};