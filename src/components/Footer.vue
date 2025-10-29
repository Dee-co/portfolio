<template>
  <footer
    class="w-full bg-gradient-to-r from-[#0f0525] via-[#1a103a] to-[#0f0525] text-gray-300 border-t border-white/10 py-5 px-6 mt-10"
  >
    <div
      class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center place-items-center"
    >
      <!-- Column 1: About -->
      <div class="flex flex-col items-center justify-center">
        <p class="text-sm leading-relaxed max-w-xs">
          Designed and developed by
          <span class="text-purple-400 font-medium">Deepak Malakar</span>.
        </p>
      </div>

      <!-- Column 2: Dynamic Social Icons -->
      <div class="flex items-center justify-center gap-6">
        <a
          v-for="(icon, index) in socialLinks"
          :key="index"
          :href="icon.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="icon.image"
            :alt="icon.name"
            class="w-7 h-7 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      <!-- Column 3: Contact Info -->
      <div class="flex flex-col items-start justify-start">
        <p class="text-sm">📞 +91 9399909989</p>
        <p class="text-sm">📞 +91 9755814736</p>
        <p class="text-sm mt-1">✉️ dmalakar03@gmail.com</p>
      </div>
    </div>

    <!-- Copyright Section -->
    <div
      class="text-center mt-8 border-t border-white/10 pt-4 text-xs text-gray-400"
    >
      © {{ new Date().getFullYear() }} Deepak Malakar. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import github from "../../src/assets/images/github.svg";
import linkedin from "../../src/assets/images/linkedin.svg";
import facebook from "../../src/assets/images/facebook.svg";
import instagram from "../../src/assets/images/instagram.svg";

const socialLinks = [
  {
    name: "GitHub",
    image: github,
    link: "https://github.com/deepakmalakar",
  },
  {
    name: "LinkedIn",
    image: linkedin,
    link: "https://linkedin.com/in/deepakmalakar",
  },
  {
    name: "Facebook",
    image: facebook,
    link: "https://facebook.com",
  },
  {
    name: "Instagram",
    image: instagram,
    link: "https://instagram.com",
  },
];
</script>

<style scoped>
.text-purple-400 {
  text-shadow: 0 0 4px rgba(168, 85, 247, 0.4);
}
</style>
