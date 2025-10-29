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
              :src="`../../src/assets/images/${tech.icon}`"
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
import Text from "./Text.vue";
import colors from "../utils/colors.js";
import { reactive } from "vue";
const techData = reactive([
  { name: "Vue.js", icon: "vue.svg" },
  { name: "React", icon: "react.svg" },
  { name: "React Native", icon: "react.svg" },
  { name: "JavaScript", icon: "js.svg" },
  { name: "Quasar", icon: "quasar.svg" },
  { name: "Vuetify", icon: "vuetify.svg" },
  { name: "TailwindCSS", icon: "tailwind.svg" },
  { name: "Bootstrap", icon: "bootstrap.svg" },
  { name: "HTML5", icon: "html5.svg" },
  { name: "CSS3", icon: "css.svg" },
  { name: "Git", icon: "github.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "AWS", icon: "aws.svg" },
  { name: "Node.js", icon: "node.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
]);
</script>

<style scoped>
</style>