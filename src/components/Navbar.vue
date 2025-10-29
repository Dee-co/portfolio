  <template>
  <nav
    class="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/5 border-b border-white/20 z-20"
  >
    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Logo / Name -->
      <RouterLink
        to="/"
        class="text-2xl font-semibold text-white tracking-wide"
      >
        Deepak
      </RouterLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-white text-lg">
        <li
          v-for="route in routers"
          :key="route.name"
        >
          <RouterLink
            :to="route.path"
            v-slot="{ isActive }"
            class="hover:text-primary-400 transition-colors duration-300"

          >
          <Text :style="{fontSize:'20px', color:isActive?colors.active:colors.deemActive}" > {{ route.name }}</Text>
           
          </RouterLink>
        </li>
      </ul>
      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 text-white text-center py-4 space-y-3"
      >
      <RouterLink  v-for="route in routers"
          :key="route.name" :to="route.path" class="block hover:text-emerald-400" @click="closeMenu">
          <Text :style="{fontSize:'18px'}"> {{ route.name }}</Text>
          </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Text from "./Text.vue";
import colors from '../utils/colors.js'
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);
const routers = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
