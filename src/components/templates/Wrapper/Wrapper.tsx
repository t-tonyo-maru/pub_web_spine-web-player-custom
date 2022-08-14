// react
import React, { memo, ReactNode } from 'react'
// components
import Footer from 'components/organisms/Footer/Footer'
// style
import style from './Wrapper.module.scss'

export type WrapperProps = {
  children: ReactNode
}

export const Wrapper = memo(({ children }: WrapperProps) => {
  return (
    <div className={style.wrapper}>
      <main className={style.container}>{children}</main>
      <Footer />
    </div>
  )
})
