import React, { memo } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'router/AppRoutes'

const Router = memo(() => {
  return process.env.REACT_APP_PUBLIC_BUILD_TYPE === 'LATEST' ? (
    <BrowserRouter>
      <Routes>
        {AppRoutes.map((route) => (
          <Route key={route.path} path={`${route.path}`} element={route.children} />
        ))}
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter basename={`/old/${process.env.REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION}`}>
      <Routes>
        {AppRoutes.map((route) => (
          <Route key={route.path} path={`${route.path}`} element={route.children} />
        ))}
      </Routes>
    </BrowserRouter>
  )
})

export default Router
