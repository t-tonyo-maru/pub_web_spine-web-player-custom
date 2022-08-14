// react
import React, { useRef, ReactNode } from 'react'
// module
import cn from 'classnames'
// components
import { Button } from 'components/atoms/Button/Button'
// style
import style from './InputFiles.module.scss'
// type
export type InputFilesProps = {
  children: ReactNode
  isDisabled?: boolean
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFiles = ({
  handleOnChange,
  isDisabled = false,
  children
}: InputFilesProps) => {
  // ファイル選択要素
  const inputElement = useRef<HTMLInputElement>(null)
  // Button コンポーネントとファイル選択要素発火の紐付け
  const handleClickInput = () => {
    if (inputElement.current === null) return
    inputElement.current.click()
  }

  // ボタン要素のクラス
  const inputFilesClass = cn({
    [style.inputFiles]: true,
    [style.disabled]: isDisabled
  })
  return (
    <div className={inputFilesClass}>
      <Button isDisabled={isDisabled} handleClick={handleClickInput}>
        {children}
      </Button>
      <input
        ref={inputElement}
        className={style.input}
        type="file"
        multiple
        onChange={handleOnChange}
      />
    </div>
  )
}
