import { createRouter, createWebHistory } from 'vue-router'

import { request } from '../components/utils/utils'

import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

import Home from '../components/views/Home.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/index', 
      component: Index,
      // redirect: '/home',
      // meta: { requiresAuth: true }, // 需要认证
      // children: [
      //   {
      //     path: '/home',
      //     name: 'home',
      //     component: Home
      //   },
      // ]
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
  return true;
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
  // 如果是根路径且已登录
  if (to.path === '/' && isAuthenticated) {
    try {
      const isValid = await validateToken();
      if (isValid) {
        next('/index');
      }
    } catch (error) {
      console.error('验证失败:', error);
    }
  }else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    } else {
      const isValid = await validateToken();
      if (isValid) {
        next();
      } else {
        next({ path: '/',query: { redirect: to.fullPath } });
      }
    }
  } else {
    next();
  }
});

export default router