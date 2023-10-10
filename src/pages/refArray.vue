<script setup>
import { onMounted, ref } from 'vue'
import ChildComponent from '../components/ChildComponent.vue'

const testArray = ref([])

onMounted(() => {
  testArray.value = [{ name: 1 }]
})

const change = (id) => {
  // testArray.value = [{ name: id }]
  testArray.value[0].name = id
  // testArray.value[0] = { name: id }
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
