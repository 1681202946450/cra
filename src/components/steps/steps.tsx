import React, { FC } from 'react'
import classNames from 'classnames'
import type { StepProps } from './step'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `fgdm-steps`
const stepClassPrefix = `fgdm-step`

const defaultIcon = (index:number)=><span className={`${stepClassPrefix}-icon-dot`}><span style={{color:'#FFFFFF', fontSize:14}}>{index}</span> </span>

type Direction = 'horizontal' | 'vertical'

export type StepsProps = {
  current?: number
  direction?: Direction
  children?: React.ReactNode
} & NativeProps<
  | '--title-font-size'
  | '--description-font-size'
  | '--indicator-margin-right'
  | '--icon-size'
>

const defaultProps = {
  current: 0,
  direction: 'horizontal',
}

export const Steps: FC<StepsProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { direction, current } = props
  const classString = classNames(classPrefix, `${classPrefix}-${direction}`)

  return withNativeProps(
    props,
    <div className={classString}>
      {React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child
        }
        const props = child.props as StepProps
        let status = props.status || 'wait'

        if (index < current) {
          status = props.status || 'finish'
        } else if (index === current) {
          status = props.status || 'process'
        }

        const icon = props.icon ?? defaultIcon(index+1)

        return React.cloneElement(child, {
          status,
          icon,
        } as StepProps)
      })}
    </div>
  )
}
