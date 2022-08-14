// React
import React, { useRef, useEffect, useContext } from 'react'
// SpinePlayer
import * as spine from '@esotericsoftware/spine-player'
// global store
import { Store } from 'store/index'

export const useSpineWebPlayer = () => {
  const playerElement = useRef<HTMLDivElement>(null)
  // useContext を使って、グローバルステートと更新用の reducer 関数をセット
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    if (playerElement.current === null) return

    // 各種ファイルが未アップロードの場合は処理を中断する
    if (
      globalState.files.skel.loadStatus !== 'LOADED' &&
      globalState.files.json.loadStatus !== 'LOADED'
    )
      return
    if (globalState.files.atlas.loadStatus !== 'LOADED') return
    if (globalState.files.png.loadStatus !== 'LOADED') return

    // 既にSpine Web Playerが存在していれば削除する
    if (playerElement.current.childNodes.length > 0) {
      playerElement.current.childNodes.forEach((node) => {
        playerElement.current!.removeChild(node)
      })
    }

    const spinePlayerOptions: spine.SpinePlayerConfig = {
      preserveDrawingBuffer: false,
      atlasUrl: `${globalState.files.atlas.fileName}`,
      rawDataURIs: {
        [`${globalState.files.atlas.fileName}`]: globalState.files.atlas.dataUrl,
        [`${globalState.files.png.fileName}`]: globalState.files.png.dataUrl
      },
      success: () => {
        setGlobalState({ type: 'SetCanPlayAnimation', data: true })
      },
      error: () => {
        setGlobalState({ type: 'SetCanPlayAnimation', data: false })
      }
    }

    if (
      globalState.files.skel.loadStatus === 'LOADED' &&
      globalState.files.json.loadStatus === 'LOADED'
    ) {
      // skel/jsonのいずれも読み込まれた場合は、jsonを優先
      spinePlayerOptions.binaryUrl = `${globalState.files.json.fileName}`
      spinePlayerOptions.rawDataURIs![`${globalState.files.json.fileName}`] =
        globalState.files.json.dataUrl
    } else if (globalState.files.skel.loadStatus === 'LOADED') {
      // skelが読み込まれた場合
      spinePlayerOptions.binaryUrl = `${globalState.files.skel.fileName}`
      spinePlayerOptions.rawDataURIs![`${globalState.files.skel.fileName}`] =
        globalState.files.skel.dataUrl
    } else if (globalState.files.json.loadStatus === 'LOADED') {
      // jsonが読み込まれた場合
      spinePlayerOptions.jsonUrl = `${globalState.files.json.fileName}`
      spinePlayerOptions.rawDataURIs![`${globalState.files.json.fileName}`] =
        globalState.files.json.dataUrl
    }

    new spine.SpinePlayer(playerElement.current, spinePlayerOptions)
  }, [
    // dataUrl
    globalState.files.atlas.dataUrl,
    globalState.files.json.dataUrl,
    globalState.files.png.dataUrl,
    globalState.files.skel.dataUrl,
    // file name
    globalState.files.atlas.fileName,
    globalState.files.json.fileName,
    globalState.files.png.fileName,
    globalState.files.skel.fileName,
    // file load statu
    globalState.files.atlas.loadStatus,
    globalState.files.json.loadStatus,
    globalState.files.png.loadStatus,
    globalState.files.skel.loadStatus,
    setGlobalState // TODO:必要? 警告が出たので入れている
  ])

  return { playerElement }
}
