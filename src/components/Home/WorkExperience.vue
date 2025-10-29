<template>
  <div
    ref="targetRef"
    class="flex flex-col items-center justify-center w-full "
  >
    <div class="w-full text-left">
      <!-- Title -->
      <Text
        v-motion="{
          initial: { opacity: 0, x: -500 },
          enter:{
                opacity: 1,
                x: 0,
                transition: { type: 'circular', stiffness: 80, damping: 15, mass: 0.9 },
              }
            
        }"
        variant="h3"
        class="text-4xl font-bold text-white mb-8"
      >
        Work Experience
      </Text>

      <!-- Work Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="(work, index) in workData"
          :key="index"
          v-motion="{
            initial: { opacity: 0, y: 100 },
            enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.15 * index,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  },
                }
          }"
          class="relative group bg-gradient-to-br from-[#1a0f3c]/80 to-[#110729]/70 p-8 rounded-3xl border border-white/10 hover:border-purple-400/40 shadow-2xl transition-all duration-500 overflow-hidden"
        >
          <!-- Glow Effect -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-transparent blur-2xl"
          ></div>

          <!-- Icon -->
          <div
            class="relative z-10 mb-8 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner"
          >
            <img
              :src="work.icon"
              alt="icon"
              class="w-10 h-10 object-contain drop-shadow-lg"
            />
          </div>

          <!-- Content -->
          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-semibold text-white mb-2">
              {{ work.role }}
            </h3>
            <p class="text-sm text-purple-300 mb-3">
              {{ work.company }}
            </p>
            <p class="text-gray-300 text-base mb-6 leading-relaxed">
              {{ work.description }}
            </p>

            <!-- Learn More Button -->
            <button
              class="relative z-20 px-6 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Text from "../Text.vue";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

// 👇 Create a reference for the section
const targetRef = ref(null);
const isVisible = ref(false);

// 👇 Watch when the section scrolls into view
useIntersectionObserver(targetRef, ([entry]) => {
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
});

const workData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    company: "Delibo | Pranath Technocraft Pvt. Ltd. (Chennai)",
    role: "Software Engineer",
    description:
      "Engineered scalable front-end applications with Vue.js and React, enhancing UI/UX for mobile-first client onboarding systems and improving performance by 30%.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721283.png",
    company: "Zithara Technologies Pvt. Ltd. (Hyderabad)",
    role: "Frontend Developer",
    description:
      "Developed and maintained interactive dashboards using Vue.js, ensuring pixel-perfect design implementation and responsive behavior across devices.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1000/1000950.png",
    company: "Serial Experiments LLP (Hyderabad)",
    role: "Junior Web Developer",
    description:
      "Collaborated with design and backend teams to deliver dynamic web solutions with optimized code and modern animations that boosted engagement metrics.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1829/1829584.png",
    company: "Freelance Projects",
    role: "UI Developer",
    description:
      "Designed and developed custom landing pages and product showcases using Vue 3, GSAP, and TailwindCSS with a focus on immersive, futuristic design aesthetics.",
  },
];
</script>

<style scoped>
/* Optional: Add smooth hover effect on cards */
</style>
