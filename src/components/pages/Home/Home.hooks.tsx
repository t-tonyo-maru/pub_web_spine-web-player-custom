// react
import { useContext, useEffect } from 'react'
// global store
import { Store } from 'store/index'

export const useHome = () => {
  const { setGlobalState } = useContext(Store)

  useEffect(() => {
    setGlobalState({
      type: 'SetUserLanguage',
      data: navigator.language === 'ja' ? 'ja' : 'en'
    })
  }, [])
}
