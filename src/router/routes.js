
const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  component: () => import('pages/Login.vue'),
},

{
  path: '/main',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '', component: () => import('pages/Index.vue') },
    {
      path: '/order',
      component: () => import('pages/PayOrder.vue')
    },
    {
      path: '/payoutOrder',
      component: () => import('pages/PayoutOrder.vue')
    },
  ]
},

// Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => import('pages/Error404.vue')
}
]

export default routes
