import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./index";
import { MessageOutline } from "antd-mobile-icons";
import React from "react";

const meta = {
  title: "导航组件/NavBar 顶部导航",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal : Story = {
    name:'正常',
    args: {
        children:'标题',
        back:null
    },
};

export const Back : Story = {
    name:'返回',
    args: {
        children:'标题',
    },
};

export const BackIcon : Story = {
    name:'返回 + 图标',
    args: {
        children:'标题',
        right: <MessageOutline style={{fontSize:20}}/>
    },
};