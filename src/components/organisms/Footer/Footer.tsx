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
      <div className={style.block}>
        {isLatestBuild ? (
          <div>
            {globalState.oldVersions.length > 0 && <p className={style.oldVersion}>old versions</p>}
            <ul className={style.links}>
              {globalState.oldVersions.map((el) => (
                <li className={style.linkItem} key={el.id}>
                  <a
                    href={`https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/${el.version}/`}
                    className={style.linkText}
                  >
                    ver.{el.version}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={style.links}>
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
      </div>

      <div className={style.block}>
        <ul className={style.links}>
          <li className={style.linkItem}>
            <a
              href="https://github.com/t-tonyo-maru/pub_web_spine-web-player-custom/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkText}
            >
              &gt; How to use
            </a>
          </li>
          <li className={style.linkItem}>
            <a
              href="https://github.com/t-tonyo-maru/pub_web_spine-web-player-custom"
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkText}
            >
              &gt; Github Repository
            </a>
          </li>
        </ul>
      </div>

      <div className={style.block}>
        <p className={style.caption}>
          Based on @esotericsoftware/spine-player ver.
          {process.env.REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION}
        </p>
      </div>
    </footer>
  )
}

export default Footer
