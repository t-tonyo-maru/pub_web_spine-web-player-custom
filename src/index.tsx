// react
import React from 'react'
import ReactDOM from 'react-dom/client'
// app component
import App from './App'
// webvital report
import reportWebVitals from './reportWebVitals'
// global store provider
import { StoreProvider } from 'store/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <StoreProvider> でアプリ全体でグローバルステートを参照できるようにする */}
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
