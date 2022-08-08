import User from './modules/user'

import HomeRouter from './modules/home'

const routerArr = [
  ...User,
  {
    path: '/',
    component: '@/pages/index',
    // wrappers: ['@/utils/auth'],   //鉴权
    layout: false,
    routes: [
      ...HomeRouter,
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '*',
        redirect: '/404',
      },
    ],
  },
  {
    path: '/404',
    component: '@/pages/404',
    layout: false,
    title: '页面丢失',
  },
]

export default routerArr
