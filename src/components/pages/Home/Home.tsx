// hooks
import { useHome } from 'components/pages/Home/Home.hooks'
// components
import { OneColumn } from 'components/templates/OneColumn/OneColumn'
import { SpineWebPlayer } from 'components/organisms/SpineWebPlayer/SpineWebPlayer'
import { Controller } from 'components/organisms/Controller/Controller'
// style
import style from './Home.module.scss'

const Home = () => {
  useHome()

  return (
    <div className={style.home}>
      <OneColumn>
        <SpineWebPlayer />
        <Controller />
      </OneColumn>
    </div>
  )
}

export default Home
