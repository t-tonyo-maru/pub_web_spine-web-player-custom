import { ExtensionsType } from 'types/Extensions'

/**
 * 引数のファイル名から拡張子を取得する
 * @param {string} fileName - ファイル名
 * @return {string} - 拡張子
 */
export const getExtensionByFileName = (
  fileName: string
): ExtensionsType | '' => {
  if (fileName.length === 0) return ''

  const extension = fileName.split('.').pop()
  if (typeof extension === 'undefined') return ''

  let result: ExtensionsType | '' = ''

  switch (extension) {
    case 'skel': {
      result = 'skel'
      break
    }
    case 'png': {
      result = 'png'
      break
    }
    case 'json': {
      result = 'json'
      break
    }
    case 'atlas': {
      result = 'atlas'
      break
    }
    default: {
      result = ''
      break
    }
  }

  return result
}
