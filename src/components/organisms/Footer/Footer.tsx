// react
import React, { useContext } from 'react'
// global store
import { Store } from 'store/index'
// style
import style from './Footer.module.scss'

const Footer = () => {
  // useContext を使って、グローバルステートと更新用の reducer 関数をセット
  const { globalState } = useContext(Store)
  // 最新版のbuildか
  const isLatestBuild = process.env.REACT_APP_PUBLIC_BUILD_TYPE === 'LATEST'

  return (
    <footer className={style.footer}>
      <div>
        {isLatestBuild ? (
          <div>
            {globalState.oldVersions.length > 0 && <p className={style.oldVersion}>old versions</p>}
            <ul className={style.links}>
              {globalState.oldVersions.map((el) => (
                <li className={style.linkItem} key={el.id}>
                  <a href={`./${el.version}/`} className={style.linkText}>
                    ver.{el.version}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul>
            <li className={style.linkItem}>
              <a
                href="https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/"
                className={style.linkText}
              >
                back to latest version
              </a>
            </li>
          </ul>
        )}
        <p className={style.appName}>
          Spine Web Player Custom App: ver.{process.env.REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION}
        </p>
      </div>
    </footer>
  )
}

export default Footer
