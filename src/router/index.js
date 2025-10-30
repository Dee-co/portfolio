import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Resume from "../pages/Resume.vue";
import Project from "../pages/Project.vue";
 import Home from '../pages/Home.vue'

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/Resume", name: "Contact", component: Resume },
  { path: "/projects", name: "Projects", component: Project },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Simple and reliable scroll to top
    return new Promise((resolve) => {
      setTimeout(() => {
        const main = document.querySelector('.mainScreen');
        if (main) {
           main.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        resolve({ left: 0, top: 0 });
      }, 50); // Shorter delay
    });
  },
});

export default router;