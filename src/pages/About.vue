<template>
  <div
    class="flex flex-col items-center justify-center w-full min-h-screen px-4"
  >
    <div class="mt-5 max-w-4xl w-full flex flex-col items-center justify-center">
      <section
        class="flex flex-col md:flex-row items-center justify-between gap-10 w-full"
      >
        <!-- Left: Description -->
        <div
          class="flex flex-col space-y-5 w-full md:w-1/2 text-center md:text-left"
        >
          <Text variant="h3" class="text-center text-gray-300 leading-relaxed"
            >Know <span :style="{ color: '#B968C7' }">WHO</span> I'M</Text
          >
          <Text variant="body" class="text-lg text-gray-300 leading-relaxed">
            Hi everyone! I’m
            <span :style="{ color: colors.active }" class="font-bold"
              >Deepak Malakar</span
            >
            from
            <span :style="{ color: colors.active }" class="font-bold"
              >Chattishgarh India</span
            >.
          </Text>
          <Text variant="body" class="text-lg text-gray-300 leading-relaxed">
            I’m currently working as a
            <span :style="{ color: colors.active }" class="font-bold"
              >Software Engineer</span
            >
            at
            <span :style="{ color: colors.active }" class="font-bold"
              >Delibo</span
            >.
          </Text>
          <Text variant="body" class="text-lg text-gray-300 leading-relaxed">
            I hold an Integrated
            <span :style="{ color: colors.active }" class="font-bold"
              >B.Tech
            </span>
            in
            <span :style="{ color: colors.active }" class="font-bold"
              >Mechanical</span
            >
            from
            <span :style="{ color: colors.active }" class="font-bold"
              >CIT Raajnandgaon Chattishgarh</span
            >.
          </Text>
          <Text variant="body" class="text-lg text-gray-300 leading-relaxed">
            Outside of coding, I love engaging in activities that keep me
            inspired and motivated, such as
          </Text>
          <Text class="list">➡️ Playing Games 🎮</Text>
          <Text class="list">➡️ Writing Tech Blogs ✍️</Text>
          <Text class="list">➡️ Traveling and Exploring New Places 🌍</Text>
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
      <div class="mt-10 w-full">
        <ContentSection />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ContentSection from "../components/ContentSection.vue";
import homeImage from "../assets/images/about.png";
import Text from "../components/Text.vue";
import colors from "../utils/colors.js";

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
.list {
  margin-top: 5px !important;
}
</style>

