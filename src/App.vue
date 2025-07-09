<template>
  <router-view></router-view>
</template>


<script >

export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  methods: {
    changeMessage() {
      this.message = '你好 Vue!';
    }
  },
  mounted() {
    this.changeMessage();
  }
}

</script>

<style scoped>

</style>
