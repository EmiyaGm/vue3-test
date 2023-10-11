<script setup>
import { onMounted, ref  } from 'vue'
import ChildComponent from '../components/ChildComponent.vue'

const testArray = ref([])

onMounted(() => {
  testArray.value = [{ name: 1 }]
})

const change = (id) => {
  // testArray.value = [{ name: id }]  // 修改了内存地址，这时候这个 testArray 已经不是原来那个 testArray 了，而子组件里面的 arr 还存放的是以前的 testArray，所以才导致只会触发 watch 但是长度是一样的导致不去更新 arr
  testArray.value[0].name = id
  // testArray.value[0] = { name: id }
  console.log(testArray)
}
</script>

<template>
  <div>
    ref_array
    <ChildComponent v-model="testArray">
      <template #item="{ item, index }">
        <view>{{ item.name }}</view>
      </template>
    </ChildComponent>
    <button @click="change(2)">change</button>
    <button @click="change(3)">change</button>
  </div>
</template>

<style></style>
