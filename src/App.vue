<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import { useRevealAnimation } from '@/composables/useRevealAnimation'

useRevealAnimation()
</script>

<style>
@import '@/assets/styles/main.css';
</style>
