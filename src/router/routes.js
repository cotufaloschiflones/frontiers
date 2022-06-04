import store from '@/store'

export default [
  {
    path:      '/',
    component: () => import('@/Layout'),
    children:  [
      {
        path:        '/',
        name:        'home',
        component:   () =>   import('@/views/PaperDetail'),
        beforeEnter: async (to, from, next) => {
          await store.dispatch('fetchPaperDetail')
          next()
        },
      },
      {
        path:      'recursive-menu',
        name:      'recursiveMenu',
        component: () => import('@/views/RecursiveMenu')
      }
    ]
  }
]
