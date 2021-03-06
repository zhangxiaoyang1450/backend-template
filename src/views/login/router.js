export default {
  path: '/login',
  component: () => import('@/layouts/null.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import('@views/login/Login.vue'),
      meta: {
        title: '登录',
        keepAlive: false,
        isAuth: false
      }
    }
  ]
}
