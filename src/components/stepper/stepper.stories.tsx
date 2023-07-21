import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./index";
import React from "react";

const meta = {
    title: "表单组件/Stepper 步进器",
    component: Stepper,
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
            name:'默认',
    args: {},
    render:()=> {
        return (
            <>
            <Stepper
                defaultValue={1}
                onChange={value => {
                    console.log(value)
                }}
            />
        </>
        )
    }

}
