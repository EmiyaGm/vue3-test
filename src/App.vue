<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const toPage = (url) => {
  router.push(url)
}
</script>

<template>
  <div>
    <hr />
    <div>
      <router-link to="/">index</router-link>
      -----------------
      <router-link to="/mui_player">mui_player</router-link>
      -----------------
      <router-link to="/ref_array">ref_array</router-link>
      <hr />
    </div>

    <hr />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
