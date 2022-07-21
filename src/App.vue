<template>
  <div >
    <Nav />
    <div>
      <router-link to="/" ></router-link>
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Nav,Footer
  },
};
</script>

<style>

</style>
