<template>
  <div>
    <div class="scroll">
      <Nav />
      <div>
        <router-link to="/"></router-link>
      </div>
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
// import Preload from "@/components/pageloader.vue";
import Nav from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Jesutobi's portfolio",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Vue developers in Nigeria",
  },
  data() {
    return {};
  },
  components: {
    Nav,
    Footer,
    // Preload,
  },
};
</script>

<style scocped>
.scroll {
  scroll-behavior: smooth !important;
}
</style>
