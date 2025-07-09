import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'login',
    meta: { requiresAuth: false } ,
    component: () => import('../Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/home',
    meta: { requiresAuth: true }, // 需要认证
    component: () => import('../Index.vue'),
    children: [
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
    ]
  },
  // 404路由必须放在最后
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import('../components/NotFound.vue'),
    meta: { requiresAuth: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 新增验证函数
async function validateToken() {
  // try {
  //   const res = await request.get('/index/validateExtend');
  //   return res.code === 200;
  // } catch (error) {
  //   console.error('Token验证失败:', error);
  //   return false;
  // }
  return true
}

// 修改路由守卫
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  // 如果是根路径且已登录
  if (to.path === '/' && isAuthenticated) {
    try {
      const isValid = await validateToken();
      if (isValid) {
        next('/home');
      }
    } catch (error) {
      console.error('验证失败:', error);
    }
  }else if (to.matched.some(record => record.meta.requiresAuth)) { // 需要认证
    if (!isAuthenticated) { 
      // 跳转回登录页
      next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    } else {
      const isValid = await validateToken();
      if (isValid) { // 验证通过
        next();
      } else { // 验证失败
        // 清除本地存储的token
        localStorage.removeItem('token');
        // 跳转回登录页
        next({ path: '/',query: { redirect: to.fullPath } });
      }
    }
  } else {
    next();
  }
});

export default router;