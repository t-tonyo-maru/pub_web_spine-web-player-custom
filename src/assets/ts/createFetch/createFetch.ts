/**
 * fetchから返されるPromiseオブジェクトを返す関数
 * () => fetch(url, data)を返却しているのは、fetchを任意のタイミングで実行させるため
 * fetch: https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 *
 * @param {RequestInfo | URL} url - API URL
 * @param {RequestInit | undefined} data - fetchのオプション
 * @return {(() => Promise<Response>)} fetchが返却するPromiseオブジェクト
 */
export const createFetch = ({ url = '', data = {} }) => {
  return () => fetch(url, data)
}
