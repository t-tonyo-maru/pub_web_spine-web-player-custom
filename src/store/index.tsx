// react
import React, { createContext, Dispatch, useReducer, ReactNode } from 'react'
// types
import { UserType } from 'types/user'

// props types
type PropsType = {
  children: ReactNode
}
// グローバルステートの型
type ModelType = UserType
// Message の型
type MessageType =
  | { type: 'SetId'; id: number }
  | { type: 'SetUserName'; name: string }
  | { type: 'SetMail'; mail: string }
  | { type: 'Failure' }
// Message の型（※ ジェネリクスを使用する場合）
// type MessageType<TErrer, TSuccess> =
//   | { type: 'SetId'; id: number }
//   | { type: 'SetUserName'; name: string }
//   | { type: 'SetMail'; mail: string }
//   | { type: 'Success'; payload: TSuccess }
//   | { type: 'Failure'; payload: TErrer }
// グローバルステートの初期値
const initialState: UserType = {
  id: 0,
  name: '田中太郎',
  mail: 'tanaka@taro.co.jp'
}

/**
 * update
 * グローバルステート用の reducer 関数
 * @param  {ModelType} state - グローバルステート
 * @param  {MessageType} action - グローバルステートを更新するための action オブジェクト
 */
const update = (state: ModelType, action: MessageType) => {
  switch (action.type) {
    case 'SetId': {
      return { ...state, id: action.id }
    }
    case 'SetUserName': {
      return { ...state, name: action.name }
    }
    case 'SetMail': {
      return { ...state, mail: action.mail }
    }
    case 'Failure': {
      return state
    }
    default: {
      return state
    }
  }
}
// グローバルステート用の update の初期値
const initialDispatch: Dispatch<MessageType> = () => {}

/**
 * グローバルステートを作成
 * グローバルステートとステート更新用関数の初期値をセットする
 */
const Store = createContext({
  globalState: initialState,
  setGlobalState: initialDispatch
})

const StoreProvider = ({ children }: PropsType) => {
  const [globalState, setGlobalState] = useReducer(update, initialState)

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  )
}

export { Store, StoreProvider }
