// react
import React from 'react'
// components
import { Wrapper } from 'components/templates/Wrapper/Wrapper'
// style
import style from './OneColumn.module.scss'

export type OneColumnProps = {
  children: React.ReactNode
}

export const OneColumn = ({ children }: OneColumnProps) => {
  return (
    <Wrapper>
      <div className={style.oneColumn}>
        <main className={style.main}>{children}</main>
      </div>
    </Wrapper>
  )
}
