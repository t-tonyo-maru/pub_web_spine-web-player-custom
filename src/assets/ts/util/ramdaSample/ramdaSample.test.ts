// ramda
import * as R from 'ramda'
// test module
import {
  UserType,
  convertNameUpperCase,
  addAnyPointForScore,
  multiplyAgeByAnyPoint
} from './ramdaSample'

const testUsers: UserType[] = [
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

test('test: ramdaSample', () => {
  // 各関数を合成する
  const convert = R.compose(
    convertNameUpperCase,
    addAnyPointForScore(50),
    multiplyAgeByAnyPoint(2)
  )

  expect(convert(testUsers)).toEqual([
    {
      id: 1,
      name: 'TANAKA',
      score: 150,
      age: 40
    },
    {
      id: 2,
      name: 'SATO',
      score: 130,
      age: 52
    },
    {
      id: 3,
      name: 'SUZUKI',
      score: 170,
      age: 56
    }
  ])
})
