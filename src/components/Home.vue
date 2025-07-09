<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="(item,index) in tabs" :key="index" :title="item.title">
      <component :is="item.component" />
    </van-tab>
  </van-tabs>

</template>

<script>


import douyin from './home_tabs/douyin.vue';
import kuai from './home_tabs/kuai.vue';
import momo from './home_tabs/momo.vue';
import xiaohongshu from './home_tabs/xiaohongshu.vue';

export default {
  data() {
    return {
      tabs: [
        { title: '抖音', component: douyin},
        { title: '快手', component: kuai},
        { title: '陌陌', component: momo},
        { title: '小红书', component: xiaohongshu}
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped></style>
