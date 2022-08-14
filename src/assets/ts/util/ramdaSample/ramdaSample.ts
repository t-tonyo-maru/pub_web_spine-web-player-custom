import * as R from 'ramda'

export type UserType = {
  id: number
  name: string
  score: number
  age: number
}

const users: UserType[] = [
  {
    id: 1,
    name: 'tanaka',
    score: 100,
    age: 20
  },
  {
    id: 2,
    name: 'sato',
    score: 80,
    age: 26
  },
  {
    id: 3,
    name: 'suzuki',
    score: 120,
    age: 28
  }
]

/**
 * ユーザー名を大文字に変換する
 * UserType[] -> UserType[]
 * @param {UserType[]} users - ユーザー配列
 * @return {UserType[]} - ユーザー名を大文字に変換後のユーザー配列
 */
export const convertNameUpperCase = (users: UserType[]): UserType[] => {
  return users.map((user) => {
    return { ...user, name: user.name.toUpperCase() }
  })
}

/**
 * ユーザーのスコアに任意の数値を加算する
 * number -> UserType[] -> UserType[]
 * @param {number} point - 加算する数値
 * @param {UserType[]} users - ユーザー配列
 * @return {UserType[]} - スコア加算後のユーザー配列
 */
export const addAnyPointForScore = (point: number) => {
  return (users: UserType[]) => {
    return users.map((user) => {
      return { ...user, score: user.score + point }
    })
  }
}

/**
 * ユーザーの年齢を任意の数で乗算する
 * number -> UserType[] -> UserType[]
 * @param {number} point - 乗算する数値
 * @param {UserType[]} users - ユーザー配列
 * @return {UserType[]} - 年齢乗算後のユーザー配列
 */
export const multiplyAgeByAnyPoint = (point: number) => {
  return (users: UserType[]) => {
    return users.map((user) => {
      return { ...user, age: user.age * point }
    })
  }
}

/**
 * ramdajs のサンプル
 */
export const ramdaSample = () => {
  // 各関数を合成する
  const convert = R.compose(
    convertNameUpperCase,
    addAnyPointForScore(50),
    multiplyAgeByAnyPoint(2)
  )

  console.log('convert(users): ', convert(users))
}
