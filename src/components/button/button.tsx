import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import classNames from 'classnames'
import DotLoading from '../dot-loading'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { isPromise } from '../../utils/validate'

const classPrefix = `fgdm-button`

type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = {
  /** 按钮的颜色 */
  color?: 'white' | 'gradient' | 'secondary' | 'weak' | 'strong'
  // /** 填充模式 */
  // fill?: 'solid' | 'outline' | 'none'
  /** 按钮大小 */
  size?: 'mini'|'smaller'|'small'|'middleSmall'|'middleLarge'|'middle'|'large'|'larger'|'max'
  /** 是否是块级元素 */
  block?: boolean
  /** 是否处于加载状态，'auto' 模式会监听 onClick 的 Promise 状态自动更新 loading */
  loading?: boolean | 'auto'
  /** 加载状态下额外展示的文字 */
  loadingText?: string
  /** 加载状态下的 icon 图标 */
  loadingIcon?: React.ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 点击事件 */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void> | unknown
  /** 原生 button 元素的 type 属性 */
  type?: 'submit' | 'reset' | 'button'
  /** 按钮的形状 */
  shape?: 'default' | 'rounded' | 'rectangular'
  /** 按钮内容 */
  children?: React.ReactNode
} & Pick<
  NativeButtonProps,
  'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> &
  NativeProps<
    | '--text-color'
    | '--background-color'
    | '--border-radius'
    | '--border-width'
    | '--border-style'
    | '--border-color'
  >

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null
}

const defaultProps: ButtonProps = {
  color: 'strong',
  block: false,
  loading: false,
  loadingIcon: <DotLoading color='currentColor' />,
  type: 'button',
  shape: 'default',
  size: 'large',
}
/** 用于开始一个即时操作。 
 *  标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。
 */
export const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const [innerLoading, setInnerLoading] = useState(false)
  const nativeButtonRef = useRef<HTMLButtonElement>(null)
  const loading = props.loading === 'auto' ? innerLoading : props.loading
  const disabled = props.disabled || loading

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current
    },
  }))

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async e => {
    if (!props.onClick) return

    const promise = props.onClick(e)

    if (isPromise(promise)) {
      try {
        setInnerLoading(true)
        await promise
        setInnerLoading(false)
      } catch (e) {
        setInnerLoading(false)
        throw e
      }
    }
  }

  return withNativeProps(
    props,
    <button
      ref={nativeButtonRef}
      type={props.type}
      onClick={handleClick}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        props.size ? `${classPrefix}-${props.color}-${props.size}` : null,

        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          // [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          // [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: props.size === 'mini',
          [`${classPrefix}-smaller`]: props.size === 'smaller',
          [`${classPrefix}-small`]: props.size === 'small',
          [`${classPrefix}-middleSmall`]: props.size === 'middleSmall',
          [`${classPrefix}-middleLarge`]: props.size === 'middleLarge',
          [`${classPrefix}-middle`]: props.size === 'middle',
          [`${classPrefix}-large`]: props.size === 'large',
          [`${classPrefix}-larger`]: props.size === 'larger',
          [`${classPrefix}-max`]: props.size === 'max',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${props.shape}`
      )}
      disabled={disabled}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      {loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          {props.loadingIcon}
          {props.loadingText}
        </div>
      ) : (
        <span>{props.children}</span>
      )}
    </button>
  )
})
