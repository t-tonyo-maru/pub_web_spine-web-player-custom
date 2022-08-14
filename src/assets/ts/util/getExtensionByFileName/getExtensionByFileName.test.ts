import { getExtensionByFileName } from 'assets/ts/util/getExtensionByFileName/getExtensionByFileName'

// 正常系
describe('getExtensionByFileName: 正常系テスト', () => {
  test('.skelテスト', () => {
    expect(getExtensionByFileName('hogehoge.fugafuga.piyopiyo.skel')).toBe(
      'skel'
    )
  })
  test('.pngテスト', () => {
    expect(getExtensionByFileName('hogehoge.fugafuga.piyopiyo.png')).toBe('png')
  })
  test('.jsonテスト', () => {
    expect(getExtensionByFileName('hogehoge.fugafuga.piyopiyo.json')).toBe(
      'json'
    )
  })
  test('.atlasテスト', () => {
    expect(getExtensionByFileName('hogehoge.fugafuga.piyopiyo.atlas')).toBe(
      'atlas'
    )
  })
})

// 異常系
describe('getExtensionByFileName: 正常系テスト', () => {
  test('空白テスト', () => {
    expect(getExtensionByFileName('')).toBe('')
  })
  test('拡張子がないファイル(.がない)のテスト', () => {
    expect(getExtensionByFileName('hogehogefugafugapiyopiyopng')).toBe('')
  })
  test('対象の拡張子外のテスト', () => {
    expect(getExtensionByFileName('hogehogefugafugapiyopiyo.jpeg')).toBe('')
  })
})
