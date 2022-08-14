/**
 * cutString
 * 長い文字列をカットして '…' を最後につけた文字列を返す
 * @param  {string} text - 省略対象の文字列
 * @param  {number} cutCount - 何文字まで表示するか
 * @return  {string} - 省略した文字列
 */
export const cutString = (text: string, cutCount: number): string => {
  if (cutCount <= 0) {
    return text
  }

  if (text.length > cutCount - 1) {
    text = text.substr(0, cutCount - 1)
    text += '…'
  }

  return text
}
