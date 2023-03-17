
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
       name:'home', path: '', component: () => import('pages/IndexPage.vue')
      },
      {
        name:'curriculo.listar', path: '/curriculos', component: () => import('pages/curriculos/ListarCurriculoPage.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
