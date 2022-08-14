// react
import React, { ReactNode } from 'react'
// module
import cn from 'classnames'
import style from './FileTag.module.scss'
// type
import { ExtensionsType } from 'types/Extensions'
import { LoadStatusType } from 'types/AppState'

export type FileTagProps = {
  extension: ExtensionsType
  status: LoadStatusType
}

export const FileTag = ({ extension, status }: FileTagProps) => {
  // file status class
  const fileStatusClass = cn({
    [style.status]: true,
    [style.isNodata]: status === 'NODATA',
    [style.isLoading]: status === 'LOADING',
    [style.isLoaded]: status === 'LOADED',
    [style.isFailed]: status === 'FAILED'
  })

  return (
    <p className={style.tag}>
      <span className={style.extension}>{extension}</span>
      <span className={fileStatusClass}>{status}</span>
    </p>
  )
}
