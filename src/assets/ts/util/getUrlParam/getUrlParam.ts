// getUrlParam の返り値の型
interface ParamsInterface {
  [paramItem: string]: string
}

/**
 * getUrlParam
 * ページのURLからパラメータを取得し、オブジェクト形式で返却します。
 * @return  {object} - URLパラメータのオブジェクト
 */
export const getUrlParam = () => {
  const urlParam = location.search.substring(1)
  const params: ParamsInterface = {}
  // URLにパラメータが存在する場合
  if (urlParam) {
    // 「&」が含まれている場合は「&」で分割
    const param = urlParam.split('&')
    // パラメータを格納する用の配列を用意
    // 用意した配列にパラメータを格納
    for (let i = 0; i < param.length; i++) {
      const paramItem = param[i].split('=')
      params[paramItem[0]] = paramItem[1]
    }
  }
  return params
}
