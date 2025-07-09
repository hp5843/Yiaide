<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- :rules="[{ required: true, message: '请填写用户名' }]" -->
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
        />
         <!-- :rules="[{ required: true, message: '请填写密码' }]" -->
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
        />
      </van-cell-group>
      
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>


import { showToast } from 'vant';

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(){
      showToast('登录成功');
      localStorage.setItem('token','123')
      this.$router.push('/index')
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  background-color: #f7f8fa;
}
</style>
