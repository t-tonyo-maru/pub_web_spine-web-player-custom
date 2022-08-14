// react
import React, { useContext } from 'react'
// type
import { MessageSetDataUrlType, MessageSetFileNameType } from 'types/AppState'
// global store
import { Store } from 'store/index'
// assets
import { getExtensionByFileName } from 'assets/ts/util/getExtensionByFileName/getExtensionByFileName'
import { createMessageSetDataUrlType } from 'assets/ts/createMessageSetDataUrlType'
import { createMessageSetFileNameType } from 'assets/ts/createMessageSetFileNameType'
import { createMessageSetLoadStatus } from 'assets/ts/createMessageSetLoadStatus'
import { getTemplateHtml } from 'assets/ts/getTemplateHtml'
import { createFetch } from 'assets/ts/createFetch/createFetch'
import { showAlert } from 'assets/ts/showAlert'

export const useController = () => {
  // useContext を使って、グローバルステートと更新用の reducer 関数をセット
  const { globalState, setGlobalState } = useContext(Store)

  /**
   * updateGlobalDataUrls
   * ユーザーがアップロードしたファイルをグローバルステートへ保存する
   * @param {React.ChangeEvent<HTMLInputElement>} event - input[type="file"]のeventオブジェクト
   */
  const updateGlobalDataUrls = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return

    // read対象のファイルをまとめる配列
    const targets: File[] = []
    // FileListのkeyを取得
    const keys = Object.keys(event.target.files).map((key) => Number(key))
    // read対象の拡張子を持つファイルのみを抽出する
    keys.forEach((key) => {
      const file = event.target.files!.item(key)
      if (file !== null && getExtensionByFileName(file.name) !== '') {
        targets.push(file)
      }
    })

    // read対象のファイルがなければ、処理を中断
    if (targets.length === 0) return

    // ファイル読み込み
    Object.keys(targets).map((key) => {
      const extensionName = getExtensionByFileName(targets[Number(key)].name)
      if (extensionName === '') return // 拡張子がないファイルは除外

      const messageSetDataUrl: MessageSetDataUrlType = createMessageSetDataUrlType({
        targetExtension: extensionName,
        data: ''
      })
      const messageSetFileName: MessageSetFileNameType = createMessageSetFileNameType(
        targets[Number(key)].name
      )
      // FileReader
      const reader = new FileReader()

      // File load start event
      reader.addEventListener('loadstart', () => {
        // init json & skel's state
        if (extensionName === 'json' || extensionName === 'skel') {
          // reset json & skel's load status
          setGlobalState({ type: 'SetLoadStatusJson', data: 'NODATA' })
          setGlobalState({ type: 'SetLoadStatusSkel', data: 'NODATA' })
          // reset json & skel's dataUrl
          setGlobalState({ type: 'SetDataUrlJson', data: '' })
          setGlobalState({ type: 'SetDataUrlSkel', data: '' })
          // reset json & skel's file name
          setGlobalState({ type: 'SetFileNameJson', data: '' })
          setGlobalState({ type: 'SetFileNameSkel', data: '' })
        }

        // reset load status
        setGlobalState(
          createMessageSetLoadStatus({
            target: extensionName,
            loadStatusType: 'LOADING'
          })
        )
        // reset dataUrl
        if (messageSetDataUrl.type !== 'FailedSetDataUrl') {
          setGlobalState({
            ...messageSetDataUrl,
            data: ''
          })
        }
        // reset file name
        if (messageSetFileName.type !== 'FailedSetFileName') {
          setGlobalState({
            ...messageSetFileName,
            data: ''
          })
        }
      })

      // File load event
      reader.addEventListener('load', (event) => {
        if (
          event.target !== null &&
          typeof event.target.result === 'string' &&
          messageSetDataUrl.type !== 'FailedSetDataUrl'
        ) {
          // load status
          setGlobalState(
            createMessageSetLoadStatus({
              target: extensionName,
              loadStatusType: 'LOADED'
            })
          )
          // dataUrl
          setGlobalState({
            ...messageSetDataUrl,
            data: event.target.result
          })
          // file name
          setGlobalState(messageSetFileName)
        }
      })

      // File load error event
      reader.addEventListener('error', () => {
        // set load status
        setGlobalState(
          createMessageSetLoadStatus({
            target: extensionName,
            loadStatusType: 'FAILED'
          })
        )
        // set dataUrl
        setGlobalState({
          type: 'FailedSetDataUrl'
        })
        // set file name
        setGlobalState({
          type: 'FailedSetFileName'
        })
        // error alert
        showAlert({
          text:
            globalState.userLanguage === 'ja'
              ? `${extensionName}ファイルの読み込み `
              : `loading ${extensionName} file process `,
          lang: globalState.userLanguage
        })
      })

      reader.readAsDataURL(targets[Number(key)])
    })
  }

  /**
   * downloadHtmlFile
   * htmlファイルをダウンロードする
   */
  const downloadHtmlFile = async () => {
    const isLatestBuild = process.env.REACT_APP_PUBLIC_BUILD_TYPE === 'LATEST'
    const runtimePath = isLatestBuild
      ? `${process.env.REACT_APP_PUBLIC_SITE_PREFIX_PATH}assets/spine-web-player-runtime/${process.env.REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION}/`
      : `${process.env.REACT_APP_PUBLIC_SITE_PREFIX_PATH}assets/spine-web-player-runtime/${process.env.REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION}/`

    const getSpineWebPlayerRuntimeJs = createFetch({
      url: `${runtimePath}spine-player.min.js`
    })
    const getSpineWebPlayerRuntimeCss = createFetch({
      url: `${runtimePath}spine-player.min.css`
    })

    let runtimeJs = ''
    let runtimeCss = ''
    let hasError = false

    const responses: {
      js: Promise<string>
      css: Promise<string>
    } = {
      js: new Promise(() => ''),
      css: new Promise(() => '')
    }

    await getSpineWebPlayerRuntimeJs()
      .then((res) => {
        // runtime jsを取得して、結果を変数に格納
        responses.js = res.text()
        return getSpineWebPlayerRuntimeCss()
      })
      .then((res) => {
        // runtime cssを取得して、結果を変数に格納
        responses.css = res.text()
        return responses.js
      })
      .then((res) => {
        // 取得結果（responses.js.text）のPromiseを解決
        runtimeJs = res
        return responses.css
      })
      .then((res) => {
        // 取得結果（responses.css.text）のPromiseを解決
        runtimeCss = res
      })
      .catch((err) => {
        console.log(err)
        hasError = true
        showAlert({
          text:
            globalState.userLanguage === 'ja' ? 'htmlダウンロード処理 ' : 'html download process ',
          lang: globalState.userLanguage
        })
      })

    if (hasError) return
    if (runtimeJs.length === 0 || runtimeCss.length === 0) return

    const isJson = globalState.files.json.loadStatus === 'LOADED'
    const coreOption = {
      fileName: isJson ? globalState.files.json.fileName : globalState.files.skel.fileName,
      dataUrl: isJson ? globalState.files.json.dataUrl : globalState.files.skel.dataUrl,
      isJson: isJson
    }

    const blob = new Blob(
      [
        getTemplateHtml({
          runtimeJs,
          runtimeCss,
          spienExportData: {
            core: coreOption,
            atlas: {
              fileName: globalState.files.atlas.fileName,
              dataUrl: globalState.files.atlas.dataUrl
            },
            png: {
              fileName: globalState.files.png.fileName,
              dataUrl: globalState.files.png.dataUrl
            }
          }
        })
      ],
      { type: 'text/html' }
    )
    const blobURL = window.URL.createObjectURL(blob)
    const obj = document.createElement('a')
    obj.href = blobURL
    obj.download = `spine-web-player.html`
    obj.click()
  }

  return {
    updateGlobalDataUrls,
    downloadHtmlFile
  }
}
