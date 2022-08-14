// react
import React, { useContext, useEffect, useRef } from 'react'
// components
import { OneColumn } from 'components/templates/OneColumn/OneColumn'
import { Button } from 'components/atoms/Button/Button'
import { Icon } from 'components/atoms/Icon/Icon'
// global store
import { Store } from 'store/index'
// style
import style from './Home.module.scss'

const Home = () => {
  // useContext を使って、グローバルステートと更新用の reducer 関数をセット
  const { globalState, setGlobalState } = useContext(Store)

  /**
   * updateGlobalUser
   * グローバルステートの userName を更新する
   */
  const updateGlobalUser = () => {
    // name 更新
    setGlobalState({
      type: 'SetUserName',
      name: '山田花子'
    })
    // mail 更新
    setGlobalState({
      type: 'SetMail',
      mail: 'yamada@hanako.co.jp'
    })
  }

  // React v18では<React.StrictMode>配下のコンポーネント内で宣言されたuseEffect, useLayoutEffectは安全でない副作用を見つけるために、コンポーネントは2回描画されます。
  // そのため、空配列を渡した場合において、マウント時にuseEffext, useLayoutEffectが2回呼ばれます。
  // また、クリーンアップ関数も1回呼ばれることになります。
  // 1回のみの実行を保証したい場合は、useRefなどを使って前に実行されたかどうかを保持することで対処できます。
  // なお、本番環境や<React.StrictMode>で囲まれていないコンポーネントに関しては、この挙動は発生しません。
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current === true) return
    mounted.current = true
    // 1回だけ実行したい処理
    console.log('home')
  }, [])

  return (
    <div className={style.home}>
      <OneColumn>
        <p>Home ページ</p>

        {/* process.env.REACT_APP_PUBLIC_URL で環境変数をまとめたファイル .env の中にある編集を取得します */}
        {/* <p>{process.env.REACT_APP_PUBLIC_URL}</p> */}

        <p>グローバルステートを出力する</p>
        <ul>
          <li>id: {globalState.id}</li>
          <li>name: {globalState.name}</li>
          <li>mail: {globalState.mail}</li>
        </ul>
        <Button handleClick={updateGlobalUser}>ボタン</Button>
        <Icon size="md" isInActive={false} />
      </OneColumn>
    </div>
  )
}

export default Home
