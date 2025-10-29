import { createRouter, createWebHistory } from "vue-router";
// import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Resume from "../pages/Resume.vue";
import Project from "../pages/Project.vue";
const Home = () => import('../pages/Home.vue')
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
    return { top: 0 };
  },
});

export default router;
