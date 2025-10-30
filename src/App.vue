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
  <div class="relative z-10 flex flex-col h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <main class="flex-1 pt-20 px-6 mainScreen" :style="{ color: colors.text }">
      <RouterView />
      <!-- Footer inside scroll area -->
      <Footer />
    </main>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent body scrolling */
  background: transparent;
}

/* Make main scrollable */
.mainScreen {
  overflow-y: auto;
  height: calc(100vh - 80px); /* Adjust based on your navbar height */
}
</style>