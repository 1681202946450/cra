import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./index";
import "./tag.less";
import React from "react";

const meta = {
    title: "数据展示/Tag 标签",
    component: Tag,
    tags: ["autodocs"], 
    argTypes: { },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HalfSquare : Story = {
  name:'示例',
  args: {
      children:'文字',
      shape:'halfSquare',

  },
};

export const HalfRound : Story = {
  name:'特殊',
  render:()=>
     (
      <div className='margin10'>
        <Tag shape='halfSquare'>半方</Tag>
        <Tag shape='default' color='skin'>方形（皮肤色）</Tag>
        <Tag shape='halfRound'>棕色（个人中心）</Tag>
        <Tag shape='halfRound' color='gray'>灰色（详情页）</Tag>
      </div>
    )
};


export const Rectangle : Story = {
  name:'强标签',
  render:()=>
     (
      <div className='margin10'>
        <Tag shape='default' color='red' size='small' >方形（小）</Tag>
        <Tag shape='default' color='red' size='middle'>方形（中）</Tag>
        <Tag shape='default' color='red' size='large'>方形（大）</Tag> <br/>
        <Tag shape='default' color='orange' size='small'>方形（小）</Tag>
        <Tag shape='default' color='orange' size='middle'>方形（中）</Tag>
        <Tag shape='default' color='orange' size='large'>方形（大）</Tag>  <br/>
        <Tag shape='default' color='red' size='small' round>圆形（小）</Tag>
        <Tag shape='default' color='red' size='middle' round>圆形（中）</Tag>
        <Tag shape='default' color='red' size='large' round>圆形（大）</Tag> 
      </div>
    )
};

export const WeakTag : Story = {
  name:'弱标签',
  render:()=>
     (
      <div className='margin10'>
        <Tag shape='default' color='red' fill='outline'>红色</Tag>
        <Tag shape='default' color='orange' fill='outline'>橙色</Tag>
        <Tag shape='default' color='gray' fill='outline'>灰色</Tag>
        <br/>
        <Tag shape='default' color='red' fill='outline' round>红色</Tag>
        <Tag shape='default' color='orange' fill='outline' round>橙色</Tag>
        <Tag shape='default' color='gray' fill='outline' round>灰色</Tag>
      </div>
    )
};

export const Marketing : Story = {
  name:'营销标签',
  render:()=>
     (
      <div className='margin10' style={{background:'#f2f2f2'}}>
        <Tag shape='marketing' color='blue'>蓝色</Tag>
        <Tag shape='marketing' color='red'>红色</Tag>
        <Tag shape='marketing' color='yellow'>黄色</Tag>
        <Tag shape='marketing' color='purple'>紫色</Tag>
        <Tag shape='marketing' color='gray'>灰色</Tag>
      </div>
    )
};


export const State : Story = {
  name:'状态标签',
  render:()=>
     (
      <div className='margin10' >
        <Tag fill="transparent" color='green'>状态信息(绿色)</Tag>
        <Tag fill="transparent" color='red'>状态信息(红色)</Tag>
        <Tag fill="transparent" color='gray'>状态信息(灰色)</Tag>
        <Tag fill="transparent" color='orange'>状态信息(橙色)</Tag>
      </div>
    )
};