// react
import React from 'react'
import { render, screen } from '@testing-library/react'
// components
import { Button } from 'components/atoms/Button/Button'

describe('components/atoms/Button/Button: テスト', () => {
  // 正常系
  it('children が正しく描画されているか', () => {
    const currentString = 'ボタンのchildren'
    render(<Button>{currentString}</Button>)
    expect(screen.getByText(currentString)).toBeInTheDocument()
  })

  // 異常系
})
