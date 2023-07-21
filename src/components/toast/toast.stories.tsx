import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./index";
import Button from "../button";
import { UploadOutline } from "antd-mobile-icons";
import React from "react";

const meta = {
    title: "弹窗组件/Toast 轻提示",
    component: Toast as any,
    tags: ["autodocs"],
    argTypes: { },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const Default: Story = {
            name:'默认',
    args: {},
    render:()=> {
        return (
            <>
            <Button
            color="secondary"
            onClick={() =>
              Toast.show({
                icon: 'success',
                content: '保存成功',
              })
            }
          >
            成功
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              Toast.show({
                icon: 'fail',
                content: '名称已存在',
              })
            }}
          >
            失败
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}
          >
            加载中
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              Toast.show({
                content: '上传中',
                icon: <UploadOutline />,
              })
            }}
          >
            自定义图标
        </Button>
        </>
        )
    }

}
