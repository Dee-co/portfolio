<template>
  <div ref="canvasContainer" class="fixed top-0 left-0 w-full h-full -z-10"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)
let scene, camera, renderer, cube, animationFrame

onMounted(() => {
  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 4

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0) // transparent background
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  canvasContainer.value.appendChild(renderer.domElement)

  // Cube
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff, // makes it glow
    emissiveIntensity: 0.3,
    metalness: 0.2,
    roughness: 0.3,
  })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(2, 3, 4)
  scene.add(pointLight)

  // Particles (small white dots)
  const particlesGeometry = new THREE.BufferGeometry()
  const count = 400
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  })
  const particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  // Animation
  const animate = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    particles.rotation.y += 0.001
    renderer.render(scene, camera)
    animationFrame = requestAnimationFrame(animate)
  }

  animate()

  // Resize
  window.addEventListener('resize', onWindowResize)
})

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', onWindowResize)
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
div {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
