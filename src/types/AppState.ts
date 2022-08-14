// ローディングステータス
export type LoadStatusType = 'NODATA' | 'LOADING' | 'LOADED' | 'FAILED'
// ファイルステータス
export type FileStatusType = {
  loadStatus: LoadStatusType
  fileName: string
  dataUrl: string
}
// 各種ファイルの型
export type FilesType = {
  atlas: FileStatusType
  json: FileStatusType
  skel: FileStatusType
  png: FileStatusType
}
// htmlファイルをダウンロード可能か
export type CanPlayAnimationType = boolean
// 過去バージョンの型
export type OldVersionType = {
  id: string
  version: string
}[]
// ユーザーの言語
export type UserLanguageType = 'ja' | 'en'

// Message型: ファイル読み込みステータス
export type MessageSetLoadStatusType =
  | { type: 'SetLoadStatusAtlas'; data: LoadStatusType }
  | { type: 'SetLoadStatusJson'; data: LoadStatusType }
  | { type: 'SetLoadStatusSkel'; data: LoadStatusType }
  | { type: 'SetLoadStatusPng'; data: LoadStatusType }
export type MessageSetDataUrlType =
  | { type: 'SetDataUrlAtlas'; data: string }
  | { type: 'SetDataUrlJson'; data: string }
  | { type: 'SetDataUrlSkel'; data: string }
  | { type: 'SetDataUrlPng'; data: string }
  | { type: 'FailedSetDataUrl' }
// Message型: ファイル名称セット
export type MessageSetFileNameType =
  | { type: 'SetFileNameAtlas'; data: string }
  | { type: 'SetFileNameJson'; data: string }
  | { type: 'SetFileNameSkel'; data: string }
  | { type: 'SetFileNamePng'; data: string }
  | { type: 'FailedSetFileName' }
// Message型: アニメーション再生可能かフラグ
export type MessageCanPlayAnimationType = {
  type: 'SetCanPlayAnimation'
  data: CanPlayAnimationType
}
// Message型: ユーザー言語
export type MessageUserLanguageType = {
  type: 'SetUserLanguage'
  data: UserLanguageType
}
