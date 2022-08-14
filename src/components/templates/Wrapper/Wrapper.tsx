// react
import React, { memo, ReactNode } from 'react'
// components
import Header from 'components/organisms/Header/Header'
import Footer from 'components/organisms/Footer/Footer'
// style
import style from './Wrapper.module.scss'

export type WrapperProps = {
  children: ReactNode
}

export const Wrapper = memo(({ children }: WrapperProps) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.container}>{children}</main>
      <Footer />
    </div>
  )
})
