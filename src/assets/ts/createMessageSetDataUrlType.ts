// type
import { ExtensionsType } from 'types/Extensions'
import { MessageSetDataUrlType } from 'types/AppState'

/**
 * createMessageSetDataUrlTypeのメッセージを生成する
 * @param {string} targetExtension - 判定対象の拡張子
 * @return {MessageSetDataUrlType} - createMessageSetDataUrlTypeのメッセージ
 */
export const createMessageSetDataUrlType = ({
  targetExtension = '',
  data = ''
}: {
  targetExtension: '' | ExtensionsType
  data: string
}): MessageSetDataUrlType => {
  switch (targetExtension) {
    case 'atlas':
      return {
        type: 'SetDataUrlAtlas',
        data
      }

    case 'json':
      return {
        type: 'SetDataUrlJson',
        data
      }
    case 'skel':
      return {
        type: 'SetDataUrlSkel',
        data
      }
    case 'png':
      return {
        type: 'SetDataUrlPng',
        data
      }
    default:
      return {
        type: 'FailedSetDataUrl'
      }
  }
}
