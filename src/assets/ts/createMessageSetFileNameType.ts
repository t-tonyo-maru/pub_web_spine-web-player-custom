// types
import { MessageSetFileNameType } from 'types/AppState'
// assets
import { getExtensionByFileName } from 'assets/ts/util/getExtensionByFileName/getExtensionByFileName'

/**
 * MessageSetFileNameTypeのメッセージを生成する
 * @param {string} targetFileName - 判定対象のファイル名
 * @return {MessageSetFileNameType} - MessageSetFileNameTypeのメッセージ
 */
export const createMessageSetFileNameType = (
  targetFileName: string
): MessageSetFileNameType => {
  // 対象のファイル名から拡張子を取得
  const extensionName = getExtensionByFileName(targetFileName)

  switch (extensionName) {
    case 'atlas':
      return {
        type: 'SetFileNameAtlas',
        data: targetFileName
      }
    case 'json':
      return {
        type: 'SetFileNameJson',
        data: targetFileName
      }
    case 'skel':
      return {
        type: 'SetFileNameSkel',
        data: targetFileName
      }
    case 'png':
      return {
        type: 'SetFileNamePng',
        data: targetFileName
      }
    default:
      return {
        type: 'FailedSetFileName'
      }
  }
}
