<template>
  <div class="">
    <div>
      <!-- hero seection -->
      <div>
        <Hero />
      </div>
      <!-- About and skills -->
      <div class="">
        <About />
      </div>
      <!-- work component -->
      <div>
        <Works />
      </div>
      <!-- contact componets -->
      <div class="contacts-space">
        <Contacts />
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
// import { setTimeout } from "timers";
import Contacts from "@/components/contacts.vue";
import Works from "@/components/projects.vue";
import About from "@/components/about/About.vue";

import Hero from "@/components/intro.vue";
export default {
  components: {
    Contacts,
    Works,
    About,

    Hero,
  },
  data: () => {
    return {};
  },

  metaInfo() {
    return {
      title: `${this.post.title}-jesutobi's portfolio`,
      meta: [
        {
          name: "Jesutobi is an experienced Frontend developer that has the ability to build scalable web applications that is visually appealing with a great user experience",
          content: this.post.body.slice(0, 200),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
