// react
import React from 'react'
// react-testing-library
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// components
import Home from 'components/pages/Home/Home'
// global store provider
import { StoreProvider } from 'store/index'

// テスト用
const updatedName = '山田花子'

describe('グローバルステート（ src/store/index.tsx ）テスト', () => {
  beforeEach(() => {
    // グローバルステートを流し込んだ上で、Home コンポーネントを描画する
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    )
    // screen.debug() // DOM を console 上で展開する
  })

  it(`グローバルステートを更新した時に、更新後の文字列（${updatedName}）に変更されているか`, () => {
    // <Button>ボタン</Button> をクリックする
    userEvent.click(screen.getByText('ボタン'))

    expect(screen.getByText(`name: ${updatedName}`)).toBeInTheDocument()
  })
})
