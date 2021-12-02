<script>
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import { onMounted, ref } from 'vue'
import Hls from 'hls.js'

export default {
  name: 'App',
  setup() {
    const mp = ref(null)
    onMounted(() => {
      mp.value = new MuiPlayer({
        container: '#mui-player',
        title: '直播测试',
        src: 'https://krtxplay1.setrtmp.com/live/SSAC-235128-AEAAF.m3u8',
        width: 'auto',
        height: 'auto',
        live: true,
        autoplay: true,
        muted: true,
        poster: '',
        parse: {
          type: 'hls',
          loader: Hls,
          config: {
            debug: false,
          },
        },
      })
    })

    const liveDispose = () => {
      mp.value.destory()
    }

    return {
      liveDispose,
    }
  },
}
</script>

<template>
  <div id="mui-player"></div>
  <button @click="liveDispose">destroy</button>
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
#mui-player {
  width: 600px;
  height: 300px;
}
</style>
