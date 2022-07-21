import { createRouter, createWebHistory } from "vue-router";
import intro from "@/views/intro.vue";
import Skills from "@/views/skills.vue";
import Projects from "@/components/projects.vue";
import Testimonials from "@/views/testimonials.vue";
import Contacts from "@/components/contacts.vue";
// import About from "@/views/about.vue";

const routes = [
  { path: "/", name: "intro", component: intro },
  { path: "/skills", name: "skills", component: Skills },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/testimonials", name: "Testimonials", component: Testimonials },
  { path: "/contacts", name: "Contacts", component: Contacts },
  // { path: "/about", name: "about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
 