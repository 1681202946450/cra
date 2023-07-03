import React from "react";
import "./button.css";
import { Button as AntButton } from "antd-mobile";
// import type { ButtonProps as AntButtonProps } from "antd-mobile";

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
  // props.color='strong'
  // console.log('props', props)
  const style = {  }
  if(props.color === 'strong') {
    style.backgroundColor = 'blue'
  }
  let className = ''
  if(props.color === 'strong') {
      className ='strong'
  }

  return <AntButton {...props}   className={className}/>;
};
