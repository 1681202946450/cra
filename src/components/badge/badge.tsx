import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `fgdm-badge`

export const dot = <React.Fragment />

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string | 'fgOrange' | 'fgRed'
  bordered?: boolean
  children?: React.ReactNode
  orientation:'right' | 'left'
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
} & NativeProps<'--right' | '--top' | '--color'>

export const Badge: FC<BadgeProps> = props => {
  const { content, color, children } = props

  const isDot = content === dot

  const badgeCls = classNames(
    classPrefix,
    props.orientation ? `${classPrefix}-${props.orientation}` : null,
    !!children && `${classPrefix}-fixed`,
    isDot && `${classPrefix}-dot`,
    props.bordered && `${classPrefix}-bordered`
  )

  const getColor = (color:string | undefined)=>{
    if(color==='fgOrange') {
      return 'linear-gradient(82deg, #FFA359 0%, #FF6432 98%)';
    }
    if(color==='fgRed') {
      return 'linear-gradient(75deg, #FF8283 0%, #E93332 97%)';
    }
    return color
  }
  const element =
    content || content === 0
      ? withNativeProps(
          props,
          <div
            className={badgeCls}
            style={
              {
                '--color': getColor(color),
              } as BadgeProps['style']
            }
          >
            {!isDot && (
              <div className={`${classPrefix}-content`}>{content}</div>
            )}
          </div>
        )
      : null

  return children ? (
    <div
      className={classNames(`
       ${classPrefix}-wrapper`,
       props.wrapperClassName,

       )}
      style={props.wrapperStyle}
    >
      {children}
      {element}
    </div>
  ) : (
    element
  )
}
