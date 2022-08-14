// react
import React from 'react'
// moudle
import cn from 'classnames'
// style
import style from './Icon.module.scss'

export type IconPropsTyoe = {
  size: 'md' | 'sm'
  isInActive: boolean
}

export const Icon = ({ size = 'md', isInActive = false }: IconPropsTyoe) => {
  const classNames = cn({
    [`${style.icon}`]: true,
    [`${style.sm}`]: size === 'sm',
    [`${style.md}`]: size === 'md',
    [`${style.inactive}`]: isInActive
  })

  return <i className={classNames} />
}
