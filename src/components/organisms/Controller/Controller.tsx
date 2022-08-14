// react
import React, { useContext, memo } from 'react'
// style
import style from './Controller.module.scss'
// components
import { Button } from 'components/atoms/Button/Button'
import { FileTag } from 'components/atoms/FileTag/FileTag'
import { InputFiles } from 'components/molecules/InputFiles/InputFiles'
// global store
import { Store } from 'store/index'
// hooks
import { useController } from 'components/organisms/Controller/Controller.hooks'

export const Controller = memo(() => {
  // useContext を使って、グローバルステートと更新用の reducer 関数をセット
  const { globalState } = useContext(Store)
  // Controllerコンポーネントのhooksを展開
  const { updateGlobalDataUrls, downloadHtmlFile } = useController()

  return (
    <div className={style.controller}>
      <div className={style.inner}>
        <div className={style.row}>
          <div className={style.fileUpload}>
            <InputFiles handleOnChange={updateGlobalDataUrls}>Upload Files</InputFiles>
          </div>
          <ul className={style.loadStatuses}>
            <li className={style.loadStatus}>
              <FileTag extension="skel" status={globalState.files.skel.loadStatus} />
            </li>
            <li className={style.loadStatus}>
              <FileTag extension="json" status={globalState.files.json.loadStatus} />
            </li>
            <li className={style.loadStatus}>
              <FileTag extension="atlas" status={globalState.files.atlas.loadStatus} />
            </li>
            <li className={style.loadStatus}>
              <FileTag extension="png" status={globalState.files.png.loadStatus} />
            </li>
          </ul>
        </div>
        <div className={style.row}>
          <div className={style.download}>
            <Button
              handleClick={downloadHtmlFile}
              isDisabled={!globalState.canPlayAnimation}
              isDownload={true}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})
