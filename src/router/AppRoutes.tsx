import Home from 'components/pages/Home/Home'
import Pet from 'components/pages/Pet/Pet'
import User from 'components/pages/User/User'
import Page404 from 'components/pages/Page404/Page404'

export const AppRoutes = [
  {
    path: '/',
    children: <Home />
  },
  {
    path: '/pet',
    children: <Pet />
  },
  {
    path: '/user/detail',
    children: <User />
  },
  {
    path: '*',
    children: <Page404 />
  }
]
