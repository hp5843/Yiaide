<template>
  <div class="not-found">
    <h1>404</h1>
    <p>页面未找到</p>
    <van-button type="primary" @click="goHome">返回首页</van-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
.not-found h1 {
  font-size: 100px;
  color: #f56c6c;
}
</style>