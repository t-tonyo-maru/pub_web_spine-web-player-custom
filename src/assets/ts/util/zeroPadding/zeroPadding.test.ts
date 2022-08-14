import { zeroPadding } from 'assets/ts/util/zeroPadding/zeroPadding'

// テストデータ
const targetNumber = 100
const targetString = '100'

// 正常系
describe('zeroPadding: 正常系テスト', () => {
  test('数値型の100を5桁まで0詰めした時に、00100の文字列を得られる事', () => {
    expect(zeroPadding(targetNumber, 5)).toBe('00100')
  })
  test('文字列型の100を5桁まで0詰めした時に、00100の文字列を得られる事', () => {
    expect(zeroPadding(targetString, 5)).toBe('00100')
  })
})

// 異常系
describe('zeroPadding: 異常系テスト', () => {
  test('0詰め対象の文字列がない場合は、( 0詰めする桁数 - 1 )コの連続した0の文字列が返されること', () => {
    expect(zeroPadding('', 5)).toBe('0000')
  })
  test('0詰めする桁数に0が入った場合は、第1引数が文字列として、そのママ返されること', () => {
    expect(zeroPadding(targetNumber, -5)).toBe('100')
  })
  test('0詰めする桁数に負の数が入った場合は、第1引数が文字列として、そのママ返されること', () => {
    expect(zeroPadding(targetNumber, -5)).toBe('100')
  })
})
