<template>
  <div
    class="flex flex-col items-center justify-center w-full min-h-screen px-4 pb-10"
  >
    <div
      class="max-w-6xl w-full flex flex-col items-center justify-center gap-16"
    >
      <!-- Intro Section -->
      <section
        class="flex flex-col md:flex-row items-center justify-between gap-10 w-full"
      >
        <!-- Left: Text -->
        <div class="flex flex-col w-full md:w-1/2 space-y-4">
          <Text
            variant="body"
            class="text-5xl md:text-6xl font-extrabold text-white tracking-tight text-center md:text-left"
          >
            Hi There! <span class="wave">👋🏻</span>
          </Text>

          <Text
            variant="body"
            class="text-white text-center md:text-left text-2xl md:text-3xl mt-3"
          >
            I'M
            <span :style="{ color: colors.active }" class="font-bold">
              DEEPAK MALAKAR
            </span>
          </Text>

          <p
            class="typeWriter text-xl md:text-2xl mt-2 font-semibold text-center md:text-left"
            :style="{ color: colors.active }"
          >
            {{ displayText }}
          </p>
        </div>

        <!-- Right: Profile Image -->
        <div class="relative w-full md:w-1/2 flex justify-center items-center">
          <div
            class="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr shadow-lg shadow-[#4e54c8]/10 flex justify-center items-center overflow-hidden"
          >
            <img
              :src="meImage"
              alt="Me"
              class="w-64 md:w-72 transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </section>

      <!-- Hero Section -->
      <section
        class="flex flex-col md:flex-row items-center justify-between gap-10 w-full"
      >
        <!-- Left: Description -->
        <div
          class="flex flex-col space-y-5 w-full md:w-1/2 text-center md:text-left"
        >
        <Text variant="h3" class=" text-center text-gray-300 leading-relaxed">LET ME <span :style="{ color: '#B968C7' }">INTRODUCE</span> MYSELF</Text>
          <Text variant="body" class="text-lg text-gray-300 leading-relaxed">
            I’m a Software Engineer who loves transforming ideas into reliable,
            scalable products. Over time, I’ve explored several technologies and
            found my passion in building high-performance systems and intuitive
            user experiences.
            <!-- I'm a Software Engineer and Frontend Developer specializing in Vue.js, React Native, React, and building modern, responsive web and mobile applications. -->
          </Text>

          <Text variant="body" class="text-lg text-gray-300 leading-relaxed">
            I’m proficient in

            <span :style="{ color: colors.active }" class="font-bold"
              >Vue.js, React Native, React, Node.js and building modern, responsive web
              and mobile applications</span
            >
            — and I enjoy working across both backend and frontend stacks.
          </Text>
          
        </div>

        <!-- Right: Hero Image -->
        <div class="relative w-full md:w-1/2 flex justify-center items-center">
          <div
            class="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-[#4e54c8]/30 hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <img
              :src="homeImage"
              alt="Hero"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import meImage from "../../assets/images/Me.svg";
import homeImage from "../../assets/images/home-main.svg";
import Text from "../Text.vue";
import colors from "../../utils/colors.js";

// Typewriter logic
const roles = [
  "Software Engineer",
  "React Native Developer",
  "MERN Stack Developer",
  "Open Source Contributor",
  "Freelancer",
];
const displayText = ref("");
let index = 0;
let charIndex = 0;

const typeWriter = () => {
  if (charIndex < roles[index].length) {
    displayText.value += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    displayText.value = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeWriter, 500);
  }
};

onMounted(() => {
  typeWriter();
});
</script>

<style scoped>
.wave {
  animation: wave-animation 2.1s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0%,
  60%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  30%,
  50% {
    transform: rotate(14deg);
  }
  20%,
  40% {
    transform: rotate(-8deg);
  }
}

.typeWriter {
  min-height: 28px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .typeWriter {
    font-size: 18px;
  }
}
</style>
