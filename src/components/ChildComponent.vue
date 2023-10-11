<template>
  <div class="sort" id="sort">
    <div
      :data-id="JSON.stringify(item)"
      v-for="(item, index) in arr"
      :key="index"
    >
      <slot name="item" v-bind="{ item, index }">拖拽</slot>
    </div>
  </div>
</template>
<script setup>
import { watch, onMounted, ref, onBeforeUpdate } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const arr = ref([])

onBeforeUpdate(() => {
  console.log('-----44444------')
})

watch(
  () => props.modelValue,
  (newValue) => {
    try {
      if (arr.value !== newValue) {
        console.log('----3333-----')
        arr.value = newValue
      } else if (arr.value.length != newValue.length) {
        arr.value = newValue
      } else {
        console.log('------2222------')
      }
    } catch (error) {}
  },
  {
    deep: true,
  },
)

// const arr = computed({
//   get() {
//     return props.modelValue
//   },
//   set(value) {
//     emit('update:modelValue', value)
//   }
// })
</script>
<script></script>
