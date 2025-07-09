import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home.vue')
  },
  {
    path: '/dongtai',
    name: 'dongtai',
    component: () => import('../components/Dongtai.vue')
  },
  {
    path: '/bbx',
    name: 'bbx',
    component: () => import('../components/Bbx.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../components/My.vue')
  },
  // 可以继续添加其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;