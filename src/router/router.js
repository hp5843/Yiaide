import { createRouter, createWebHistory } from 'vue-router'

import { request } from '../components/utils/utils'

import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/index', 
      component: Index,
      meta: { requiresAuth: true }, // 需要认证
    },
    { 
      path: '/', 
      component: Login,
      meta: { requiresAuth: false } // 明确设置为无需认证
    },
    // 404路由必须放在最后
    { 
      path: '/:pathMatch(.*)*', 
      component: NotFound,
      meta: { requiresAuth: false }
    }
  ]
})



// 新增验证函数
async function validateToken() {
  return false;
  try {
    const res = await request.get('/index/validateExtend');
    return res.code === 200;
  } catch (error) {
    console.error('Token验证失败:', error);
    return false;
  }
}

// 修改路由守卫
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);  // 路由是否需要认证
  
  // 不需要认证的路由直接放行
  if (!requiresAuth && to.path !== '/') {
    return next();
  }

  try {
    // 需要认证或访问根路径时验证token
    if (isAuthenticated) {
      const isValid = await validateToken();
      if (isValid) {
        return to.path === '/' ? next('/index') : next();
      }
    }
    
    // 未认证或token无效的处理
    if (requiresAuth) {
      return next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    }
    next();
  } catch (error) {
    localStorage.removeItem('token');
    console.error('验证失败:', error);
    next('/');
  }
});

export default router