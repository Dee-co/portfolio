<template>
  <div
    v-motion="{
      initial: { opacity: 0, y: -80 },
      enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }"
  >
    <div class="flex flex-col items-center justify-center w-full">
      <section
        class="flex flex-col items-center justify-center text-center py-16 text-white"
      >
        <h2 class="text-3xl font-bold mb-10">
          Professional <span class="text-purple-500">Skillset</span>
        </h2>

        <!-- Tech Stack Grid -->
        <div
          class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-4xl"
        >
          <div
            v-for="(tech, index) in techData"
            :key="index"
            class="flex flex-col items-center hover:scale-110 transition-transform duration-300"
          >
            <img
              :src="tech.icon"
              :alt="tech.name"
              class="w-14 h-14"
            />
            <p class="mt-2 text-sm">{{ tech.name }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Helper function to resolve image paths properly
const getImageUrl = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

const techData = reactive([
  { name: "Vue.js", icon: getImageUrl("vue.svg") },
  { name: "React", icon: getImageUrl("react.svg") },
  { name: "React Native", icon: getImageUrl("react.svg") },
  { name: "JavaScript", icon: getImageUrl("js.svg") },
  { name: "Quasar", icon: getImageUrl("quasar.svg") },
  { name: "Vuetify", icon: getImageUrl("vuetify.svg") },
  { name: "TailwindCSS", icon: getImageUrl("tailwind.svg") },
  { name: "Bootstrap", icon: getImageUrl("bootstrap.svg") },
  { name: "HTML5", icon: getImageUrl("html5.svg") },
  { name: "CSS3", icon: getImageUrl("css.svg") },
  { name: "Git", icon: getImageUrl("github.svg") },
  { name: "Figma", icon: getImageUrl("figma.svg") },
  { name: "AWS", icon: getImageUrl("aws.svg") },
  { name: "Node.js", icon: getImageUrl("node.svg") },
  { name: "MongoDB", icon: getImageUrl("mongodb.svg") },
]);
</script>

<style scoped>
</style>
