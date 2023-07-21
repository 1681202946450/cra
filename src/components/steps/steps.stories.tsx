import type { Meta, StoryObj } from "@storybook/react";
import Steps from "./index";
import Divider  from "../divider";
import React from "react";

const meta = {
    title: "数据展示/Steps 进度条",
    component: Steps,
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
            name:'横向',
    args: {},
    render:()=> {
        const {Step} = Steps
        return (
            <>
            <Steps current={1}>
                <Step title='标题1' description='描述' />
                <Step title='标题2' description='描述' />
                <Step title='标题3' description='描述' />
            </Steps>
        </>
        )
    }

}


export const Vertical: Story = {
            name:'纵向',
    args: {},
    render:()=> {
        const {Step} = Steps
        return (
            <>
            <Divider contentPosition='left'>成功</Divider>
            <Steps current={1} direction="vertical">
                <Step title='填写机构信息' status='finish' />
                <Step title='签约机构' status='process' />
                <Step title='关联服务区' status='wait' />
            </Steps>
        </>
        )
    }
   
}