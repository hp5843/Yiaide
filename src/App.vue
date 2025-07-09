<template>
    <Index/>
</template>


<script>

import Index from './Index.vue';

export default {
  components: {
    Index
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    syncEnv(){
      window.ec.call('customFunction', '');
    }
  },
  mounted() {
    console.log(this.count)
  }
}

</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
