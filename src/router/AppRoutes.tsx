import Home from 'components/pages/Home/Home'

export const AppRoutes = [
  {
    path: '/',
    children: <Home />
  },
  {
    path: '*',
    children: <Home />
  }
]
