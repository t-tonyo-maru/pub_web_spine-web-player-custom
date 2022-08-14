// type
import { ExtensionsType } from 'types/Extensions'
import { LoadStatusType, MessageSetLoadStatusType } from 'types/AppState'

export const createMessageSetLoadStatus = ({
  target,
  loadStatusType = 'NODATA'
}: {
  target: ExtensionsType
  loadStatusType: LoadStatusType
}): MessageSetLoadStatusType => {
  switch (target) {
    case 'atlas':
      return {
        type: 'SetLoadStatusAtlas',
        data: loadStatusType
      }

    case 'json':
      return {
        type: 'SetLoadStatusJson',
        data: loadStatusType
      }
    case 'skel':
      return {
        type: 'SetLoadStatusSkel',
        data: loadStatusType
      }
    case 'png':
      return {
        type: 'SetLoadStatusPng',
        data: loadStatusType
      }
  }
}
