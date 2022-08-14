import React, { ReactNode } from 'react'
import style from './Button.module.scss'

export type ButtonProps = {
  children: ReactNode
  handleClick?: () => void
}

export const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button className={style.button} onClick={handleClick}>
      {children}
    </button>
  )
}
