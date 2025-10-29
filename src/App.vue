<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import ThreeBackground from './components/ThreeBackground.vue'
import Footer from './components/Footer.vue'
import colors from './utils/colors.js'
</script>

<template>
  <!-- Fixed 3D Background -->
  <ThreeBackground style="position: fixed; height: 100vh; width: 100vw;" />

  <!-- Foreground Layout -->
  <div class="relative z-10 flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content (pushes footer down) -->
    <main class="flex-grow pt-20 px-6" :style="{ color: colors.text }">
      <RouterView />
    </main>

    <!-- Footer (always at bottom) -->
    <Footer />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: transparent;
}
</style>

<style scoped>
</style>
