// react
import React, { createContext, Dispatch, useReducer, ReactNode } from 'react'
// module
import * as R from 'ramda'
// types
import {
  FilesType,
  CanPlayAnimationType,
  OldVersionType,
  UserLanguageType,
  MessageSetLoadStatusType,
  MessageSetDataUrlType,
  MessageSetFileNameType,
  MessageCanPlayAnimationType,
  MessageUserLanguageType
} from 'types/AppState'

// props types
type PropsType = {
  children: ReactNode
}
// グローバルステートの型
type ModelType = {
  files: FilesType
  canPlayAnimation: CanPlayAnimationType
  oldVersions: OldVersionType
  userLanguage: UserLanguageType
}
// Message の型
export type MessageType =
  | MessageSetLoadStatusType
  | MessageSetDataUrlType
  | MessageSetFileNameType
  | MessageCanPlayAnimationType
  | MessageUserLanguageType
// グローバルステートの初期値
const initialState: ModelType = {
  files: {
    atlas: {
      loadStatus: 'NODATA',
      fileName: '',
      dataUrl: ''
    },
    json: {
      loadStatus: 'NODATA',
      fileName: '',
      dataUrl: ''
    },
    skel: {
      loadStatus: 'NODATA',
      fileName: '',
      dataUrl: ''
    },
    png: {
      loadStatus: 'NODATA',
      fileName: '',
      dataUrl: ''
    }
  },
  oldVersions: [
    {
      id: '4.2.0',
      version: '4.2.0'
    },
    {
      id: '4.1.0',
      version: '4.1.0'
    },
    {
      id: '4.0.0',
      version: '4.0.0'
    }
  ],
  canPlayAnimation: false,
  userLanguage: 'en'
}

/**
 * update
 * グローバルステート用の reducer 関数
 * @param  {ModelType} state - グローバルステート
 * @param  {MessageType} action - グローバルステートを更新するための action オブジェクト
 */
const update = (state: ModelType, action: MessageType) => {
  switch (action.type) {
    // set load status
    case 'SetLoadStatusAtlas': {
      const newState = R.clone(state)
      newState.files.atlas.loadStatus = action.data
      return newState
    }
    case 'SetLoadStatusJson': {
      const newState = R.clone(state)
      newState.files.json.loadStatus = action.data
      return newState
    }
    case 'SetLoadStatusSkel': {
      const newState = R.clone(state)
      newState.files.skel.loadStatus = action.data
      return newState
    }
    case 'SetLoadStatusPng': {
      const newState = R.clone(state)
      newState.files.png.loadStatus = action.data
      return newState
    }
    // set data url
    case 'SetDataUrlAtlas': {
      const newState = R.clone(state)
      newState.files.atlas.dataUrl = action.data
      return newState
    }
    case 'SetDataUrlJson': {
      const newState = R.clone(state)
      newState.files.json.dataUrl = action.data
      return newState
    }
    case 'SetDataUrlSkel': {
      const newState = R.clone(state)
      newState.files.skel.dataUrl = action.data
      return newState
    }
    case 'SetDataUrlPng': {
      const newState = R.clone(state)
      newState.files.png.dataUrl = action.data
      return newState
    }
    case 'FailedSetDataUrl':
      return state
    // set file name
    case 'SetFileNameAtlas': {
      const newState = R.clone(state)
      newState.files.atlas.fileName = action.data
      return newState
    }
    case 'SetFileNameJson': {
      const newState = R.clone(state)
      newState.files.json.fileName = action.data
      return newState
    }
    case 'SetFileNameSkel': {
      const newState = R.clone(state)
      newState.files.skel.fileName = action.data
      return newState
    }
    case 'SetFileNamePng': {
      const newState = R.clone(state)
      newState.files.png.fileName = action.data
      return newState
    }
    case 'FailedSetFileName':
      return state
    // set can play animation
    case 'SetCanPlayAnimation': {
      const newState = R.clone(state)
      newState.canPlayAnimation = action.data
      return newState
    }
    // set user language
    case 'SetUserLanguage': {
      const newState = R.clone(state)
      newState.userLanguage = action.data
      return newState
    }
    default:
      return state
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

  return <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
}

export { Store, StoreProvider }
