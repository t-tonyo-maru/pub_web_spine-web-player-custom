// React
import React, { memo } from 'react'
// hooks
import { useSpineWebPlayer } from 'components/organisms/SpineWebPlayer/SpineWebPlayer.hooks'
// style
import style from './SpineWebPlayer.module.scss'
import '@esotericsoftware/spine-player/dist/spine-player.css'

export const SpineWebPlayer = memo(() => {
  const { playerElement } = useSpineWebPlayer()

  return (
    <div className={style.container}>
      <div ref={playerElement}></div>
    </div>
  )
})
