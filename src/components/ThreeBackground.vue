<template>
  <div ref="bgContainer" class="fixed inset-0 -z-10"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const bgContainer = ref(null)
let scene, camera, renderer, particles, animationFrame

onMounted(() => {
  // --- Scene ---
  scene = new THREE.Scene()

  // --- Camera ---
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  // --- Renderer ---
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.NoToneMapping
  bgContainer.value.appendChild(renderer.domElement)

  // --- Solid background color (exact #1A0B2E) ---
  scene.background = new THREE.Color('#11071f')

  // --- Particles (white dots) ---
  const geometry = new THREE.BufferGeometry()
  const count = 1000
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: '#3B9797',      // white dots
    size: 0.05,
    sizeAttenuation: true, // size changes with distance
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // --- Animation ---
  const animate = () => {
    particles.rotation.y += 0.001
    particles.rotation.x += 0.0005
    renderer.render(scene, camera)
    animationFrame = requestAnimationFrame(animate)
  }

  animate()

  // --- Handle Resize ---
  window.addEventListener('resize', onResize)
})

function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight; // can also be document.body.scrollHeight if you want full page
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', onResize)
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
div {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
