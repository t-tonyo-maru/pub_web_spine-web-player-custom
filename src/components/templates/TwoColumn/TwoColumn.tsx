// react
import React from 'react'
// components
import { Wrapper } from 'components/templates/Wrapper/Wrapper'
// style
import style from './TwoColumn.module.scss'

export type TwoColumnPropsType = {
  sub: React.ReactNode
  children: React.ReactNode
}

const TwoColumn = ({
  sub, // サブコンテンツ
  children // メインコンテンツ
}: TwoColumnPropsType) => {
  return (
    <Wrapper>
      <div className={style.twoColumn}>
        <main className={style.main}>{children}</main>
        <aside className={style.sidebar}>{sub}</aside>
      </div>
    </Wrapper>
  )
}
export default TwoColumn
