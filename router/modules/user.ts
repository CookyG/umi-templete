const UserRouter = [
  {
    path: '/user',
    component: '@/pages/user/index',
    title: '首页',
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: '@/pages/user/Login/index',
          },
        ],
      },
      {
        component: '@/pages/404',
      },
    ],
  },
]

export default UserRouter
