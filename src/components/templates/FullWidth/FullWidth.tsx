// react
import React from 'react'
// components
import { Wrapper } from 'components/templates/Wrapper/Wrapper'
// style
import style from './FullWidth.module.scss'

export type FullWidthProps = {
  children: React.ReactNode
}

export const FullWidth = ({ children }: FullWidthProps) => {
  return (
    <Wrapper>
      <div className={style.fullWidth}>
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}
