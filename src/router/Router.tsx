import React, { memo } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'router/AppRoutes'

const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRoutes.map((route) => (
          <Route
            key={route.path}
            path={`${route.path}`}
            element={route.children}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
})

export default Router
