<template>
  <div id="app">
    <router-link to='/login'></router-link> &nbsp;
    <!-- <router-link to='/zuce'>注册</router-link> -->
    <router-view></router-view>
    <!-- <login></login>-->
    <!-- <zuce></zuce>  -->
  </div>
</template>

<script>

// import login from './components/login.vue'
// import zuce from './components/zuce.vue'


export default {
  name: 'App',
  components: {
    // login,
    // zuce

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(15, 9, 14);
  

}

</style>
