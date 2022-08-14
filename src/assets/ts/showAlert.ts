// types
import { UserLanguageType } from 'types/AppState'

export const showAlert = ({ text, lang = 'en' }: { text: string; lang?: UserLanguageType }) => {
  const message =
    lang === 'ja'
      ? `${text}エラーが発生しました\nブラウザをリロードしてください` // か\nページ下部のリンク先の過去バージョンをご利用ください。
      : `${text} error has occurred.\nPlease reload your browser.` //  or\nPlease use the previous version linked at the bottom of this page.

  alert(message)
}
