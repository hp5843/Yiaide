<template>
    <div class="index-container">
        <!-- 页面内容区域 -->
        <div class="content">
            <router-view />
        </div>

        <!-- 底部导航栏 -->
        <van-tabbar v-model="active" safe-area-inset-bottom @change="handleTabChange">
            <van-tabbar-item v-for="(item, index) in tabbarItems" :key="index" :icon="item.icon" :name="item.name">
                {{ item.text }}
                <template #icon>
                  <van-icon v-if="item.vanticon" :name="item.vanticon" />
                  <div v-else style="width: 22px;height: 22px;" >
                    <img v-if="active === item.name" :src="item.iconActive" alt="">
                    <img v-else :src="item.icon" alt="">
                  </div>
              </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

import homeSvg from './assets/svg/home.svg';
import homeSvgActive from './assets/svg/home-active.svg';

import dongtaiSvg from './assets/svg/dongtai.svg';
import dongtaiSvgActive from './assets/svg/dongtai-active.svg';

import bbxSvg from './assets/svg/bbx.svg';
import bbxSvgActive from './assets/svg/bbx-active.svg';



export default {
  data() {
    return {
      active: 'home',
      tabbarItems: [
        { name: 'home', text: '首页', icon: homeSvg, iconActive: homeSvgActive },
        { name: 'dongtai', text: '动态', icon: dongtaiSvg, iconActive: dongtaiSvgActive },
        { name: 'bbx', text: '百宝箱', icon: bbxSvg, iconActive: bbxSvgActive},
        { name: 'my', text: '我的', vanticon: 'contact-o'}
      ]
    }
  },
  methods: {
    handleTabChange(name) {
      this.$router.push({ name });
    }
  }
}
</script>

<style scoped>
.index-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content {
    flex: 1;
    overflow-y: auto;
}
</style>
