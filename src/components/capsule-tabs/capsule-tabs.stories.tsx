import type { Meta, StoryObj } from "@storybook/react";
import CapsuleTabs from "./index";
import React from "react";

const meta = {
    title: "弹窗组件/CapsuleTabs 胶囊选项卡",
    component: CapsuleTabs,
    tags: ["autodocs"],
    argTypes: { },
} satisfies Meta<typeof CapsuleTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
            name:'默认',
    args: {},
    render:()=> {
        return (
           <>
           <CapsuleTabs>
          <CapsuleTabs.Tab title='水果' key='fruits'>
            菠萝
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='动物' key='animals'>
            蚂蚁
          </CapsuleTabs.Tab>
        </CapsuleTabs>                              
           </>
         
     )
    }
}
