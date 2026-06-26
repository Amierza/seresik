<template>
  <div style="padding: 80px 20px; background: yellow; border: 5px solid red">
    <h2 style="font-size: 30px; font-weight: bold; color: black; margin-bottom: 20px">
      TEST COMPONENT - If you see this, Vue is working!
    </h2>
    <p style="font-size: 18px; color: black">Current time: {{ currentTime }}</p>
    <p style="font-size: 18px; color: black">Random number: {{ randomNumber }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentTime = ref('')
const randomNumber = ref(0)

onMounted(() => {
  currentTime.value = new Date().toLocaleTimeString()
  randomNumber.value = Math.floor(Math.random() * 1000)
  console.log('✅ TestSimple component MOUNTED successfully')
})

console.log('✅ TestSimple component SETUP executed')
</script>
