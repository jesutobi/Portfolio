import { createRouter, createWebHistory } from "vue-router";
import intro from "@/views/Homepage.vue";
// import Skills from "@/views/skills.vue";
import Projects from "@/components/projects.vue";
// import Testimonials from "@/views/testimonials.vue";
import Contacts from "@/components/contacts.vue";
import ViewmoreLayout from "@/components/viewmoreLayout.vue";
import HomeLayout from "@/components/homeLayout.vue";
import ViewM from "@/components/about/resume";
import ViewMore from "@/components/ViewMore.vue";
import Abt from "@/components/about/About.vue";

// import About from "@/views/about.vue";

const routes = [
  { path: "/", name: "intro", component: intro },
  // { path: "/skills", name: "skills", component: Skills },
  { path: "/projects", name: "Projects", component: Projects },
  // { path: "/testimonials", name: "Testimonials", component: Testimonials },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/about/resume", name: "viewM", component: ViewM },
  { path: "/about/About", name: "Abt", component: Abt },
  // { path: "/ViewMore", name: "viewmore", component: ViewMore },

  {
    path: "/viewmoreLayout",
    component: ViewmoreLayout,
    children: [
      {
        path: "/ViewMore",
        name: "viewmore",
        component: ViewMore,
      },
    ],
  },
  {
    path: "/",
    component: HomeLayout,
    children: [
      { path: "/", name: "intro", component: intro },
      // { path: "/skills", name: "skills", component: Skills },
      { path: "/projects", name: "Projects", component: Projects },
      // { path: "/testimonials", name: "Testimonials", component: Testimonials },
      { path: "/contacts", name: "Contacts", component: Contacts },
      { path: "/about/resume", name: "viewM", component: ViewM },
      { path: "/about/About", name: "Abt", component: Abt },
    ],
  },

  // { path: "/about", name: "about", component: About },e
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }

    // ...
  },
});

export default router;
