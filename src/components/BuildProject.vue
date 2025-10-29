<template>
  <section class="text-white w-full">
    <!-- Title -->
    <h2
      v-motion="{
        initial: { opacity: 0, y: -80 },
        enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }"
      class="text-3xl font-bold text-center mb-16"
    >
      Featured <span class="text-purple-500">Projects</span>
    </h2>

    <!-- Projects -->
    <div
      v-for="(project, index) in projects"
      :key="index"
      :class="[
        'flex flex-col md:flex-row items-center justify-between gap-10 pb-12 px-4 md:px-12 rounded-2xl transition-all duration-700',
      ]"
    >
      <!-- Image -->
      <div class="flex-1 flex justify-center items-center">
        <div
          class="rounded-2xl overflow-hidden shadow-lg flex justify-center items-center bg-[#1a103a]/40 p-4"
          style="height: 350px; width: 100%; max-width: 350px"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 text-left max-w-lg">
        <h3 class="text-2xl font-semibold mb-3 text-purple-400">
          {{ project.name }}
        </h3>
        <p class="text-gray-300 mb-4 text-sm leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="(tech, tIndex) in project.tech"
            :key="tIndex"
            class="text-xs bg-purple-500/20 text-purple-300 border border-purple-400/20 px-3 py-1 rounded-lg"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3">
          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            class="px-5 py-2 text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const projects = reactive([
  {
    name: "Bhuyia — Buy Building, Home, Property",
    image: "../../src/assets/images/bhuyia.png",
    description:
      "Bhuyia is a modern real estate platform designed for seamless property discovery and management. It enables users to buy, sell, and explore buildings, homes, and properties with an intuitive interface. Built with Vue.js and Node.js, it ensures smooth performance, responsive design, and efficient data handling for a superior user experience.",
    tech: ["Vue.js", "Vuetify", "Vuex", "TailwindCSS", "Node.js"],
    live: "https://bhuiyan-git-main-deepaks-projects-657c4b2e.vercel.app/",
  },

  {
    name: "Socal App",
    image: "../../src/assets/images/socal.png",
    description:
      "Socal is a society management app built with React Native and Firebase, helping residents and admins manage complaints, facilities, and community interactions efficiently. It simplifies daily operations and keeps neighborhoods connected in real-time.",
    tech: ["React Native","Redux", "Node.js", "MongoDB", "Express"],
    live: null,
  },
  {
    name: "DineTime App",
    image: "../../src/assets/images/dineTime.png",
    description:
      "DineTime is a dining and eCommerce app with smart locker integration for smooth booking, order pickup, and delivery experiences. Built with React Native, Firebase, and TailwindCSS, it makes dining seamless and convenient.",
    tech: ["React Native","Redux", "Firebase", "TailwindCSS",],
    live: null,
  },
]);
</script>

<style scoped>
/* section {
  background: radial-gradient(circle at top, #0f0525, #050214);
    index % 2 !== 0 ? 'md:flex-row-reverse bg-[#0c0720]/60' : 'bg-[#130c30]/60'
} */
</style>
