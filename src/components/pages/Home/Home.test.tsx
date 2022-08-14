// react
import React from 'react'
import { render, screen } from '@testing-library/react'
// components
import Home from 'components/pages/Home/Home'

describe('components/pages/Home/Home: テスト', () => {
  // 正常系
  test('Home ページコンポーネントが正しく描画されているか', () => {
    render(<Home />)
    const element = screen.getByText(/Home ページ/i)
    expect(element).toBeInTheDocument()
  })

  // 異常系
})
