<template>
  <div>
    <div  style="height: 100vh" class="scroll">
      <!-- loader -->
      <Preload />
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
import Preload from "@/components/pageloader.vue";
import Nav from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  data() {
    return {
    
    };
  },
  components: {
    Nav,
    Footer,
    Preload,
  },
};
</script>

<style scocped>
.scroll {
  scroll-behavior: smooth !important;
}
</style>