// react
import React from 'react'
import { Link } from 'react-router-dom'
// components
import { OneColumn } from 'components/templates/OneColumn/OneColumn'
// style
import style from './Pet.module.scss'

const Pet = () => {
  return (
    <div className={style.pet}>
      <OneColumn>
        <p>Pet ページ</p>
        <Link to="/">トップへ戻る</Link>
      </OneColumn>
    </div>
  )
}

export default Pet
