import { cutString } from 'assets/ts/util/cutString/cutString'

// テストデータ
const testString = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ'

// 正常系
describe('cutString: 正常系テスト', () => {
  test('30文字を20文字までカットした時、正しく文字列がカットされていること', () => {
    expect(cutString(testString, 20)).toBe('あいうえおかきくけこさしすせそたちつて…')
  })
  test('30文字を20文字までカットした時、文字数が20になっていること', () => {
    expect(cutString(testString, 20).length).toBe(20)
  })
  test('カットされた文字列の末尾は、「…」になっていること', () => {
    expect(cutString(testString, 20).slice(-1)).toBe('…')
  })
})

// 異常系
describe('cutString: 異常系テスト', () => {
  test('空文字は、空文字のママ返されること', () => {
    expect(cutString('', 10)).toBe('')
  })
  test('カットする文字数に0を指定した場合は、文字列は変更されずに返されること', () => {
    expect(cutString(testString, 0)).toBe(testString)
  })
  test('カットする文字数に負の数を指定した場合は、文字列は変更されずに返されること', () => {
    expect(cutString(testString, -1)).toBe(testString)
  })
})
