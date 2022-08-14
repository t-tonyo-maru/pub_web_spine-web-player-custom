// react
import React from 'react'
import { Link } from 'react-router-dom'
// components
import { OneColumn } from 'components/templates/OneColumn/OneColumn'
// style
import style from './Page404.module.scss'

const Page404 = () => {
  return (
    <div className={style.page404}>
      <OneColumn>
        <p>Page404 ページ</p>
        <Link to="/">トップへ戻る</Link>
      </OneColumn>
    </div>
  )
}

export default Page404
