import React, { FC } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'

const classPrefix = `fgdm-tag`


export type TagProps = {
  color?:
    | 'red'
    | 'skin'
    | 'gray'
    | 'warning'
    | 'danger'
    | (string & {})
  fill?: 'solid' | 'outline' | 'transparent'
  round?: boolean
  shape?:'default' | 'halfSquare' | 'halfRound' | 'round' | 'text' | 'marketing'
  size?:'small' | 'middle' | 'large'
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  children?: React.ReactNode
} & NativeProps<
  '--border-color' | '--background-color' | '--text-color' | '--border-radius'
>

const defaultProps = {
  color: 'default',
  fill: 'solid',
  round: false,
}

export const Tag: FC<TagProps> = p => {
  const props = mergeProps(defaultProps, p)
  // const color = colorRecord[props.color] ?? props.color

  // const style: CSSProperties & {
  //   '--border-color': string
  //   '--text-color': string
  //   '--background-color': string
  // } = {
  //   '--border-color': color,
  //   '--text-color': props.fill === 'outline' ? color : '#ffffff',
  //   '--background-color': props.fill === 'outline' ? 'transparent' : color,
  // }
  return withNativeProps(
    props,
    <span
      // style={style}
      onClick={props.onClick}
      className={classNames(classPrefix, 
        props.shape ? `${classPrefix}-${props.shape}` : null,
        props.color ? `${classPrefix}-${props.color}` : null,
        props.size ? `${classPrefix}-${props.size}` : null,
        props.fill ? `${classPrefix}-${props.fill}` : null,
        props.shape && props.color ? `${classPrefix}-${props.shape}-${props.color}` : null,
        props.fill === 'transparent' && props.color ? `${classPrefix}-${props.fill}-${props.color}` : null,
        { 
          [`${classPrefix}-round`]: props.round,
          [`${classPrefix}-halfRound-gray`]: props.color === "gray" && props.shape === 'halfRound',
        }
      )}
    >
      {props.children}
    </span>
  )
}
