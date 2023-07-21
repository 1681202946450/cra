import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { Fallback } from './fallback'
import Image, { ImageProps } from '../image'
import {  Female } from "./fallbacks";
import { Male } from './fallbacks/male'

const classPrefix = 'fgdm-avatar'

export type AvatarProps = {
  src: string
  fallback?: ReactNode
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
} & Pick<ImageProps, 'alt' | 'lazy' | 'onClick' | 'onError' | 'onLoad'> &
  NativeProps<'--size' | '--border-radius'>

const defaultProps = {
  fallback: <Fallback />,
  fit: 'cover',
}
const Default:FC = (fallback) =>{
  if(fallback==='male') {
    return <Male/>
  }
  if(fallback === 'female'){
    return <Female/>
  }
  return <Fallback />
}

export const Avatar: FC<AvatarProps> = p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <Image
      className={classPrefix}
      src={props.src}
      fallback={Default(props.fallback)}
      placeholder={props.fallback}
      alt={props.alt}
      lazy={props.lazy}
      fit={props.fit}
      onClick={props.onClick}
      onError={props.onError}
      onLoad={props.onLoad}
    />
  )
}
