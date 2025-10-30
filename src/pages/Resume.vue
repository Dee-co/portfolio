<template>
  <div class="flex flex-col items-center justify-center w-full ">
    <!-- Title -->
   <div class="mt-6 flex gap-4">
      <Button
        @click="downloadPdf"
        variant="outline"
        title="📄 Download Resume"
        class=" text-white font-semibold py-2 px-6 rounded-lg shadow transition"
      
      />
      
    </div>

    <!-- PDF Container -->
    <div
      ref="pdfContainer"
      class="w-full max-w-4xl mt-5 flex justify-center bg-white rounded-lg shadow-md overflow-hidden"
     
    >
      <vue-pdf-embed
        :source="pdfSrc"
        :scale="scale"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import VuePdfEmbed from "vue-pdf-embed"
import Button from "../components/Button.vue";
const pdfSrc = ref("/deepak_resume_oct.pdf")
const pdfContainer = ref(null)
const scale = ref(1)
let fitWidth = 1
let fitHeight = 1

const updateScale = () => {
  const container = pdfContainer.value
  if (!container) return

  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  const pdfWidth = 800
  const pdfHeight = 1130

  fitWidth = containerWidth / pdfWidth
  fitHeight = containerHeight / pdfHeight
  scale.value = fitWidth // default
}

const toggleScale = () => {
  scale.value = scale.value === fitWidth ? fitHeight : fitWidth
}

const downloadPdf = () => {
  const link = document.createElement("a")
  link.href = pdfSrc.value
  link.download = "Deepak_Malakar_Resume.pdf"
  link.click()
}

onMounted(() => {
  updateScale()
  window.addEventListener("resize", updateScale)
})
</script>

<style scoped>
/* Optional: smooth scaling and transitions */
.vue-pdf-embed {
  transition: transform 0.3s ease;
}
</style>
