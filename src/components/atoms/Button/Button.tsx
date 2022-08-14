// react
import React, { ReactNode } from 'react'
// module
import cn from 'classnames'
import style from './Button.module.scss'

export type ButtonProps = {
  children: ReactNode
  isDisabled?: boolean
  isDownload?: boolean
  handleClick?: () => void
}

export const Button = ({
  handleClick,
  isDisabled = false,
  isDownload = false,
  children
}: ButtonProps) => {
  // ボタン要素のクラス
  const buttonClass = cn({
    [style.button]: true,
    [style.download]: isDownload,
    [style.disabled]: isDisabled,
  })

  return (
    <button className={buttonClass} onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  )
}
