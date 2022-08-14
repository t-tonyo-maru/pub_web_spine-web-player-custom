// react
import React from 'react'
import { Link } from 'react-router-dom'
// components
import { OneColumn } from 'components/templates/OneColumn/OneColumn'
// style
import style from './User.module.scss'

const User = () => {
  return (
    <div className={style.user}>
      <OneColumn>
        <p>User ページ</p>
        <Link to="/">トップへ戻る</Link>
      </OneColumn>
    </div>
  )
}

export default User
