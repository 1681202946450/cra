import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta = {
    title: "数据展示/Badge 角标",
    component: Badge,
    tags: ["autodocs"],
    argTypes: { },
  } satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Left: Story = {
    name:'文字',
    args: {
        bordered: false,
        content:'文字',
        orientation:'right',
        color:'fgRed'
        // position:'right',
        // bgColor:'red'
    },
};

export const Orange: Story = {
    name:'橙色',
    args: {
        bordered: false,
        content:'橙色',
        orientation:'left',
        color:'fgOrange',
    },
};

