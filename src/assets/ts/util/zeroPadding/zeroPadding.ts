type NumberOrString = number | string

/**
 * zeroPadding
 * 0詰めを行う関数です。第1引数に0詰めしたい数値、第2引数に0詰めする桁数をいれます。
 * @param  {number | string} num - 0詰めしたい数値
 * @param  {number | string} len - 0詰めする桁数
 * @return  {string} - 0詰めした数
 */
export const zeroPadding = (num: NumberOrString, len: NumberOrString): string => {
  if (len <= 0) {
    return num.toString()
  }
  return (Array(len).join('0') + num).slice(-len)
}
